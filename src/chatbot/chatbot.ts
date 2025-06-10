// Main chatbot logic and state management

import { createClient } from '@supabase/supabase-js';
import { NLPProcessor } from './nlp';
import { ResponseGenerator } from './responses';
import { 
  ConversationContext, 
  ConversationState, 
  BotResponse, 
  SessionAvailability,
  BookingRequest,
  BookingConfirmation,
  ChatbotConfig
} from './types';

export class GardaRacingChatbot {
  private nlp: NLPProcessor;
  private responseGenerator: ResponseGenerator;
  private supabase: any;
  private config: ChatbotConfig;
  private conversations: Map<string, ConversationContext> = new Map();

  constructor(config: ChatbotConfig) {
    this.config = config;
    this.nlp = new NLPProcessor();
    this.responseGenerator = new ResponseGenerator();
    
    // Initialize Supabase client
    this.supabase = createClient(
      import.meta.env.VITE_SUPABASE_URL,
      import.meta.env.VITE_SUPABASE_ANON_KEY
    );
  }

  async processMessage(userId: string, message: string, sessionId?: string): Promise<BotResponse> {
    try {
      // Get or create conversation context
      const context = this.getOrCreateContext(userId, sessionId);
      context.lastMessage = message;

      // Classify intent
      const intent = await this.nlp.classifyIntent(message);
      
      // Log analytics
      this.logAnalytics('intent_recognized', userId, { intent: intent.name, confidence: intent.confidence });

      // Process based on current state and intent
      const response = await this.handleMessage(context, message, intent);
      
      // Update conversation context
      this.conversations.set(userId, context);
      
      return response;
    } catch (error) {
      console.error('Chatbot error:', error);
      this.logAnalytics('error_occurred', userId, { error: error.message });
      
      return {
        message: this.responseGenerator.getMessage('error_fallback', this.config.defaultLanguage),
        metadata: { nextState: ConversationState.ERROR_RECOVERY }
      };
    }
  }

  private async handleMessage(
    context: ConversationContext, 
    message: string, 
    intent: any
  ): Promise<BotResponse> {
    
    switch (context.state) {
      case ConversationState.WELCOME:
        return this.handleWelcome(context, intent);
      
      case ConversationState.COLLECTING_DATE:
        return this.handleDateCollection(context, message);
      
      case ConversationState.COLLECTING_TIME:
        return this.handleTimeCollection(context, message);
      
      case ConversationState.COLLECTING_PARTICIPANTS:
        return this.handleParticipantCollection(context, message);
      
      case ConversationState.CHECKING_AVAILABILITY:
        return this.handleAvailabilityCheck(context);
      
      case ConversationState.COLLECTING_CONTACT:
        return this.handleContactCollection(context, message);
      
      case ConversationState.CONFIRMING_BOOKING:
        return this.handleBookingConfirmation(context);
      
      default:
        return this.handleUnknownState(context);
    }
  }

  private handleWelcome(context: ConversationContext, intent: any): BotResponse {
    if (intent.name === 'get_info') {
      return {
        message: this.responseGenerator.getMessage('regatta_info', context.language),
        quickReplies: ['Забронировать', 'Еще вопросы'],
        metadata: { nextState: ConversationState.WELCOME }
      };
    }

    if (intent.name === 'book_session' || intent.name === 'greeting') {
      context.state = ConversationState.COLLECTING_DATE;
      return {
        message: this.responseGenerator.getMessage('ask_date', context.language),
        quickReplies: ['Завтра', 'На выходных', 'Конкретную дату'],
        metadata: { nextState: ConversationState.COLLECTING_DATE }
      };
    }

    return {
      message: this.responseGenerator.getMessage('welcome', context.language),
      quickReplies: this.responseGenerator.getQuickReplies(ConversationState.WELCOME, context.language),
      metadata: { nextState: ConversationState.WELCOME }
    };
  }

