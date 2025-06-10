import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
}

// Chatbot types and interfaces
enum ConversationState {
  WELCOME = 'welcome',
  COLLECTING_DATE = 'collecting_date',
  COLLECTING_TIME = 'collecting_time',
  COLLECTING_PARTICIPANTS = 'collecting_participants',
  CHECKING_AVAILABILITY = 'checking_availability',
  COLLECTING_CONTACT = 'collecting_contact',
  CONFIRMING_BOOKING = 'confirming_booking',
  COMPLETED = 'completed',
  ERROR_RECOVERY = 'error_recovery'
}

interface ConversationContext {
  userId: string;
  sessionId: string;
  state: ConversationState;
  language: 'en' | 'it' | 'ru';
  selectedDate?: string;
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

interface BotResponse {
  message: string;
  quickReplies?: string[];
  metadata?: {
    nextState?: ConversationState;
    intent?: string;
    confidence?: number;
  };
}

interface ChatbotRequest {
  userId: string;
  message: string;
  sessionId?: string;
  language?: 'en' | 'it' | 'ru';
}

// In-memory conversation storage (in production, use Redis or database)
const conversations = new Map<string, ConversationContext>()

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { userId, message, sessionId, language = 'ru' }: ChatbotRequest = await req.json()

    if (!userId || !message?.trim()) {
      throw new Error('userId and message are required')
    }

    // Initialize Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    const supabase = createClient(supabaseUrl, supabaseKey)

    // Get or create conversation context
    const context = getOrCreateContext(userId, sessionId, language)
    context.lastMessage = message

    // Process the message and get response
    const response = await processMessage(context, message, supabase)

    // Update conversation context
    conversations.set(userId, context)

    // Log the interaction
    await logInteraction(supabase, userId, message, response.message, context.state)

    return new Response(
      JSON.stringify(response),
      { 
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json' 
        } 
      }
    )
  } catch (error) {
    console.error('Chatbot error:', error)
    
    return new Response(
      JSON.stringify({ 
        message: "Извините, произошла ошибка. Попробуйте еще раз.",
        metadata: { nextState: ConversationState.ERROR_RECOVERY }
      }),
      { 
        status: 500,
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json' 
        } 
      }
    )
  }
})

function getOrCreateContext(userId: string, sessionId?: string, language: 'en' | 'it' | 'ru' = 'ru'): ConversationContext {
  let context = conversations.get(userId)
  
  if (!context) {
    context = {
      userId,
      sessionId: sessionId || `session_${Date.now()}`,
      state: ConversationState.WELCOME,
      language,
      retryCount: 0
    }
  }

  return context
}

async function processMessage(context: ConversationContext, message: string, supabase: any): Promise<BotResponse> {
  const intent = classifyIntent(message)
  
  switch (context.state) {
    case ConversationState.WELCOME:
      return handleWelcome(context, intent)
    
    case ConversationState.COLLECTING_DATE:
      return handleDateCollection(context, message)
    
    case ConversationState.COLLECTING_TIME:
      return handleTimeCollection(context, message)
    
    case ConversationState.COLLECTING_PARTICIPANTS:
      return handleParticipantCollection(context, message)
    
    case ConversationState.CHECKING_AVAILABILITY:
      return await handleAvailabilityCheck(context, supabase)
    
    case ConversationState.COLLECTING_CONTACT:
      return handleContactCollection(context, message)
    
    case ConversationState.CONFIRMING_BOOKING:
      return await handleBookingConfirmation(context, supabase)
    
    default:
      return handleUnknownState(context)
  }
}

function classifyIntent(message: string): string {
  const normalizedMessage = message.toLowerCase().trim()
  
  if (/^(привет|hello|ciao|hi|добро пожаловать|buongiorno)/i.test(normalizedMessage)) {
    return 'greeting'
  }
  
  if (/(хочу|want|voglio).*(забронировать|book|prenotare)/i.test(normalizedMessage)) {
    return 'book_session'
  }
  
  if (/(информация|information|informazioni)/i.test(normalizedMessage)) {
    return 'get_info'
  }
  
  return 'unknown'
}

