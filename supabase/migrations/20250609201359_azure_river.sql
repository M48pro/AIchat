/*
  # Yacht Regatta Booking System Schema

  1. New Tables
    - `customers`
      - `id` (uuid, primary key)
      - `email` (text, unique)
      - `phone` (text)
      - `full_name` (text)
      - `created_at` (timestamp)
    
    - `sessions`
      - `id` (uuid, primary key)
      - `date` (date)
      - `time_slot` (text) - 'morning' or 'afternoon'
      - `max_participants` (integer, default 4)
      - `available_spots` (integer, default 4)
      - `price_per_person` (numeric, default 199)
      - `status` (text, default 'active')
      - `created_at` (timestamp)
    
    - `bookings`
      - `id` (uuid, primary key)
      - `session_id` (uuid, foreign key)
      - `customer_id` (uuid, foreign key)
      - `participants_count` (integer)
      - `total_amount` (numeric)
      - `status` (text, default 'pending')
      - `booking_reference` (text, unique)
      - `notes` (text)
      - `created_at` (timestamp)
      - `confirmed_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for public read access to sessions
    - Add policies for customers to view their own bookings
    - Add policies for booking creation

  3. Functions
    - Function to generate booking reference
    - Function to update available spots when booking is created
*/

-- Create customers table
CREATE TABLE IF NOT EXISTS customers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  phone text,
  full_name text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create sessions table for regatta sessions
CREATE TABLE IF NOT EXISTS sessions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  date date NOT NULL,
  time_slot text NOT NULL CHECK (time_slot IN ('morning', 'afternoon')),
  max_participants integer DEFAULT 4,
  available_spots integer DEFAULT 4,
  price_per_person numeric DEFAULT 199,
  status text DEFAULT 'active' CHECK (status IN ('active', 'cancelled', 'completed')),
  created_at timestamptz DEFAULT now(),
  UNIQUE(date, time_slot)
);

-- Create bookings table
CREATE TABLE IF NOT EXISTS bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id uuid REFERENCES sessions(id) ON DELETE CASCADE,
  customer_id uuid REFERENCES customers(id) ON DELETE CASCADE,
  participants_count integer NOT NULL CHECK (participants_count > 0 AND participants_count <= 4),
  total_amount numeric NOT NULL,
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled', 'completed')),
  booking_reference text UNIQUE NOT NULL,
  notes text,
  created_at timestamptz DEFAULT now(),
  confirmed_at timestamptz
);

-- Enable RLS
ALTER TABLE customers ENABLE ROW LEVEL SECURITY;
ALTER TABLE sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

-- RLS Policies for customers
CREATE POLICY "Customers can view own data"
  ON customers
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Anyone can create customer"
  ON customers
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- RLS Policies for sessions (public read access)
CREATE POLICY "Anyone can view active sessions"
  ON sessions
  FOR SELECT
  TO anon, authenticated
  USING (status = 'active');

CREATE POLICY "Service role can manage sessions"
  ON sessions
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- RLS Policies for bookings
CREATE POLICY "Customers can view own bookings"
  ON bookings
  FOR SELECT
  TO authenticated
  USING (customer_id = auth.uid());

CREATE POLICY "Anyone can create bookings"
  ON bookings
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Service role can manage bookings"
  ON bookings
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- Function to generate booking reference
CREATE OR REPLACE FUNCTION generate_booking_reference()
RETURNS text AS $$
BEGIN
  RETURN 'GRC-' || TO_CHAR(NOW(), 'YYYYMMDD') || '-' || LPAD(FLOOR(RANDOM() * 10000)::text, 4, '0');
END;
$$ LANGUAGE plpgsql;

-- Function to update available spots when booking is created
CREATE OR REPLACE FUNCTION update_session_availability()
RETURNS trigger AS $$
BEGIN
  IF TG_OP = 'INSERT' THEN
    -- Decrease available spots when booking is created
    UPDATE sessions 
    SET available_spots = available_spots - NEW.participants_count
    WHERE id = NEW.session_id;
    RETURN NEW;
  ELSIF TG_OP = 'DELETE' THEN
    -- Increase available spots when booking is cancelled
    UPDATE sessions 
    SET available_spots = available_spots + OLD.participants_count
    WHERE id = OLD.session_id;
    RETURN OLD;
  ELSIF TG_OP = 'UPDATE' THEN
    -- Handle status changes
    IF OLD.status != 'cancelled' AND NEW.status = 'cancelled' THEN
      UPDATE sessions 
      SET available_spots = available_spots + NEW.participants_count
      WHERE id = NEW.session_id;
    ELSIF OLD.status = 'cancelled' AND NEW.status != 'cancelled' THEN
      UPDATE sessions 
      SET available_spots = available_spots - NEW.participants_count
      WHERE id = NEW.session_id;
    END IF;
    RETURN NEW;
  END IF;
  RETURN NULL;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for booking availability updates
CREATE TRIGGER booking_availability_trigger
  AFTER INSERT OR UPDATE OR DELETE ON bookings
  FOR EACH ROW
  EXECUTE FUNCTION update_session_availability();

-- Insert sample sessions for the next 30 days (April-October season)
INSERT INTO sessions (date, time_slot, max_participants, available_spots, price_per_person, status)
SELECT 
  date_series::date,
  time_slot,
  4,
  4,
  199,
  'active'
FROM 
  generate_series(
    CURRENT_DATE,
    CURRENT_DATE + INTERVAL '30 days',
    INTERVAL '1 day'
  ) AS date_series,
  unnest(ARRAY['morning', 'afternoon']) AS time_slot
WHERE 
  EXTRACT(month FROM date_series) BETWEEN 4 AND 10
ON CONFLICT (date, time_slot) DO NOTHING;