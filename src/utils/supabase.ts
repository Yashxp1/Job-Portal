import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl: string = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey: string = import.meta.env.VITE_SUPABASE_ANON_KEY;

const supabase: SupabaseClient = createClient(supabaseUrl, supabaseKey);

const supaBaseClient = async (
  supabaseAcessToken: string
): Promise<SupabaseClient> => {
  return createClient(supabaseUrl, supabaseKey, {
    global: {
      headers: {
        Authorization: `Bearer ${supabaseAcessToken}`,
      },
    },
  });
};

export default supaBaseClient;
