"use client";

import { AuthForm } from "@/components/auth-form";
import { createClient } from "@/lib/supabase/client";
import Link from "next/link";

export default function Signup() {
  const supabase = createClient();

  async function handleSignin({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      console.error(error);
    }
    console.log(data);
  }

  return (
    <AuthForm
      title="Sign in"
      onSubmit={handleSignin}
      Link={
        <Link
          href="/signup"
          className="flex items-center justify-center underline text-muted-foreground w-full text-sm pt-4"
        >
          Don&apos;t have an account? Sign up
        </Link>
      }
    />
  );
}
