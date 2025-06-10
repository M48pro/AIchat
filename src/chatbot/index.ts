// Main export file for the chatbot module

export { GardaRacingChatbot } from './chatbot';
export { NLPProcessor } from './nlp';
export { ResponseGenerator } from './responses';
export * from './types';

// Default configuration
export const defaultChatbotConfig = {
  defaultLanguage: 'ru' as const,
  maxRetries: 3,
  sessionTimeout: 30, // minutes
  enableAnalytics: true,
  fallbackToHuman: true
};

// Factory function to create chatbot instance
export function createChatbot(config = defaultChatbotConfig) {
  return new GardaRacingChatbot(config);
}