import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import AIAssistant from './AIAssistant';

interface EmbeddableWidgetProps {
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
  theme?: 'light' | 'dark' | 'auto';
  primaryColor?: string;
  language?: 'en' | 'ru' | 'it';
  apiEndpoint?: string;
  triggerText?: string;
  welcomeMessage?: string;
  customTriggerIcon?: React.ReactNode;
  onMessage?: (message: string) => void;
  zIndex?: number;
}

export const EmbeddableWidget: React.FC<EmbeddableWidgetProps> = ({
  position = 'bottom-right',
  theme = 'light',
  primaryColor = '#0066cc',
  language = 'en',
  apiEndpoint = '/api/chat',
  triggerText,
  welcomeMessage,
  customTriggerIcon,
  onMessage,
  zIndex = 1000
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasNewMessage, setHasNewMessage] = useState(false);

  const positionClasses = {
    'bottom-right': 'bottom-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    'top-right': 'top-4 right-4',
    'top-left': 'top-4 left-4'
  };

  const handleMessage = (message: string) => {
    if (onMessage) {
      onMessage(message);
    }
    setHasNewMessage(false);
  };

  const toggleWidget = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setHasNewMessage(false);
    }
  };

  // Trigger button when widget is closed
  if (!isOpen) {
    return (
      <div 
        className={`fixed ${positionClasses[position]}`}
        style={{ zIndex }}
      >
        <button
          onClick={toggleWidget}
          className="relative group bg-white shadow-lg rounded-full p-4 transition-all duration-300 hover:scale-110 hover:shadow-xl"
          style={{ 
            backgroundColor: primaryColor,
            color: 'white'
          }}
          aria-label="Open AI Assistant"
        >
          {customTriggerIcon || <MessageCircle size={24} />}
          
          {/* Notification badge */}
          {hasNewMessage && (
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse" />
          )}
          
          {/* Tooltip */}
          {triggerText && (
            <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {triggerText}
            </div>
          )}
          
          {/* Pulse animation */}
          <div 
            className="absolute inset-0 rounded-full animate-ping opacity-20"
            style={{ backgroundColor: primaryColor }}
          />
        </button>
      </div>
    );
  }

  // Widget when open
  return (
    <div 
      className={`fixed ${positionClasses[position]} transition-all duration-300 ease-in-out`}
      style={{ zIndex }}
    >
      <div className="relative">
        {/* Close button */}
        <button
          onClick={toggleWidget}
          className="absolute -top-2 -right-2 w-6 h-6 bg-gray-500 hover:bg-gray-600 text-white rounded-full flex items-center justify-center text-xs transition-colors z-10"
          aria-label="Close AI Assistant"
        >
          <X size={12} />
        </button>
        
        {/* AI Assistant */}
        <AIAssistant
          mode="widget"
          theme={theme}
          primaryColor={primaryColor}
          language={language}
          apiEndpoint={apiEndpoint}
          onMessage={handleMessage}
          welcomeMessage={welcomeMessage}
          enableVoice={true}
          enableAttachments={true}
        />
      </div>
    </div>
  );
};

export default EmbeddableWidget;