function handleWelcome(context: ConversationContext, intent: string): BotResponse {
  if (intent === 'get_info') {
    return {
      message: getRegattaInfo(context.language),
      quickReplies: getQuickReplies('info_response', context.language),
      metadata: { nextState: ConversationState.WELCOME }
    }
  }

  if (intent === 'book_session' || intent === 'greeting') {
    context.state = ConversationState.COLLECTING_DATE
    return {
      message: getMessage('ask_date', context.language),
      quickReplies: getQuickReplies('date_selection', context.language),
      metadata: { nextState: ConversationState.COLLECTING_DATE }
    }
  }

  return {
    message: getMessage('welcome', context.language),
    quickReplies: getQuickReplies('welcome', context.language),
    metadata: { nextState: ConversationState.WELCOME }
  }
}

function handleDateCollection(context: ConversationContext, message: string): BotResponse {
  const date = extractDate(message)
  
  if (!date) {
    context.retryCount = (context.retryCount || 0) + 1
    if (context.retryCount >= 3) {
      return escalateToHuman(context)
    }
    
    return {
      message: getMessage('invalid_date', context.language),
      quickReplies: getQuickReplies('date_examples', context.language),
      metadata: { nextState: ConversationState.COLLECTING_DATE }
    }
  }

  // Check if date is in season (April-October)
  const dateObj = new Date(date)
  const month = dateObj.getMonth() + 1
  if (month < 4 || month > 10) {
    return {
      message: getMessage('season_closed', context.language),
      quickReplies: getQuickReplies('date_selection', context.language),
      metadata: { nextState: ConversationState.COLLECTING_DATE }
    }
  }

  context.selectedDate = date
  context.state = ConversationState.COLLECTING_TIME
  context.retryCount = 0

  return {
    message: getMessage('ask_time', context.language),
    quickReplies: getQuickReplies('time_selection', context.language),
    metadata: { nextState: ConversationState.COLLECTING_TIME }
  }
}

function handleTimeCollection(context: ConversationContext, message: string): BotResponse {
  const timeSlot = extractTimeSlot(message)
  
  if (!timeSlot) {
    return {
      message: getMessage('ask_time', context.language),
      quickReplies: getQuickReplies('time_selection', context.language),
      metadata: { nextState: ConversationState.COLLECTING_TIME }
    }
  }

  context.selectedTimeSlot = timeSlot
  context.state = ConversationState.COLLECTING_PARTICIPANTS

  return {
    message: getMessage('ask_participants', context.language),
    quickReplies: getQuickReplies('participant_selection', context.language),
    metadata: { nextState: ConversationState.COLLECTING_PARTICIPANTS }
  }
}

function handleParticipantCollection(context: ConversationContext, message: string): BotResponse {
  const participantCount = extractParticipantCount(message)
  
  if (!participantCount) {
    return {
      message: getMessage('invalid_participants', context.language),
      quickReplies: ['1', '2', '3', '4'],
      metadata: { nextState: ConversationState.COLLECTING_PARTICIPANTS }
    }
  }

  context.participantCount = participantCount
  context.state = ConversationState.CHECKING_AVAILABILITY

  return {
    message: getMessage('availability_check', context.language),
    metadata: { nextState: ConversationState.CHECKING_AVAILABILITY }
  }
}

async function handleAvailabilityCheck(context: ConversationContext, supabase: any): Promise<BotResponse> {
  try {
    // Check availability in database
    const { data: session, error } = await supabase
      .from('sessions')
      .select('*')
      .eq('date', context.selectedDate)
      .eq('time_slot', context.selectedTimeSlot)
      .eq('status', 'active')
      .gte('available_spots', context.participantCount)
      .single()

    if (error || !session) {
      // Find alternatives
      const alternatives = await findAlternativeSessions(supabase, context.selectedDate!, context.participantCount!)
      
      return {
        message: getMessage('unavailable_session', context.language) + '\n\n' + formatAlternatives(alternatives, context.language),
        quickReplies: getQuickReplies('alternatives', context.language),
        metadata: { nextState: ConversationState.COLLECTING_DATE }
      }
    }

    context.state = ConversationState.COLLECTING_CONTACT
    const totalAmount = context.participantCount! * session.price_per_person

    return {
      message: getMessage('available_session', context.language)
        .replace('{date}', formatDate(context.selectedDate!, context.language))
        .replace('{timeSlot}', formatTimeSlot(context.selectedTimeSlot!, context.language))
        .replace('{totalAmount}', totalAmount.toString()),
      quickReplies: getQuickReplies('booking_confirmation', context.language),
      metadata: { nextState: ConversationState.COLLECTING_CONTACT }
    }
  } catch (error) {
    console.error('Availability check error:', error)
    return escalateToHuman(context)
  }
}

