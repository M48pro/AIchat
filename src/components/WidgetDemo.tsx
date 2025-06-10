import React, { useState } from 'react';
import { Copy, Download, Eye, Code } from 'lucide-react';
import EmbeddableWidget from './EmbeddableWidget';

const WidgetDemo: React.FC = () => {
  const [config, setConfig] = useState({
    position: 'bottom-right' as const,
    theme: 'light' as const,
    primaryColor: '#0066cc',
    language: 'en' as const,
    triggerText: 'Need help? Chat with our AI!',
    welcomeMessage: 'Hello! How can I assist you today?'
  });

  const [showCode, setShowCode] = useState(false);

  const generateEmbedCode = () => {
    return `<!-- AI Assistant Widget -->
<script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
<link rel="stylesheet" href="./ai-assistant-widget.css">

<script>
window.aiAssistantConfig = {
  position: '${config.position}',
  theme: '${config.theme}',
  primaryColor: '${config.primaryColor}',
  language: '${config.language}',
  triggerText: '${config.triggerText}',
  welcomeMessage: '${config.welcomeMessage}',
  apiEndpoint: 'YOUR_API_ENDPOINT'
};
</script>
<script src="./ai-assistant-widget.js"></script>`;
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div 
                className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold"
                style={{ backgroundColor: config.primaryColor }}
              >
                AI
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">
                  AI Assistant Widget Demo
                </h1>
                <p className="text-sm text-gray-600">
                  Customize and integrate into your website
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setShowCode(!showCode)}
                className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
              >
                <Code size={16} />
                <span>View Code</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Configuration Panel */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-8">
              <h3 className="text-lg font-semibold mb-6 text-gray-900">
                Widget Configuration
              </h3>
              
              {/* Position */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Position
                </label>
                <select
                  value={config.position}
                  onChange={(e) => setConfig(prev => ({ ...prev, position: e.target.value as any }))}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="bottom-right">Bottom Right</option>
                  <option value="bottom-left">Bottom Left</option>
                  <option value="top-right">Top Right</option>
                  <option value="top-left">Top Left</option>
                </select>
              </div>

              {/* Theme */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Theme
                </label>
                <select
                  value={config.theme}
                  onChange={(e) => setConfig(prev => ({ ...prev, theme: e.target.value as any }))}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="light">Light</option>
                  <option value="dark">Dark</option>
                  <option value="auto">Auto</option>
                </select>
              </div>

              {/* Primary Color */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Primary Color
                </label>
                <div className="flex space-x-2">
                  <input
                    type="color"
                    value={config.primaryColor}
                    onChange={(e) => setConfig(prev => ({ ...prev, primaryColor: e.target.value }))}
                    className="w-12 h-10 border border-gray-300 rounded cursor-pointer"
                  />
                  <input
                    type="text"
                    value={config.primaryColor}
                    onChange={(e) => setConfig(prev => ({ ...prev, primaryColor: e.target.value }))}
                    className="flex-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Language */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Language
                </label>
                <select
                  value={config.language}
                  onChange={(e) => setConfig(prev => ({ ...prev, language: e.target.value as any }))}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="en">English</option>
                  <option value="ru">Русский</option>
                  <option value="it">Italiano</option>
                </select>
              </div>

              {/* Trigger Text */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Trigger Text
                </label>
                <input
                  type="text"
                  value={config.triggerText}
                  onChange={(e) => setConfig(prev => ({ ...prev, triggerText: e.target.value }))}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Hover text for the trigger button"
                />
              </div>

              {/* Welcome Message */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Welcome Message
                </label>
                <textarea
                  value={config.welcomeMessage}
                  onChange={(e) => setConfig(prev => ({ ...prev, welcomeMessage: e.target.value }))}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  rows={3}
                  placeholder="First message shown to users"
                />
              </div>

              {/* Actions */}
              <div className="space-y-3">
                <button
                  onClick={() => copyToClipboard(generateEmbedCode())}
                  className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                >
                  <Copy size={16} />
                  <span>Copy Embed Code</span>
                </button>
                
                <button className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors">
                  <Download size={16} />
                  <span>Download Widget</span>
                </button>
              </div>
            </div>
          </div>

          {/* Preview Area */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Preview Header */}
              <div className="bg-gray-50 px-6 py-4 border-b">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Live Preview
                  </h3>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Eye size={16} />
                    <span>Interactive Demo</span>
                  </div>
                </div>
              </div>

              {/* Mock Website */}
              <div className="relative bg-gradient-to-br from-blue-100 to-purple-100 h-96 overflow-hidden">
                {/* Mock content */}
                <div className="p-8">
                  <div className="max-w-md">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      Your Website
                    </h2>
                    <p className="text-gray-600 mb-6">
                      This is a preview of how the AI Assistant widget will appear on your website. 
                      Try clicking the chat button to test the interaction!
                    </p>
                    <div className="space-y-3">
                      <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                      <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                      <div className="h-4 bg-gray-300 rounded w-2/3"></div>
                    </div>
                  </div>
                </div>

                {/* Widget */}
                <EmbeddableWidget
                  position={config.position}
                  theme={config.theme}
                  primaryColor={config.primaryColor}
                  language={config.language}
                  triggerText={config.triggerText}
                  welcomeMessage={config.welcomeMessage}
                  zIndex={10}
                />
              </div>

              {/* Code Display */}
              {showCode && (
                <div className="border-t bg-gray-900 text-gray-100 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-semibold">Embed Code</h4>
                    <button
                      onClick={() => copyToClipboard(generateEmbedCode())}
                      className="flex items-center space-x-2 px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded text-sm transition-colors"
                    >
                      <Copy size={14} />
                      <span>Copy</span>
                    </button>
                  </div>
                  <pre className="text-sm overflow-x-auto">
                    <code>{generateEmbedCode()}</code>
                  </pre>
                </div>
              )}
            </div>

            {/* Integration Instructions */}
            <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-gray-900">
                Integration Instructions
              </h3>
              
              <div className="space-y-4 text-sm text-gray-600">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">1. Include Dependencies</h4>
                  <p>Make sure React and ReactDOM are loaded on your page (if not already included).</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">2. Add Widget Files</h4>
                  <p>Include the widget CSS and JavaScript files in your HTML.</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">3. Configure</h4>
                  <p>Set up the widget configuration object with your preferred settings.</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">4. API Integration</h4>
                  <p>Replace 'YOUR_API_ENDPOINT' with your actual AI service endpoint.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WidgetDemo;