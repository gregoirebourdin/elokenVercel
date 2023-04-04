// @ts-nocheck
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;
const serviceKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxpZnpiZXN3a25kZ2V2aW1ka29oIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY2MTUxNDAwOCwiZXhwIjoxOTc3MDkwMDA4fQ.wXQ3dGSJbc7qAoKhm37aIctgU3ZVAeMZG9LcxYtqvDU"
// Create a single supabase client for interacting with your database
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
