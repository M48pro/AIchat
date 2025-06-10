// Updated AI Service - now calls backend endpoints instead of direct AI integration

interface AIRequest {
  message: string;
  context?: any[];
  language?: string;
  files?: File[];
}

interface AIResponse {
  response: string;
  confidence?: number;
  suggestions?: string[];
  error?: string;
}

class AIService {
  private apiEndpoint: string;
  private supabaseUrl: string;

  constructor() {
    this.supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
    this.apiEndpoint = `${this.supabaseUrl}/functions/v1/ai-chat`;
  }

  async sendMessage(request: AIRequest): Promise<AIResponse> {
    try {
      // Generate a user ID for tracking (in production, use proper authentication)
      const userId = this.getUserId();

      const requestBody = {
        message: request.message,
        context: request.context,
        language: request.language || 'en',
        userId
      };

      const response = await fetch(this.apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify(requestBody)
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;

    } catch (error) {
      console.error('AI Service error:', error);
      return {
        response: this.getErrorMessage(request.language || 'en'),
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }

  private getUserId(): string {
    // In production, this should come from your authentication system
    let userId = localStorage.getItem('ai_user_id');
    if (!userId) {
      userId = `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      localStorage.setItem('ai_user_id', userId);
    }
    return userId;
  }

  private getErrorMessage(language: string): string {
    const errorMessages = {
      en: 'I apologize, but I encountered an error processing your request. Please try again.',
      ru: 'Извините, произошла ошибка при обработке вашего запроса. Попробуйте еще раз.',
      it: 'Mi scuso, ma ho riscontrato un errore nell\'elaborazione della tua richiesta. Riprova.'
    };

    return errorMessages[language as keyof typeof errorMessages] || errorMessages.en;
  }

  // Keep the simulation method for fallback/testing
  async simulateResponse(request: AIRequest): Promise<AIResponse> {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000));

    const responses = {
      en: [
        "I understand your question. Let me help you with that.",
        "That's an interesting point. Here's what I think...",
        "I can assist you with that. Let me provide some information.",
        "Thank you for your message. I'm here to help.",
        "I see what you're asking about. Here's my response..."
      ],
      ru: [
        "Я понимаю ваш вопрос. Позвольте мне помочь вам с этим.",
        "Это интересный момент. Вот что я думаю...",
        "Я могу помочь вам с этим. Позвольте предоставить информацию.",
        "Спасибо за ваше сообщение. Я здесь, чтобы помочь.",
        "Я понимаю, о чем вы спрашиваете. Вот мой ответ..."
      ],
      it: [
        "Capisco la tua domanda. Lascia che ti aiuti con questo.",
        "È un punto interessante. Ecco cosa penso...",
        "Posso aiutarti con questo. Lascia che fornisca alcune informazioni.",
        "Grazie per il tuo messaggio. Sono qui per aiutare.",
        "Vedo di cosa stai chiedendo. Ecco la mia risposta..."
      ]
    };

    const languageResponses = responses[request.language as keyof typeof responses] || responses.en;
    const randomResponse = languageResponses[Math.floor(Math.random() * languageResponses.length)];

    return {
      response: `${randomResponse}\n\nYour message: "${request.message}"`,
      confidence: 0.85 + Math.random() * 0.15,
      suggestions: [
        "Tell me more about this topic",
        "Can you provide examples?",
        "What are the alternatives?"
      ]
    };
  }
}

// Export singleton instance
export const aiService = new AIService();

// Example of how to integrate with OpenAI (server-side only)
export const createOpenAIService = (apiKey: string) => {
  return {
    async chat(message: string, context?: any[]) {
      // This should only be called from server-side code
      // Never expose API keys in client-side code
      
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'gpt-4',
          messages: [
            ...(context || []),
            { role: 'user', content: message }
          ],
          max_tokens: 500,
          temperature: 0.7,
        }),
      });

      if (!response.ok) {
        throw new Error(`OpenAI API error: ${response.status}`);
      }

      const data = await response.json();
      return data.choices[0]?.message?.content || 'No response generated';
    }
  };
};