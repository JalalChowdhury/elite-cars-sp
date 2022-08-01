import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://ggofvsszogphgrbidbqk.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdnb2Z2c3N6b2dwaGdyYmlkYnFrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTkyOTI4ODUsImV4cCI6MTk3NDg2ODg4NX0.I6PF_6duSioKhvGaflphptFl7bCJCRZJQPeScM1uE0I";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);