function handleContactCollection(context: ConversationContext, message: string): BotResponse {
  const contactInfo = extractContactInfo(message)
  
  if (!context.customerInfo) {
    context.customerInfo = {}
  }

  if (contactInfo.email) {
    context.customerInfo.email = contactInfo.email
  }
  if (contactInfo.phone) {
    context.customerInfo.phone = contactInfo.phone
  }
  if (!context.customerInfo.fullName && !contactInfo.email && !contactInfo.phone) {
    context.customerInfo.fullName = message.trim()
  }

  if (!context.customerInfo.email) {
    return {
      message: getMessage('ask_contact', context.language),
      quickReplies: getQuickReplies('contact_examples', context.language),
      metadata: { nextState: ConversationState.COLLECTING_CONTACT }
    }
  }

  context.state = ConversationState.CONFIRMING_BOOKING
  return {
    message: getMessage('confirm_booking', context.language),
    quickReplies: getQuickReplies('final_confirmation', context.language),
    metadata: { nextState: ConversationState.CONFIRMING_BOOKING }
  }
}

async function handleBookingConfirmation(context: ConversationContext, supabase: any): Promise<BotResponse> {
  try {
    // Create or get customer
    const customer = await createOrGetCustomer(supabase, context.customerInfo!)
    
    // Generate booking reference
    const bookingReference = `GRC-${Date.now()}-${Math.floor(Math.random() * 1000)}`
    
    // Get session details
    const { data: session } = await supabase
      .from('sessions')
      .select('*')
      .eq('date', context.selectedDate)
      .eq('time_slot', context.selectedTimeSlot)
      .single()

    if (!session) {
      throw new Error('Session no longer available')
    }

    const totalAmount = context.participantCount! * session.price_per_person

    // Create booking
    const { data: booking, error } = await supabase
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
      .single()

    if (error) {
      throw new Error(`Booking creation failed: ${error.message}`)
    }

    context.bookingReference = bookingReference
    context.state = ConversationState.COMPLETED

    return {
      message: getMessage('booking_confirmation', context.language)
        .replace('{date}', formatDate(context.selectedDate!, context.language))
        .replace('{timeSlot}', formatTimeSlot(context.selectedTimeSlot!, context.language))
        .replace('{participants}', context.participantCount!.toString())
        .replace('{totalAmount}', totalAmount.toString())
        .replace('{bookingReference}', bookingReference),
      metadata: { nextState: ConversationState.COMPLETED }
    }
  } catch (error) {
    console.error('Booking creation error:', error)
    return escalateToHuman(context)
  }
}

function handleUnknownState(context: ConversationContext): BotResponse {
  context.state = ConversationState.WELCOME
  return {
    message: getMessage('welcome', context.language),
    quickReplies: getQuickReplies('welcome', context.language),
    metadata: { nextState: ConversationState.WELCOME }
  }
}

function escalateToHuman(context: ConversationContext): BotResponse {
  return {
    message: getMessage('error_fallback', context.language),
    metadata: { nextState: ConversationState.ERROR_RECOVERY }
  }
}

// Utility functions
function extractDate(message: string): string | null {
  const today = new Date()
  const tomorrow = new Date(today)
  tomorrow.setDate(today.getDate() + 1)

  if (/завтра|tomorrow|domani/i.test(message)) {
    return tomorrow.toISOString().split('T')[0]
  }

  const dateMatch = message.match(/(\d{1,2})[\.\/\-](\d{1,2})(?:[\.\/\-](\d{2,4}))?/)
  if (dateMatch) {
    const day = dateMatch[1].padStart(2, '0')
    const month = dateMatch[2].padStart(2, '0')
    const year = dateMatch[3] || today.getFullYear().toString()
    return `${year}-${month}-${day}`
  }

  return null
}

