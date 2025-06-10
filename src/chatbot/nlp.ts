// Natural Language Processing module for intent recognition and entity extraction

import { Intent, Entity } from './types';

export class NLPProcessor {
  private intentPatterns: Map<string, RegExp[]> = new Map();
  private entityPatterns: Map<string, RegExp> = new Map();

  constructor() {
    this.initializePatterns();
  }

  private initializePatterns(): void {
    // Intent patterns for different languages
    this.intentPatterns.set('greeting', [
      /^(привет|hello|ciao|hi|добро пожаловать|buongiorno)/i,
      /^(здравствуйте|good morning|salve)/i
    ]);

    this.intentPatterns.set('book_session', [
      /(хочу|want|voglio).*(забронировать|book|prenotare)/i,
      /(бронь|booking|prenotazione)/i,
      /(участвовать|participate|partecipare)/i
    ]);

    this.intentPatterns.set('check_availability', [
      /(доступно|available|disponibile)/i,
      /(свободно|free|libero)/i,
      /(можно|possible|possibile)/i
    ]);

    this.intentPatterns.set('get_info', [
      /(информация|information|informazioni)/i,
      /(подробнее|details|dettagli)/i,
      /(что включено|what's included|cosa include)/i
    ]);

    this.intentPatterns.set('help', [
      /(помощь|help|aiuto)/i,
      /(не понимаю|don't understand|non capisco)/i
    ]);

    // Entity extraction patterns
    this.entityPatterns.set('email', /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/);
    this.entityPatterns.set('phone', /(\+\d{1,3}[-.\s]?)?\(?\d{1,4}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}/);
    this.entityPatterns.set('date', /(\d{1,2}[\.\/\-]\d{1,2}(?:[\.\/\-]\d{2,4})?)|завтра|tomorrow|domani/i);
    this.entityPatterns.set('number', /\b(\d+|один|два|три|четыре|one|two|three|four|uno|due|tre|quattro)\b/i);
    this.entityPatterns.set('time', /(утр|morning|mattina|днем|afternoon|pomeriggio)/i);
  }

  async classifyIntent(message: string): Promise<Intent> {
    const normalizedMessage = message.toLowerCase().trim();
    let bestMatch: Intent = { name: 'unknown', confidence: 0, entities: [] };

    // Check each intent pattern
    for (const [intentName, patterns] of this.intentPatterns) {
      for (const pattern of patterns) {
        if (pattern.test(normalizedMessage)) {
          const confidence = this.calculateConfidence(normalizedMessage, pattern);
          if (confidence > bestMatch.confidence) {
            bestMatch = {
              name: intentName,
              confidence,
              entities: this.extractEntities(message)
            };
          }
        }
      }
    }

    return bestMatch;
  }

  private extractEntities(message: string): Entity[] {
    const entities: Entity[] = [];

    for (const [entityType, pattern] of this.entityPatterns) {
      const matches = message.match(pattern);
      if (matches) {
        matches.forEach(match => {
          entities.push({
            type: entityType as any,
            value: this.normalizeEntityValue(entityType, match),
            confidence: 0.9,
            raw: match
          });
        });
      }
    }

    return entities;
  }

  private normalizeEntityValue(entityType: string, rawValue: string): string {
    switch (entityType) {
      case 'number':
        return this.convertNumberToDigit(rawValue);
      case 'date':
        return this.normalizeDateValue(rawValue);
      case 'time':
        return this.normalizeTimeValue(rawValue);
      default:
        return rawValue.trim();
    }
  }

  private convertNumberToDigit(value: string): string {
    const numberMap: { [key: string]: string } = {
      'один': '1', 'one': '1', 'uno': '1',
      'два': '2', 'two': '2', 'due': '2',
      'три': '3', 'three': '3', 'tre': '3',
      'четыре': '4', 'four': '4', 'quattro': '4'
    };
    
    return numberMap[value.toLowerCase()] || value;
  }

  private normalizeDateValue(value: string): string {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    if (/завтра|tomorrow|domani/i.test(value)) {
      return tomorrow.toISOString().split('T')[0];
    }

    // Handle DD.MM or DD/MM format
    const dateMatch = value.match(/(\d{1,2})[\.\/\-](\d{1,2})(?:[\.\/\-](\d{2,4}))?/);
    if (dateMatch) {
      const day = dateMatch[1].padStart(2, '0');
      const month = dateMatch[2].padStart(2, '0');
      const year = dateMatch[3] || today.getFullYear().toString();
      return `${year}-${month}-${day}`;
    }

    return value;
  }

  private normalizeTimeValue(value: string): string {
    if (/утр|morning|mattina/i.test(value)) {
      return 'morning';
    }
    if (/днем|afternoon|pomeriggio/i.test(value)) {
      return 'afternoon';
    }
    return value;
  }

  private calculateConfidence(message: string, pattern: RegExp): number {
    const match = message.match(pattern);
    if (!match) return 0;

    // Simple confidence calculation based on match length vs message length
    const matchLength = match[0].length;
    const messageLength = message.length;
    return Math.min(0.95, (matchLength / messageLength) * 2);
  }

  // Extract specific entity types
  extractDate(message: string): Date | null {
    const entities = this.extractEntities(message);
    const dateEntity = entities.find(e => e.type === 'date');
    
    if (dateEntity) {
      const date = new Date(dateEntity.value);
      return isNaN(date.getTime()) ? null : date;
    }
    
    return null;
  }

  extractParticipantCount(message: string): number | null {
    const entities = this.extractEntities(message);
    const numberEntity = entities.find(e => e.type === 'number');
    
    if (numberEntity) {
      const count = parseInt(numberEntity.value);
      return (count >= 1 && count <= 4) ? count : null;
    }
    
    return null;
  }

  extractTimeSlot(message: string): 'morning' | 'afternoon' | null {
    const entities = this.extractEntities(message);
    const timeEntity = entities.find(e => e.type === 'time');
    
    return timeEntity?.value as 'morning' | 'afternoon' || null;
  }

  extractContactInfo(message: string): { email?: string; phone?: string } {
    const entities = this.extractEntities(message);
    const result: { email?: string; phone?: string } = {};
    
    const emailEntity = entities.find(e => e.type === 'email');
    if (emailEntity) {
      result.email = emailEntity.value;
    }
    
    const phoneEntity = entities.find(e => e.type === 'phone');
    if (phoneEntity) {
      result.phone = phoneEntity.value;
    }
    
    return result;
  }
}