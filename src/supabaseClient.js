import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY

supabaseUrl = "https://whwdugncwekmwazuigcb.supabase.co"
supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indod2R1Z25jd2VrbXdhenVpZ2NiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTExNzExMjksImV4cCI6MTk2Njc0NzEyOX0.p0TNohmr8oIUBcmhavN3p9IK0JdRJsa95tzWfyLlZLA"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)