  private handleDateCollection(context: ConversationContext, message: string): BotResponse {
    const date = this.nlp.extractDate(message);
    
    if (!date) {
      context.retryCount = (context.retryCount || 0) + 1;
      if (context.retryCount >= this.config.maxRetries) {
        return this.escalateToHuman(context);
      }
      
      return {
        message: this.responseGenerator.getMessage('invalid_date', context.language),
        quickReplies: ['Завтра', '15.05', '20.05'],
        metadata: { nextState: ConversationState.COLLECTING_DATE }
      };
    }

    // Check if date is in season (April-October)
    const month = date.getMonth() + 1;
    if (month < 4 || month > 10) {
      return {
        message: this.responseGenerator.getMessage('season_closed', context.language),
        quickReplies: ['Выбрать другую дату'],
        metadata: { nextState: ConversationState.COLLECTING_DATE }
      };
    }

    context.selectedDate = date;
    context.state = ConversationState.COLLECTING_TIME;
    context.retryCount = 0;

    return {
      message: this.responseGenerator.getMessage('ask_time', context.language),
      quickReplies: this.responseGenerator.getQuickReplies(ConversationState.COLLECTING_TIME, context.language),
      metadata: { nextState: ConversationState.COLLECTING_TIME }
    };
  }

  private handleTimeCollection(context: ConversationContext, message: string): BotResponse {
    const timeSlot = this.nlp.extractTimeSlot(message);
    
    if (!timeSlot) {
      return {
        message: this.responseGenerator.getMessage('ask_time', context.language),
        quickReplies: ['Утром', 'Днем'],
        metadata: { nextState: ConversationState.COLLECTING_TIME }
      };
    }

    context.selectedTimeSlot = timeSlot;
    context.state = ConversationState.COLLECTING_PARTICIPANTS;

    return {
      message: this.responseGenerator.getMessage('ask_participants', context.language),
      quickReplies: this.responseGenerator.getQuickReplies(ConversationState.COLLECTING_PARTICIPANTS, context.language),
      metadata: { nextState: ConversationState.COLLECTING_PARTICIPANTS }
    };
  }

  private handleParticipantCollection(context: ConversationContext, message: string): BotResponse {
    const participantCount = this.nlp.extractParticipantCount(message);
    
    if (!participantCount) {
      return {
        message: this.responseGenerator.getMessage('invalid_participants', context.language),
        quickReplies: ['1', '2', '3', '4'],
        metadata: { nextState: ConversationState.COLLECTING_PARTICIPANTS }
      };
    }

    context.participantCount = participantCount;
    context.state = ConversationState.CHECKING_AVAILABILITY;

    return this.handleAvailabilityCheck(context);
  }

  private async handleAvailabilityCheck(context: ConversationContext): Promise<BotResponse> {
    try {
      // Show loading message
      const loadingResponse: BotResponse = {
        message: this.responseGenerator.getMessage('availability_check', context.language),
        metadata: { nextState: ConversationState.CHECKING_AVAILABILITY }
      };

      // Check availability in database
      const availability = await this.checkSessionAvailability(
        context.selectedDate!,
        context.selectedTimeSlot!,
        context.participantCount!
      );

      if (availability && availability.availableSpots >= context.participantCount!) {
        context.state = ConversationState.COLLECTING_CONTACT;
        
        const totalAmount = context.participantCount! * availability.pricePerPerson;
        
        return {
          message: this.responseGenerator.getMessage('available_session', context.language, {
            date: this.responseGenerator.formatDate(context.selectedDate!, context.language),
            timeSlot: this.responseGenerator.formatTimeSlot(context.selectedTimeSlot!, context.language),
            totalAmount
          }),
          quickReplies: ['Да, бронируем!', 'Изменить дату'],
          metadata: { nextState: ConversationState.COLLECTING_CONTACT }
        };
      } else {
        // Suggest alternatives
        const alternatives = await this.findAlternativeSessions(context.selectedDate!, context.participantCount!);
        
        return {
          message: this.responseGenerator.getMessage('unavailable_session', context.language, {
            date: this.responseGenerator.formatDate(context.selectedDate!, context.language),
            timeSlot: this.responseGenerator.formatTimeSlot(context.selectedTimeSlot!, context.language)
          }) + '\n\n' + this.formatAlternatives(alternatives, context.language),
          quickReplies: ['Выбрать альтернативу', 'Другую дату'],
          metadata: { nextState: ConversationState.COLLECTING_DATE }
        };
      }
    } catch (error) {
      console.error('Availability check error:', error);
      return this.escalateToHuman(context);
    }
  }

