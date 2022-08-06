import { createClient } from '@supabase/supabase-js'


export const supabase = createClient(env.url, env.key);