import React, { useState } from 'react';
import { Settings, Moon, Sun, Globe, Palette } from 'lucide-react';
import AIAssistant from './AIAssistant';

const StandaloneApp: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark' | 'auto'>('light');
  const [language, setLanguage] = useState<'en' | 'ru' | 'it'>('en');
  const [primaryColor, setPrimaryColor] = useState('#0066cc');
  const [showSettings, setShowSettings] = useState(false);

  const colorPresets = [
    '#0066cc', '#10b981', '#f59e0b', '#ef4444', 
    '#8b5cf6', '#06b6d4', '#84cc16', '#f97316'
  ];

  const handleMessage = (message: string) => {
    console.log('Message sent:', message);
    // Here you would integrate with your AI service
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === 'dark' ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 to-indigo-100'
    }`}>
      {/* Header */}
      <header className={`border-b transition-colors duration-300 ${
        theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div 
                className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold"
                style={{ backgroundColor: primaryColor }}
              >
                AI
              </div>
              <div>
                <h1 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  AI Assistant
                </h1>
                <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  Intelligent conversational interface
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                className={`p-2 rounded-lg transition-colors ${
                  theme === 'dark' 
                    ? 'text-gray-400 hover:text-white hover:bg-gray-700' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
              </button>
              
              <button
                onClick={() => setShowSettings(!showSettings)}
                className={`p-2 rounded-lg transition-colors ${
                  theme === 'dark' 
                    ? 'text-gray-400 hover:text-white hover:bg-gray-700' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <Settings size={20} />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Settings Panel */}
          {showSettings && (
            <div className={`lg:col-span-1 p-6 rounded-lg border transition-colors duration-300 ${
              theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
            }`}>
              <h3 className={`text-lg font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Settings
              </h3>
              
              {/* Language Selection */}
              <div className="mb-6">
                <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  <Globe size={16} className="inline mr-2" />
                  Language
                </label>
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value as 'en' | 'ru' | 'it')}
                  className={`w-full p-2 border rounded-lg transition-colors ${
                    theme === 'dark' 
                      ? 'bg-gray-700 border-gray-600 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  }`}
                >
                  <option value="en">English</option>
                  <option value="ru">Русский</option>
                  <option value="it">Italiano</option>
                </select>
              </div>

              {/* Color Selection */}
              <div className="mb-6">
                <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  <Palette size={16} className="inline mr-2" />
                  Primary Color
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {colorPresets.map((color) => (
                    <button
                      key={color}
                      onClick={() => setPrimaryColor(color)}
                      className={`w-8 h-8 rounded-lg border-2 transition-all ${
                        primaryColor === color ? 'border-gray-400 scale-110' : 'border-transparent'
                      }`}
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
                <input
                  type="color"
                  value={primaryColor}
                  onChange={(e) => setPrimaryColor(e.target.value)}
                  className="w-full mt-2 h-8 rounded border"
                />
              </div>

              {/* Features */}
              <div className="space-y-3">
                <h4 className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  Features
                </h4>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" defaultChecked className="rounded" />
                  <span className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                    Voice Input
                  </span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" defaultChecked className="rounded" />
                  <span className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                    File Attachments
                  </span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" defaultChecked className="rounded" />
                  <span className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                    Message History
                  </span>
                </label>
              </div>
            </div>
          )}

          {/* Main Chat Interface */}
          <div className={`${showSettings ? 'lg:col-span-3' : 'lg:col-span-4'}`}>
            <AIAssistant
              mode="standalone"
              theme={theme}
              primaryColor={primaryColor}
              language={language}
              onMessage={handleMessage}
              enableVoice={true}
              enableAttachments={true}
              maxHeight="calc(100vh - 200px)"
              welcomeMessage={
                language === 'ru' ? 'Привет! Я ваш AI-помощник. Как дела?' :
                language === 'it' ? 'Ciao! Sono il tuo assistente AI. Come posso aiutarti?' :
                'Hello! I\'m your AI assistant. How can I help you today?'
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StandaloneApp;