function extractTimeSlot(message: string): 'morning' | 'afternoon' | null {
  if (/утр|morning|mattina/i.test(message)) {
    return 'morning'
  }
  if (/днем|afternoon|pomeriggio/i.test(message)) {
    return 'afternoon'
  }
  return null
}

function extractParticipantCount(message: string): number | null {
  const numberMap: { [key: string]: number } = {
    'один': 1, 'one': 1, 'uno': 1,
    'два': 2, 'two': 2, 'due': 2,
    'три': 3, 'three': 3, 'tre': 3,
    'четыре': 4, 'four': 4, 'quattro': 4
  }
  
  const words = message.toLowerCase().split(/\s+/)
  for (const word of words) {
    if (numberMap[word]) {
      return numberMap[word]
    }
  }
  
  const numberMatch = message.match(/\b(\d+)\b/)
  if (numberMatch) {
    const count = parseInt(numberMatch[1])
    return (count >= 1 && count <= 4) ? count : null
  }
  
  return null
}

function extractContactInfo(message: string): { email?: string; phone?: string } {
  const result: { email?: string; phone?: string } = {}
  
  const emailMatch = message.match(/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/)
  if (emailMatch) {
    result.email = emailMatch[0]
  }
  
  const phoneMatch = message.match(/(\+\d{1,3}[-.\s]?)?\(?\d{1,4}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}/)
  if (phoneMatch) {
    result.phone = phoneMatch[0]
  }
  
  return result
}

async function createOrGetCustomer(supabase: any, customerInfo: any): Promise<any> {
  const { data: existingCustomer } = await supabase
    .from('customers')
    .select('*')
    .eq('email', customerInfo.email)
    .single()

  if (existingCustomer) {
    return existingCustomer
  }

  const { data, error } = await supabase
    .from('customers')
    .insert({
      email: customerInfo.email,
      phone: customerInfo.phone,
      full_name: customerInfo.fullName || customerInfo.email.split('@')[0]
    })
    .select()
    .single()

  if (error) {
    throw new Error(`Customer creation failed: ${error.message}`)
  }

  return data
}

async function findAlternativeSessions(supabase: any, date: string, participantCount: number): Promise<any[]> {
  const startDate = new Date(date)
  startDate.setDate(startDate.getDate() - 3)
  const endDate = new Date(date)
  endDate.setDate(endDate.getDate() + 7)

  const { data, error } = await supabase
    .from('sessions')
    .select('*')
    .gte('date', startDate.toISOString().split('T')[0])
    .lte('date', endDate.toISOString().split('T')[0])
    .eq('status', 'active')
    .gte('available_spots', participantCount)
    .order('date', { ascending: true })
    .limit(5)

  return data || []
}

async function logInteraction(supabase: any, userId: string, userMessage: string, botResponse: string, state: ConversationState): Promise<void> {
  try {
    await supabase
      .from('chatbot_logs')
      .insert({
        user_id: userId,
        user_message: userMessage.substring(0, 1000),
        bot_response: botResponse.substring(0, 1000),
        conversation_state: state,
        timestamp: new Date().toISOString()
      })
  } catch (error) {
    console.warn('Failed to log interaction:', error)
  }
}

// Message templates and utilities
function getMessage(key: string, language: string): string {
  const messages: { [key: string]: { [lang: string]: string } } = {
    welcome: {
      ru: "Привет! Добро пожаловать в Garda Racing Yacht Club! 🏆 Готов к адреналину на воде?",
      en: "Hello! Welcome to Garda Racing Yacht Club! 🏆 Ready for some adrenaline on the water?",
      it: "Ciao! Benvenuto al Garda Racing Yacht Club! 🏆 Pronto per l'adrenalina sull'acqua?"
    },
    ask_date: {
      ru: "На какую дату хотите забронировать? (например: завтра, 15.05, или конкретную дату)",
      en: "What date would you like to book? (e.g., tomorrow, 15.05, or specific date)",
      it: "Per quale data vorresti prenotare? (es: domani, 15.05, o data specifica)"
    },
    ask_time: {
      ru: "Выберите время:\n🌅 Утренняя сессия (9:00)\n☀️ Дневная сессия (13:00)",
      en: "Choose your time:\n🌅 Morning session (9:00)\n☀️ Afternoon session (13:00)",
      it: "Scegli l'orario:\n🌅 Sessione mattutina (9:00)\n☀️ Sessione pomeridiana (13:00)"
    },
    ask_participants: {
      ru: "Сколько участников? (максимум 4 человека)",
      en: "How many participants? (maximum 4 people)",
      it: "Quanti partecipanti? (massimo 4 persone)"
    },
    availability_check: {
      ru: "Проверяю доступность... ⏳",
      en: "Checking availability... ⏳",
      it: "Controllo disponibilità... ⏳"
    },
    available_session: {
      ru: "Отлично! {date} в {timeSlot} доступно. Стоимость €199 на человека. Общая сумма: €{totalAmount}",
      en: "Great! {date} at {timeSlot} is available. Cost €199 per person. Total: €{totalAmount}",
      it: "Perfetto! {date} alle {timeSlot} è disponibile. Costo €199 a persona. Totale: €{totalAmount}"
    },
    unavailable_session: {
      ru: "К сожалению, выбранное время занято. Могу предложить альтернативы:",
      en: "Unfortunately, the selected time is booked. I can suggest alternatives:",
      it: "Purtroppo l'orario selezionato è occupato. Posso suggerire alternative:"
    },
    ask_contact: {
      ru: "Для завершения брони нужны ваши контакты. Укажите email:",
      en: "To complete the booking, I need your contact details. Please provide email:",
      it: "Per completare la prenotazione, ho bisogno dei tuoi contatti. Fornisci email:"
    },
    confirm_booking: {
      ru: "Подтверждаете бронирование?",
      en: "Do you confirm the booking?",
      it: "Confermi la prenotazione?"
    },
    booking_confirmation: {
      ru: `Отлично! Бронь создана:
📅 Дата: {date}
⏰ Время: {timeSlot}
👥 Участники: {participants}
💰 Сумма: €{totalAmount}
🎫 Номер брони: {bookingReference}

Увидимся на воде! 🌊`,
      en: `Excellent! Booking created:
📅 Date: {date}
⏰ Time: {timeSlot}
👥 Participants: {participants}
💰 Amount: €{totalAmount}
🎫 Booking reference: {bookingReference}

See you on the water! 🌊`,
      it: `Eccellente! Prenotazione creata:
📅 Data: {date}
⏰ Orario: {timeSlot}
👥 Partecipanti: {participants}
💰 Importo: €{totalAmount}
🎫 Riferimento prenotazione: {bookingReference}

Ci vediamo sull'acqua! 🌊`
    },
    error_fallback: {
      ru: "Передал менеджеру, скоро свяжемся!",
      en: "Passed to manager, we'll contact you soon!",
      it: "Passato al manager, ti contatteremo presto!"
    },
    invalid_date: {
      ru: "Пожалуйста, укажите дату в формате ДД.ММ или 'завтра'",
      en: "Please specify date in DD.MM format or 'tomorrow'",
      it: "Per favore specifica la data in formato GG.MM o 'domani'"
    },
    invalid_participants: {
      ru: "Количество участников должно быть от 1 до 4",
      en: "Number of participants must be between 1 and 4",
      it: "Il numero di partecipanti deve essere tra 1 e 4"
    },
    season_closed: {
      ru: "Сезон регат проходит с апреля по октябрь. Выберите дату в этом периоде.",
      en: "Regatta season runs from April to October. Please choose a date in this period.",
      it: "La stagione delle regate va da aprile a ottobre. Scegli una data in questo periodo."
    }
  }

  return messages[key]?.[language] || messages[key]?.['en'] || 'Message not found'
}

