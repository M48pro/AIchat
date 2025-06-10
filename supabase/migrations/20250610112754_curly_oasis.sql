/*
  # Add logging tables for AI chat and chatbot interactions

  1. New Tables
    - `ai_chat_logs`
      - `id` (uuid, primary key)
      - `user_id` (text)
      - `message` (text)
      - `language` (text)
      - `timestamp` (timestamptz)
      - `created_at` (timestamptz)
    
    - `chatbot_logs`
      - `id` (uuid, primary key)
      - `user_id` (text)
      - `user_message` (text)
      - `bot_response` (text)
      - `conversation_state` (text)
      - `timestamp` (timestamptz)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on all tables
    - Add policies for service role access
*/

-- Create AI chat logs table
CREATE TABLE IF NOT EXISTS ai_chat_logs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id text NOT NULL,
  message text NOT NULL,
  language text DEFAULT 'en',
  timestamp timestamptz NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create chatbot logs table
CREATE TABLE IF NOT EXISTS chatbot_logs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id text NOT NULL,
  user_message text NOT NULL,
  bot_response text NOT NULL,
  conversation_state text,
  timestamp timestamptz NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE ai_chat_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE chatbot_logs ENABLE ROW LEVEL SECURITY;

-- RLS Policies for service role access only
CREATE POLICY "Service role can manage ai_chat_logs"
  ON ai_chat_logs
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Service role can manage chatbot_logs"
  ON chatbot_logs
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- Add indexes for better performance
CREATE INDEX IF NOT EXISTS ai_chat_logs_user_id_idx ON ai_chat_logs(user_id);
CREATE INDEX IF NOT EXISTS ai_chat_logs_timestamp_idx ON ai_chat_logs(timestamp);
CREATE INDEX IF NOT EXISTS chatbot_logs_user_id_idx ON chatbot_logs(user_id);
CREATE INDEX IF NOT EXISTS chatbot_logs_timestamp_idx ON chatbot_logs(timestamp);