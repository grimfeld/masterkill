import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://avjydqbbluhbbmddsaeg.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzODYyOTM3MCwiZXhwIjoxOTU0MjA1MzcwfQ.oAzjSUKAEdAXvkLgCda80LACzaisBH3srcmaw3vr4-M'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase