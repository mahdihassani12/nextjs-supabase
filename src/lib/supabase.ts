import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  process.env.NEXT_PUBLIC_URL!,
  process.env.NEXT_PUBLIC_ANON_KEY!
);

export const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_URL!,
  process.env.NEXT_PUBLIC_SERVICE_ROLE_KEY!
);