  private handleContactCollection(context: ConversationContext, message: string): BotResponse {
    const contactInfo = this.nlp.extractContactInfo(message);
    
    if (!context.customerInfo) {
      context.customerInfo = {};
    }

    // Update contact info
    if (contactInfo.email) {
      context.customerInfo.email = contactInfo.email;
    }
    if (contactInfo.phone) {
      context.customerInfo.phone = contactInfo.phone;
    }

    // Extract name if not provided
    if (!context.customerInfo.fullName && !contactInfo.email && !contactInfo.phone) {
      // Assume the message contains the name
      context.customerInfo.fullName = message.trim();
    }

    // Check if we have minimum required info (email)
    if (!context.customerInfo.email) {
      return {
        message: this.responseGenerator.getMessage('ask_contact', context.language),
        quickReplies: ['example@email.com', '+39 123 456 789'],
        metadata: { nextState: ConversationState.COLLECTING_CONTACT }
      };
    }

    context.state = ConversationState.CONFIRMING_BOOKING;
    return this.handleBookingConfirmation(context);
  }

  private async handleBookingConfirmation(context: ConversationContext): Promise<BotResponse> {
    try {
      // Create booking
      const booking = await this.createBooking(context);
      
      context.bookingReference = booking.bookingReference;
      context.state = ConversationState.COMPLETED;

      this.logAnalytics('booking_completed', context.userId, {
        bookingReference: booking.bookingReference,
        amount: booking.totalAmount
      });

      return {
        message: this.responseGenerator.getMessage('booking_confirmation', context.language, {
          date: this.responseGenerator.formatDate(context.selectedDate!, context.language),
          timeSlot: this.responseGenerator.formatTimeSlot(context.selectedTimeSlot!, context.language),
          participants: context.participantCount,
          totalAmount: booking.totalAmount,
          bookingReference: booking.bookingReference
        }),
        metadata: { nextState: ConversationState.COMPLETED }
      };
    } catch (error) {
      console.error('Booking creation error:', error);
      return this.escalateToHuman(context);
    }
  }

  private handleUnknownState(context: ConversationContext): BotResponse {
    context.state = ConversationState.WELCOME;
    return {
      message: this.responseGenerator.getMessage('welcome', context.language),
      quickReplies: this.responseGenerator.getQuickReplies(ConversationState.WELCOME, context.language),
      metadata: { nextState: ConversationState.WELCOME }
    };
  }

  private escalateToHuman(context: ConversationContext): BotResponse {
    this.logAnalytics('user_dropoff', context.userId, { state: context.state });
    
    return {
      message: this.responseGenerator.getMessage('error_fallback', context.language),
      metadata: { nextState: ConversationState.ERROR_RECOVERY }
    };
  }

  // Database operations
  private async checkSessionAvailability(
    date: Date, 
    timeSlot: 'morning' | 'afternoon', 
    participantCount: number
  ): Promise<SessionAvailability | null> {
    const { data, error } = await this.supabase
      .from('sessions')
      .select('*')
      .eq('date', date.toISOString().split('T')[0])
      .eq('time_slot', timeSlot)
      .eq('status', 'active')
      .gte('available_spots', participantCount)
      .single();

    if (error) {
      console.error('Session availability check error:', error);
      return null;
    }

    return data ? {
      id: data.id,
      date: new Date(data.date),
      timeSlot: data.time_slot,
      availableSpots: data.available_spots,
      maxParticipants: data.max_participants,
      pricePerPerson: data.price_per_person
    } : null;
  }

  private async findAlternativeSessions(date: Date, participantCount: number): Promise<SessionAvailability[]> {
    const startDate = new Date(date);
    startDate.setDate(date.getDate() - 3);
    const endDate = new Date(date);
    endDate.setDate(date.getDate() + 7);

    const { data, error } = await this.supabase
      .from('sessions')
      .select('*')
      .gte('date', startDate.toISOString().split('T')[0])
      .lte('date', endDate.toISOString().split('T')[0])
      .eq('status', 'active')
      .gte('available_spots', participantCount)
      .order('date', { ascending: true })
      .limit(5);

    if (error) {
      console.error('Alternative sessions error:', error);
      return [];
    }

    return data.map(session => ({
      id: session.id,
      date: new Date(session.date),
      timeSlot: session.time_slot,
      availableSpots: session.available_spots,
      maxParticipants: session.max_participants,
      pricePerPerson: session.price_per_person
    }));
  }

