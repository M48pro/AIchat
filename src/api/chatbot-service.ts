// Chatbot Service - handles communication with the backend chatbot

interface ChatbotRequest {
  userId: string;
  message: string;
  sessionId?: string;
  language?: 'en' | 'it' | 'ru';
}

interface ChatbotResponse {
  message: string;
  quickReplies?: string[];
  metadata?: {
    nextState?: string;
    intent?: string;
    confidence?: number;
  };
}

class ChatbotService {
  private apiEndpoint: string;
  private supabaseUrl: string;

  constructor() {
    this.supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
    this.apiEndpoint = `${this.supabaseUrl}/functions/v1/chatbot`;
  }

  async sendMessage(request: ChatbotRequest): Promise<ChatbotResponse> {
    try {
      const response = await fetch(this.apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify(request)
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;

    } catch (error) {
      console.error('Chatbot Service error:', error);
      return {
        message: this.getErrorMessage(request.language || 'ru'),
        metadata: { nextState: 'error_recovery' }
      };
    }
  }

  private getErrorMessage(language: string): string {
    const errorMessages = {
      en: 'Sorry, I encountered an error. Please try again.',
      ru: 'Извините, произошла ошибка. Попробуйте еще раз.',
      it: 'Scusa, ho riscontrato un errore. Riprova.'
    };

    return errorMessages[language as keyof typeof errorMessages] || errorMessages.ru;
  }

  getUserId(): string {
    // Generate or retrieve user ID for session tracking
    let userId = localStorage.getItem('chatbot_user_id');
    if (!userId) {
      userId = `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      localStorage.setItem('chatbot_user_id', userId);
    }
    return userId;
  }

  getSessionId(): string {
    // Generate or retrieve session ID
    let sessionId = sessionStorage.getItem('chatbot_session_id');
    if (!sessionId) {
      sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      sessionStorage.setItem('chatbot_session_id', sessionId);
    }
    return sessionId;
  }

  resetSession(): void {
    sessionStorage.removeItem('chatbot_session_id');
  }
}

// Export singleton instance
export const chatbotService = new ChatbotService();