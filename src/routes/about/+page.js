import { supabase } from "$lib/supabaseClient";

export async function load() {
  const { data } = await supabase.from("notice").select("*");
  return {
    data: data ?? [],
  };
}