  private async createBooking(context: ConversationContext): Promise<BookingConfirmation> {
    // First, create or get customer
    const customer = await this.createOrGetCustomer(context.customerInfo!);
    
    // Get session
    const session = await this.checkSessionAvailability(
      context.selectedDate!,
      context.selectedTimeSlot!,
      context.participantCount!
    );

    if (!session) {
      throw new Error('Session no longer available');
    }

    // Generate booking reference
    const bookingReference = await this.generateBookingReference();
    const totalAmount = context.participantCount! * session.pricePerPerson;

    // Create booking
    const { data, error } = await this.supabase
      .from('bookings')
      .insert({
        session_id: session.id,
        customer_id: customer.id,
        participants_count: context.participantCount,
        total_amount: totalAmount,
        booking_reference: bookingReference,
        status: 'pending'
      })
      .select()
      .single();

    if (error) {
      throw new Error(`Booking creation failed: ${error.message}`);
    }

    return {
      id: data.id,
      bookingReference: data.booking_reference,
      sessionDate: context.selectedDate!,
      timeSlot: context.selectedTimeSlot!,
      participantCount: context.participantCount!,
      totalAmount: totalAmount,
      status: 'pending'
    };
  }

  private async createOrGetCustomer(customerInfo: any): Promise<any> {
    // Try to find existing customer
    const { data: existingCustomer } = await this.supabase
      .from('customers')
      .select('*')
      .eq('email', customerInfo.email)
      .single();

    if (existingCustomer) {
      return existingCustomer;
    }

    // Create new customer
    const { data, error } = await this.supabase
      .from('customers')
      .insert({
        email: customerInfo.email,
        phone: customerInfo.phone,
        full_name: customerInfo.fullName || customerInfo.email.split('@')[0]
      })
      .select()
      .single();

    if (error) {
      throw new Error(`Customer creation failed: ${error.message}`);
    }

    return data;
  }

  private async generateBookingReference(): Promise<string> {
    const { data } = await this.supabase.rpc('generate_booking_reference');
    return data || `GRC-${Date.now()}`;
  }

  private formatAlternatives(alternatives: SessionAvailability[], language: string): string {
    if (alternatives.length === 0) {
      return this.responseGenerator.getMessage('no_alternatives', language) || 'No alternatives available';
    }

    return alternatives.map(alt => 
      `• ${this.responseGenerator.formatDate(alt.date, language)} ${this.responseGenerator.formatTimeSlot(alt.timeSlot, language)} (${alt.availableSpots} мест)`
    ).join('\n');
  }

  private getOrCreateContext(userId: string, sessionId?: string): ConversationContext {
    let context = this.conversations.get(userId);
    
    if (!context) {
      context = {
        userId,
        sessionId: sessionId || `session_${Date.now()}`,
        state: ConversationState.WELCOME,
        language: this.config.defaultLanguage,
        retryCount: 0
      };
      
      this.logAnalytics('conversation_started', userId, { sessionId: context.sessionId });
    }

    return context;
  }

  private logAnalytics(eventType: string, userId: string, data?: any): void {
    if (!this.config.enableAnalytics) return;

    console.log(`Analytics: ${eventType}`, {
      userId,
      timestamp: new Date().toISOString(),
      data
    });

    // Here you would send to your analytics service
    // e.g., Google Analytics, Mixpanel, etc.
  }

  // Public methods for external integration
  public getConversationState(userId: string): ConversationState | null {
    return this.conversations.get(userId)?.state || null;
  }

  public resetConversation(userId: string): void {
    this.conversations.delete(userId);
  }

  public setLanguage(userId: string, language: 'en' | 'it' | 'ru'): void {
    const context = this.conversations.get(userId);
    if (context) {
      context.language = language;
    }
  }
}