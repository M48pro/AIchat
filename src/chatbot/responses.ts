// Response templates and message generation for the chatbot

import { ConversationState } from './types';

export interface ResponseTemplate {
  [key: string]: {
    [language: string]: string | string[];
  };
}

export class ResponseGenerator {
  private templates: ResponseTemplate = {
    welcome: {
      ru: [
        "Привет! Добро пожаловать в Garda Racing Yacht Club! 🏆 Готов к адреналину на воде?",
        "Ciao! Хочешь участвовать в захватывающих регатах на озере Гарда?",
        "Привет! Мы проводим зрелищные регаты каждый день. Интересно?"
      ],
      en: [
        "Hello! Welcome to Garda Racing Yacht Club! 🏆 Ready for some adrenaline on the water?",
        "Hi there! Want to join our exciting yacht regattas on Lake Garda?",
        "Welcome! We run spectacular regattas every day. Interested?"
      ],
      it: [
        "Ciao! Benvenuto al Garda Racing Yacht Club! 🏆 Pronto per l'adrenalina sull'acqua?",
        "Salve! Vuoi partecipare alle nostre emozionanti regate sul Lago di Garda?",
        "Benvenuto! Organizziamo regate spettacolari ogni giorno. Ti interessa?"
      ]
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
      ru: "Отлично! {date} в {timeSlot} доступно. Стоимость €199 на человека. Продолжаем?",
      en: "Great! {date} at {timeSlot} is available. Cost €199 per person. Shall we continue?",
      it: "Perfetto! {date} alle {timeSlot} è disponibile. Costo €199 a persona. Continuiamo?"
    },

    unavailable_session: {
      ru: "К сожалению, {date} в {timeSlot} занято. Могу предложить альтернативы:",
      en: "Unfortunately, {date} at {timeSlot} is booked. I can suggest alternatives:",
      it: "Purtroppo {date} alle {timeSlot} è occupato. Posso suggerire alternative:"
    },

    ask_contact: {
      ru: "Для завершения брони нужны ваши контакты. Укажите email и телефон:",
      en: "To complete the booking, I need your contact details. Please provide email and phone:",
      it: "Per completare la prenotazione, ho bisogno dei tuoi contatti. Fornisci email e telefono:"
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

    regatta_info: {
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
👥 До 4 участников на яхту

Адреналин, общение и спортивный опыт гарантированы!`,
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
👥 Up to 4 participants per yacht

Adrenaline, socializing, and sporting experience guaranteed!`,
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
👥 Fino a 4 partecipanti per yacht

Adrenalina, socializzazione ed esperienza sportiva garantite!`
    },

    error_fallback: {
      ru: "Передал менеджеру, скоро свяжемся!",
      en: "Passed to manager, we'll contact you soon!",
      it: "Passato al manager, ti contatteremo presto!"
    },

    misunderstanding: {
      ru: [
        "Не совсем понял. Можете переформулировать?",
        "Извините, не понял. Попробуйте еще раз?",
        "Можете сказать по-другому?"
      ],
      en: [
        "I didn't quite understand. Could you rephrase?",
        "Sorry, I didn't get that. Try again?",
        "Could you say that differently?"
      ],
      it: [
        "Non ho capito bene. Potresti riformulare?",
        "Scusa, non ho capito. Riprova?",
        "Potresti dirlo diversamente?"
      ]
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
  };

  getMessage(key: string, language: string = 'ru', variables?: { [key: string]: any }): string {
    const template = this.templates[key]?.[language];
    
    if (!template) {
      return this.templates['error_fallback'][language] || "Error occurred";
    }

    let message: string;
    if (Array.isArray(template)) {
      // Pick random message from array
      message = template[Math.floor(Math.random() * template.length)];
    } else {
      message = template;
    }

    // Replace variables
    if (variables) {
      Object.keys(variables).forEach(key => {
        message = message.replace(new RegExp(`{${key}}`, 'g'), variables[key]);
      });
    }

    return message;
  }

  getQuickReplies(state: ConversationState, language: string = 'ru'): string[] {
    const quickReplies: { [key: string]: { [lang: string]: string[] } } = {
      [ConversationState.WELCOME]: {
        ru: ["Забронировать", "Подробнее", "Цены"],
        en: ["Book now", "More info", "Prices"],
        it: ["Prenota", "Più info", "Prezzi"]
      },
      [ConversationState.COLLECTING_TIME]: {
        ru: ["Утром", "Днем"],
        en: ["Morning", "Afternoon"],
        it: ["Mattina", "Pomeriggio"]
      },
      [ConversationState.COLLECTING_PARTICIPANTS]: {
        ru: ["1 человек", "2 человека", "3 человека", "4 человека"],
        en: ["1 person", "2 people", "3 people", "4 people"],
        it: ["1 persona", "2 persone", "3 persone", "4 persone"]
      }
    };

    return quickReplies[state]?.[language] || [];
  }

  formatTimeSlot(timeSlot: 'morning' | 'afternoon', language: string = 'ru'): string {
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
    };

    return timeFormats[timeSlot]?.[language] || timeSlot;
  }

  formatDate(date: Date, language: string = 'ru'): string {
    const options: Intl.DateTimeFormatOptions = {
      day: 'numeric',
      month: 'long',
      weekday: 'long'
    };

    const locale = language === 'ru' ? 'ru-RU' : language === 'it' ? 'it-IT' : 'en-US';
    return date.toLocaleDateString(locale, options);
  }
}