"use server";

import { createClient } from "@/lib/supabase/server";
const supabase = createClient();

export async function signin({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  return { error };
}

export async function signup({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const { error } = await supabase.auth.signUp({
    email,
    password,
  });

  return { error };
}
