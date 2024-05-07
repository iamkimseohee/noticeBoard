import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://nlpcnatuqyhwiouyvzno.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5scGNuYXR1cXlod2lvdXl2em5vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ3MTY4MTMsImV4cCI6MjAzMDI5MjgxM30.mub72MoRdA6iv0GEtWMMZe7roKCPPRm9xN274MkSzk8"
);
