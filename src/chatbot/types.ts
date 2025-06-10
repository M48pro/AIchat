// Core TypeScript interfaces for the chatbot system

export interface BotResponse {
  message: string;
  quickReplies?: string[];
  actions?: BotAction[];
  metadata?: {
    intent?: string;
    confidence?: number;
    nextState?: ConversationState;
  };
}

export interface BotAction {
  type: 'redirect' | 'collect_info' | 'show_calendar' | 'create_booking';
  payload?: any;
}

export enum ConversationState {
  WELCOME = 'welcome',
  COLLECTING_DATE = 'collecting_date',
  COLLECTING_TIME = 'collecting_time',
  COLLECTING_PARTICIPANTS = 'collecting_participants',
  CHECKING_AVAILABILITY = 'checking_availability',
  COLLECTING_CONTACT = 'collecting_contact',
  CONFIRMING_BOOKING = 'confirming_booking',
  COMPLETED = 'completed',
  ERROR_RECOVERY = 'error_recovery',
  PROVIDING_INFO = 'providing_info'
}

export interface ConversationContext {
  userId: string;
  sessionId: string;
  state: ConversationState;
  language: 'en' | 'it' | 'ru';
  selectedDate?: Date;
  selectedTimeSlot?: 'morning' | 'afternoon';
  participantCount?: number;
  customerInfo?: {
    email?: string;
    phone?: string;
    fullName?: string;
  };
  bookingReference?: string;
  lastMessage?: string;
  retryCount?: number;
}

export interface Intent {
  name: string;
  confidence: number;
  entities: Entity[];
}

export interface Entity {
  type: 'date' | 'time' | 'number' | 'email' | 'phone' | 'name';
  value: string;
  confidence: number;
  raw: string;
}

export interface SessionAvailability {
  id: string;
  date: Date;
  timeSlot: 'morning' | 'afternoon';
  availableSpots: number;
  maxParticipants: number;
  pricePerPerson: number;
}

export interface BookingRequest {
  sessionId: string;
  participantCount: number;
  customerInfo: {
    email: string;
    phone?: string;
    fullName: string;
  };
  notes?: string;
}

export interface BookingConfirmation {
  id: string;
  bookingReference: string;
  sessionDate: Date;
  timeSlot: string;
  participantCount: number;
  totalAmount: number;
  status: 'pending' | 'confirmed';
}

export interface ChatbotConfig {
  defaultLanguage: 'en' | 'it' | 'ru';
  maxRetries: number;
  sessionTimeout: number; // minutes
  enableAnalytics: boolean;
  fallbackToHuman: boolean;
}

export interface AnalyticsEvent {
  type: 'conversation_started' | 'intent_recognized' | 'booking_completed' | 'error_occurred' | 'user_dropoff';
  userId: string;
  sessionId: string;
  timestamp: Date;
  data?: any;
}