function getQuickReplies(context: string, language: string): string[] {
  const replies: { [key: string]: { [lang: string]: string[] } } = {
    welcome: {
      ru: ["Забронировать", "Подробнее", "Цены"],
      en: ["Book now", "More info", "Prices"],
      it: ["Prenota", "Più info", "Prezzi"]
    },
    date_selection: {
      ru: ["Завтра", "На выходных", "Конкретную дату"],
      en: ["Tomorrow", "Weekend", "Specific date"],
      it: ["Domani", "Weekend", "Data specifica"]
    },
    time_selection: {
      ru: ["Утром", "Днем"],
      en: ["Morning", "Afternoon"],
      it: ["Mattina", "Pomeriggio"]
    },
    participant_selection: {
      ru: ["1 человек", "2 человека", "3 человека", "4 человека"],
      en: ["1 person", "2 people", "3 people", "4 people"],
      it: ["1 persona", "2 persone", "3 persone", "4 persone"]
    },
    booking_confirmation: {
      ru: ["Да, бронируем!", "Изменить дату"],
      en: ["Yes, book it!", "Change date"],
      it: ["Sì, prenota!", "Cambia data"]
    },
    final_confirmation: {
      ru: ["Подтверждаю", "Отмена"],
      en: ["Confirm", "Cancel"],
      it: ["Conferma", "Annulla"]
    }
  }

  return replies[context]?.[language] || []
}

function getRegattaInfo(language: string): string {
  const info: { [lang: string]: string } = {
    ru: `🏆 Garda Racing Yacht Club - Регаты на озере Гарда

🚤 Что включено:
• Профессиональный шкипер и экипаж
• Участие в настоящей регате на яхтах J/70
• Медали для всех участников
• Фото и видео с гонки
• Бар после регаты
• Страховка жизни на борту

💰 Стоимость: €199 на человека
📅 Сезон: апрель - октябрь
⏰ Сессии: утренняя (9:00) и дневная (13:00)
👥 До 4 участников на яхту`,
    en: `🏆 Garda Racing Yacht Club - Lake Garda Regattas

🚤 What's included:
• Professional skipper and crew
• Real regatta participation on J/70 yachts
• Medals for all participants
• Photos and videos from the race
• Post-race bar
• Life insurance on board

💰 Cost: €199 per person
📅 Season: April - October
⏰ Sessions: morning (9:00) and afternoon (13:00)
👥 Up to 4 participants per yacht`,
    it: `🏆 Garda Racing Yacht Club - Regate sul Lago di Garda

🚤 Cosa include:
• Skipper professionale ed equipaggio
• Partecipazione a vera regata su yacht J/70
• Medaglie per tutti i partecipanti
• Foto e video dalla gara
• Bar post-regata
• Assicurazione vita a bordo

💰 Costo: €199 a persona
📅 Stagione: aprile - ottobre
⏰ Sessioni: mattutina (9:00) e pomeridiana (13:00)
👥 Fino a 4 partecipanti per yacht`
  }

  return info[language] || info['en']
}

function formatDate(date: string, language: string): string {
  const dateObj = new Date(date)
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'long',
    weekday: 'long'
  }

  const locale = language === 'ru' ? 'ru-RU' : language === 'it' ? 'it-IT' : 'en-US'
  return dateObj.toLocaleDateString(locale, options)
}

function formatTimeSlot(timeSlot: 'morning' | 'afternoon', language: string): string {
  const timeFormats: { [key: string]: { [lang: string]: string } } = {
    morning: {
      ru: "утром (9:00)",
      en: "morning (9:00)",
      it: "mattina (9:00)"
    },
    afternoon: {
      ru: "днем (13:00)",
      en: "afternoon (13:00)",
      it: "pomeriggio (13:00)"
    }
  }

  return timeFormats[timeSlot]?.[language] || timeSlot
}

function formatAlternatives(alternatives: any[], language: string): string {
  if (alternatives.length === 0) {
    return language === 'ru' ? 'Альтернативы не найдены' : 
           language === 'it' ? 'Nessuna alternativa trovata' : 
           'No alternatives found'
  }

  return alternatives.map(alt => 
    `• ${formatDate(alt.date, language)} ${formatTimeSlot(alt.time_slot, language)} (${alt.available_spots} мест)`
  ).join('\n')
}