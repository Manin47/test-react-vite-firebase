// src/supabase.js
import { createClient } from "@supabase/supabase-js";

// Masukkan URL dan Key dari dashboard Supabase
const SUPABASE_URL = "https://xzjgmngfzyrbyrernbtz.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh6amdtbmdmenlyYnlyZXJuYnR6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM1NDE5NTksImV4cCI6MjA0OTExNzk1OX0.Gq1OrfQNEkEFJFI91gEVZ9eEiMQoi6ih6KAg83w-KAU";

// Inisialisasi Supabase client
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
