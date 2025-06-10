import React, { useState, useEffect, useRef } from 'react';
import { 
  Send, 
  Mic, 
  MicOff, 
  Paperclip, 
  MoreVertical, 
  RefreshCw,
  Copy,
  ThumbsUp,
  ThumbsDown,
  Settings,
  Minimize2,
  Maximize2
} from 'lucide-react';
import { aiService } from '../api/ai-service';

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
  status?: 'sending' | 'sent' | 'error';
  attachments?: File[];
}

interface AIAssistantProps {
  mode?: 'standalone' | 'widget';
  theme?: 'light' | 'dark' | 'auto';
  primaryColor?: string;
  language?: 'en' | 'ru' | 'it';
  apiEndpoint?: string;
  onMessage?: (message: string) => void;
  customStyles?: React.CSSProperties;
  enableVoice?: boolean;
  enableAttachments?: boolean;
  placeholder?: string;
  welcomeMessage?: string;
  maxHeight?: string;
}

export const AIAssistant: React.FC<AIAssistantProps> = ({
  mode = 'standalone',
  theme = 'light',
  primaryColor = '#0066cc',
  language = 'en',
  apiEndpoint = '/api/chat',
  onMessage,
  customStyles = {},
  enableVoice = true,
  enableAttachments = true,
  placeholder,
  welcomeMessage,
  maxHeight = '600px'
}) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const recognitionRef = useRef<any>(null);

  // Localization
  const translations = {
    en: {
      placeholder: placeholder || 'Type your message...',
      welcome: welcomeMessage || 'Hello! How can I help you today?',
      sending: 'Sending...',
      error: 'Sorry, something went wrong. Please try again.',
      voiceStart: 'Start voice input',
      voiceStop: 'Stop voice input',
      attach: 'Attach file',
      send: 'Send message',
      copy: 'Copy message',
      retry: 'Retry',
      like: 'Like response',
      dislike: 'Dislike response'
    },
    ru: {
      placeholder: placeholder || 'Введите ваше сообщение...',
      welcome: welcomeMessage || 'Привет! Как я могу вам помочь?',
      sending: 'Отправка...',
      error: 'Извините, что-то пошло не так. Попробуйте еще раз.',
      voiceStart: 'Начать голосовой ввод',
      voiceStop: 'Остановить голосовой ввод',
      attach: 'Прикрепить файл',
      send: 'Отправить сообщение',
      copy: 'Копировать сообщение',
      retry: 'Повторить',
      like: 'Нравится ответ',
      dislike: 'Не нравится ответ'
    },
    it: {
      placeholder: placeholder || 'Scrivi il tuo messaggio...',
      welcome: welcomeMessage || 'Ciao! Come posso aiutarti oggi?',
      sending: 'Invio...',
      error: 'Scusa, qualcosa è andato storto. Riprova.',
      voiceStart: 'Inizia input vocale',
      voiceStop: 'Ferma input vocale',
      attach: 'Allega file',
      send: 'Invia messaggio',
      copy: 'Copia messaggio',
      retry: 'Riprova',
      like: 'Mi piace la risposta',
      dislike: 'Non mi piace la risposta'
    }
  };

  const t = translations[language];

  // Initialize welcome message
  useEffect(() => {
    if (messages.length === 0) {
      const welcomeMsg: Message = {
        id: 'welcome',
        content: t.welcome,
        isUser: false,
        timestamp: new Date(),
        status: 'sent'
      };
      setMessages([welcomeMsg]);
    }
  }, []);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Voice recognition setup
  useEffect(() => {
    if (enableVoice && 'webkitSpeechRecognition' in window) {
      const SpeechRecognition = (window as any).webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.lang = language === 'ru' ? 'ru-RU' : language === 'it' ? 'it-IT' : 'en-US';

      recognitionRef.current.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setInputValue(transcript);
        setIsListening(false);
      };

      recognitionRef.current.onerror = () => {
        setIsListening(false);
      };

      recognitionRef.current.onend = () => {
        setIsListening(false);
      };
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, [language, enableVoice]);

  const sendMessage = async (content: string, files: File[] = []) => {
    if (!content.trim() && files.length === 0) return;

    const userMessage: Message = {
      id: `user_${Date.now()}`,
      content,
      isUser: true,
      timestamp: new Date(),
      status: 'sent',
      attachments: files
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setSelectedFiles([]);
    setIsLoading(true);

    // Call external message handler if provided
    if (onMessage) {
      onMessage(content);
    }

    try {
      // Get conversation context (last 5 messages)
      const contextMessages = messages.slice(-5).map(msg => ({
        role: msg.isUser ? 'user' : 'assistant',
        content: msg.content
      }));

      // Call the backend AI service
      const response = await aiService.sendMessage({
        message: content,
        language,
        context: contextMessages,
        files
      });

      if (response.error) {
        throw new Error(response.error);
      }

      const aiMessage: Message = {
        id: `ai_${Date.now()}`,
        content: response.response,
        isUser: false,
        timestamp: new Date(),
        status: 'sent'
      };

      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('AI Assistant error:', error);
      
      const errorMessage: Message = {
        id: `error_${Date.now()}`,
        content: t.error,
        isUser: false,
        timestamp: new Date(),
        status: 'error'
      };

      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(inputValue, selectedFiles);
  };

  const toggleVoiceInput = () => {
    if (!recognitionRef.current) return;

    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    } else {
      recognitionRef.current.start();
      setIsListening(true);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setSelectedFiles(prev => [...prev, ...files]);
  };

  const removeFile = (index: number) => {
    setSelectedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const copyMessage = (content: string) => {
    navigator.clipboard.writeText(content);
  };

  const retryMessage = (messageId: string) => {
    const message = messages.find(m => m.id === messageId);
    if (message && message.isUser) {
      sendMessage(message.content, message.attachments || []);
    }
  };

  // Theme classes
  const themeClasses = {
    light: 'bg-white text-gray-900 border-gray-200',
    dark: 'bg-gray-800 text-white border-gray-600',
    auto: theme === 'dark' ? 'bg-gray-800 text-white border-gray-600' : 'bg-white text-gray-900 border-gray-200'
  };

  const containerClasses = mode === 'widget' 
    ? `w-80 ${isMinimized ? 'h-12' : 'h-96'} ${themeClasses[theme]} border rounded-lg shadow-xl flex flex-col transition-all duration-300`
    : `w-full max-w-4xl mx-auto ${themeClasses[theme]} border rounded-lg shadow-lg flex flex-col`;

  const containerStyle = {
    maxHeight: mode === 'standalone' ? maxHeight : undefined,
    ...customStyles
  };

  return (
    <div className={containerClasses} style={containerStyle}>
      {/* Header */}
      <div 
        className="flex items-center justify-between p-4 border-b rounded-t-lg text-white"
        style={{ backgroundColor: primaryColor }}
      >
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <span className="text-blue-600 font-bold text-sm">AI</span>
          </div>
          <div>
            <h3 className="font-semibold text-sm">AI Assistant</h3>
            <p className="text-xs opacity-90">
              {isLoading ? t.sending : 'Online'}
            </p>
          </div>
        </div>
        <div className="flex space-x-1">
          {mode === 'widget' && (
            <button
              onClick={() => setIsMinimized(!isMinimized)}
              className="text-white hover:bg-white hover:bg-opacity-20 rounded p-1 transition-colors"
              title={isMinimized ? 'Expand' : 'Minimize'}
            >
              {isMinimized ? <Maximize2 size={16} /> : <Minimize2 size={16} />}
            </button>
          )}
          <button className="text-white hover:bg-white hover:bg-opacity-20 rounded p-1 transition-colors">
            <Settings size={16} />
          </button>
        </div>
      </div>

      {!isMinimized && (
        <>
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4" style={{ minHeight: '300px' }}>
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs lg:max-w-md px-4 py-3 rounded-lg relative group ${
                  message.isUser 
                    ? 'text-white' 
                    : theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-800'
                }`}
                style={message.isUser ? { backgroundColor: primaryColor } : {}}
                >
                  <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                  
                  {/* Attachments */}
                  {message.attachments && message.attachments.length > 0 && (
                    <div className="mt-2 space-y-1">
                      {message.attachments.map((file, index) => (
                        <div key={index} className="text-xs opacity-75 flex items-center space-x-1">
                          <Paperclip size={12} />
                          <span>{file.name}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Message actions */}
                  <div className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="flex space-x-1">
                      <button
                        onClick={() => copyMessage(message.content)}
                        className="p-1 rounded hover:bg-black hover:bg-opacity-10"
                        title={t.copy}
                      >
                        <Copy size={12} />
                      </button>
                      {message.status === 'error' && (
                        <button
                          onClick={() => retryMessage(message.id)}
                          className="p-1 rounded hover:bg-black hover:bg-opacity-10"
                          title={t.retry}
                        >
                          <RefreshCw size={12} />
                        </button>
                      )}
                      {!message.isUser && (
                        <>
                          <button
                            className="p-1 rounded hover:bg-black hover:bg-opacity-10"
                            title={t.like}
                          >
                            <ThumbsUp size={12} />
                          </button>
                          <button
                            className="p-1 rounded hover:bg-black hover:bg-opacity-10"
                            title={t.dislike}
                          >
                            <ThumbsDown size={12} />
                          </button>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Status indicator */}
                  {message.status === 'sending' && (
                    <div className="mt-1 text-xs opacity-50">
                      <div className="flex space-x-1">
                        <div className="w-1 h-1 bg-current rounded-full animate-bounce"></div>
                        <div className="w-1 h-1 bg-current rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-1 h-1 bg-current rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start">
                <div className={`px-4 py-3 rounded-lg ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'}`}>
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Selected files preview */}
          {selectedFiles.length > 0 && (
            <div className="px-4 py-2 border-t border-gray-200">
              <div className="flex flex-wrap gap-2">
                {selectedFiles.map((file, index) => (
                  <div key={index} className="flex items-center space-x-2 bg-gray-100 rounded px-2 py-1 text-xs">
                    <Paperclip size={12} />
                    <span className="truncate max-w-20">{file.name}</span>
                    <button
                      onClick={() => removeFile(index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="border-t p-4">
            <form onSubmit={handleSubmit} className="flex space-x-2">
              {enableAttachments && (
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
                  title={t.attach}
                >
                  <Paperclip size={18} />
                </button>
              )}
              
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder={t.placeholder}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                disabled={isLoading}
              />
              
              {enableVoice && recognitionRef.current && (
                <button
                  type="button"
                  onClick={toggleVoiceInput}
                  className={`p-2 rounded-lg transition-colors ${
                    isListening 
                      ? 'bg-red-500 text-white' 
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                  title={isListening ? t.voiceStop : t.voiceStart}
                >
                  {isListening ? <MicOff size={18} /> : <Mic size={18} />}
                </button>
              )}
              
              <button
                type="submit"
                disabled={(!inputValue.trim() && selectedFiles.length === 0) || isLoading}
                className="px-4 py-2 text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ backgroundColor: primaryColor }}
                title={t.send}
              >
                <Send size={16} />
              </button>
            </form>
            
            <input
              ref={fileInputRef}
              type="file"
              multiple
              onChange={handleFileSelect}
              className="hidden"
              accept="image/*,text/*,.pdf,.doc,.docx"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default AIAssistant;