"use server";

import { createClient } from "@/lib/supabase/server";

export async function login({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const supabase = createClient();

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  return { data, error };
}

export async function signup({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const supabase = createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  return { data, error };
}
