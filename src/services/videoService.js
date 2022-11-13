import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_KEY;
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export function videoService() {
  return {
    getAllVideos() {
      return supabase.from("videos").select("*");
    },
    postVideo() {
      return supabase.from("videos").insert(); // TODO
    },
  };
}
