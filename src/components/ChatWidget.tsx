import React, { useState, useEffect, useRef } from 'react';
import { Send, MessageCircle, X, Minimize2 } from 'lucide-react';
import { chatbotService } from '../api/chatbot-service';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
  quickReplies?: string[];
}

interface ChatWidgetProps {
  position?: 'bottom-right' | 'bottom-left';
  theme?: 'light' | 'dark';
  primaryColor?: string;
  language?: 'en' | 'it' | 'ru';
}

export const ChatWidget: React.FC<ChatWidgetProps> = ({
  position = 'bottom-right',
  theme = 'light',
  primaryColor = '#0066cc',
  language = 'ru'
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [userId] = useState(() => chatbotService.getUserId());
  const [sessionId] = useState(() => chatbotService.getSessionId());
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && !isMinimized && messages.length === 0) {
      // Send initial greeting to get welcome message
      handleBotResponse("Привет");
    }
  }, [isOpen, isMinimized]);

  const handleBotResponse = async (userMessage: string) => {
    setIsTyping(true);
    
    try {
      const response = await chatbotService.sendMessage({
        userId,
        message: userMessage,
        sessionId,
        language
      });
      
      // Simulate typing delay for better UX
      setTimeout(() => {
        const botMessage: Message = {
          id: `bot_${Date.now()}`,
          text: response.message,
          isBot: true,
          timestamp: new Date(),
          quickReplies: response.quickReplies
        };
        
        setMessages(prev => [...prev, botMessage]);
        setIsTyping(false);
      }, 800 + Math.random() * 1200);
      
    } catch (error) {
      console.error('Chatbot error:', error);
      setIsTyping(false);
      
      const errorMessage: Message = {
        id: `bot_error_${Date.now()}`,
        text: "Извините, произошла ошибка. Попробуйте еще раз.",
        isBot: true,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, errorMessage]);
    }
  };

  const sendMessage = async (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: `user_${Date.now()}`,
      text: text.trim(),
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    
    await handleBotResponse(text.trim());
  };

  const handleQuickReply = (reply: string) => {
    sendMessage(reply);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(inputValue);
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setIsMinimized(false);
  };

  const minimizeChat = () => {
    setIsMinimized(true);
  };

  const resetConversation = () => {
    setMessages([]);
    chatbotService.resetSession();
    // Send initial greeting again
    setTimeout(() => handleBotResponse("Привет"), 100);
  };

  const positionClasses = position === 'bottom-right' 
    ? 'bottom-4 right-4' 
    : 'bottom-4 left-4';

  const themeClasses = theme === 'dark'
    ? 'bg-gray-800 text-white border-gray-700'
    : 'bg-white text-gray-900 border-gray-200';

  if (!isOpen) {
    return (
      <div className={`fixed ${positionClasses} z-50`}>
        <button
          onClick={toggleChat}
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110"
          style={{ backgroundColor: primaryColor }}
          aria-label="Open chat"
        >
          <MessageCircle size={24} />
        </button>
      </div>
    );
  }

  return (
    <div className={`fixed ${positionClasses} z-50`}>
      <div className={`w-80 ${themeClasses} border rounded-lg shadow-xl flex flex-col transition-all duration-300 ${isMinimized ? 'h-12' : 'h-96'}`}>
        {/* Header */}
        <div 
          className="flex items-center justify-between p-4 border-b rounded-t-lg text-white"
          style={{ backgroundColor: primaryColor }}
        >
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <span className="text-blue-600 font-bold text-sm">GRC</span>
            </div>
            <div>
              <h3 className="font-semibold text-sm">Garda Racing Club</h3>
              <p className="text-xs opacity-90">
                {isTyping ? 'Печатает...' : 'Yacht Regatta Booking'}
              </p>
            </div>
          </div>
          <div className="flex space-x-1">
            {!isMinimized && (
              <button
                onClick={resetConversation}
                className="text-white hover:bg-white hover:bg-opacity-20 rounded p-1 transition-colors text-xs"
                title="Начать заново"
              >
                ↻
              </button>
            )}
            <button
              onClick={minimizeChat}
              className="text-white hover:bg-white hover:bg-opacity-20 rounded p-1 transition-colors"
              title="Свернуть"
            >
              <Minimize2 size={16} />
            </button>
            <button
              onClick={toggleChat}
              className="text-white hover:bg-white hover:bg-opacity-20 rounded p-1 transition-colors"
              title="Закрыть"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {!isMinimized && (
          <>
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}>
                  <div className={`max-w-xs px-3 py-2 rounded-lg ${
                    message.isBot 
                      ? theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-800'
                      : 'text-white'
                  }`}
                  style={!message.isBot ? { backgroundColor: primaryColor } : {}}
                  >
                    <p className="text-sm whitespace-pre-line">{message.text}</p>
                    {message.quickReplies && (
                      <div className="mt-2 space-y-1">
                        {message.quickReplies.map((reply, index) => (
                          <button
                            key={index}
                            onClick={() => handleQuickReply(reply)}
                            className={`block w-full text-left text-xs px-2 py-1 border rounded hover:bg-opacity-80 transition-colors ${
                              theme === 'dark' 
                                ? 'bg-gray-600 border-gray-500 hover:bg-gray-500' 
                                : 'bg-white border-gray-300 hover:bg-gray-50'
                            }`}
                          >
                            {reply}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className={`px-3 py-2 rounded-lg ${
                    theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'
                  }`}>
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

            {/* Input */}
            <div className="border-t p-3">
              <form onSubmit={handleSubmit} className="flex space-x-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Напишите сообщение..."
                  className={`flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm ${
                    theme === 'dark' 
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                      : 'bg-white border-gray-300 text-gray-900'
                  }`}
                  disabled={isTyping}
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim() || isTyping}
                  className="px-3 py-2 text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ backgroundColor: primaryColor }}
                  title="Отправить"
                >
                  <Send size={16} />
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ChatWidget;