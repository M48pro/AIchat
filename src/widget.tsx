import React from 'react';
import { createRoot } from 'react-dom/client';
import ChatWidget from './components/ChatWidget';
import './index.css';

// Global interface for the widget
interface GardaRacingChatWidgetConfig {
  containerId?: string;
  position?: 'bottom-right' | 'bottom-left';
  theme?: 'light' | 'dark';
  primaryColor?: string;
  language?: 'en' | 'it' | 'ru';
  supabaseUrl?: string;
  supabaseAnonKey?: string;
}

class GardaRacingChatWidgetClass {
  private root: any = null;
  private container: HTMLElement | null = null;

  init(config: GardaRacingChatWidgetConfig = {}) {
    const {
      containerId = 'garda-chat-widget',
      position = 'bottom-right',
      theme = 'light',
      primaryColor = '#0066cc',
      language = 'ru'
    } = config;

    // Create container if it doesn't exist
    this.container = document.getElementById(containerId);
    if (!this.container) {
      this.container = document.createElement('div');
      this.container.id = containerId;
      document.body.appendChild(this.container);
    }

    // Set environment variables if provided
    if (config.supabaseUrl) {
      (window as any).VITE_SUPABASE_URL = config.supabaseUrl;
    }
    if (config.supabaseAnonKey) {
      (window as any).VITE_SUPABASE_ANON_KEY = config.supabaseAnonKey;
    }

    // Create React root and render
    this.root = createRoot(this.container);
    this.root.render(
      <ChatWidget
        position={position}
        theme={theme}
        primaryColor={primaryColor}
        language={language}
      />
    );
  }

  destroy() {
    if (this.root) {
      this.root.unmount();
      this.root = null;
    }
    if (this.container && this.container.parentNode) {
      this.container.parentNode.removeChild(this.container);
      this.container = null;
    }
  }

  updateConfig(config: Partial<GardaRacingChatWidgetConfig>) {
    if (this.root && this.container) {
      const currentConfig = {
        position: 'bottom-right' as const,
        theme: 'light' as const,
        primaryColor: '#0066cc',
        language: 'ru' as const,
        ...config
      };

      this.root.render(
        <ChatWidget
          position={currentConfig.position}
          theme={currentConfig.theme}
          primaryColor={currentConfig.primaryColor}
          language={currentConfig.language}
        />
      );
    }
  }
}

// Create global instance
const GardaRacingChatWidget = new GardaRacingChatWidgetClass();

// Make it available globally
(window as any).GardaRacingChatWidget = GardaRacingChatWidget;

// Auto-initialize if config is found
document.addEventListener('DOMContentLoaded', () => {
  const config = (window as any).gardaChatWidgetConfig;
  if (config) {
    GardaRacingChatWidget.init(config);
  }
});

export default GardaRacingChatWidget;