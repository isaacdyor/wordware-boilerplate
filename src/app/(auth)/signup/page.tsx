"use client";

import { signup } from "@/actions/auth";
import { AuthForm, AuthInput } from "@/components/auth-form";
import Link from "next/link";
import { toast } from "sonner";

export default function Signup() {
  async function handleSignup(data: AuthInput) {
    const { error } = await signup(data);
    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Check your email for verification");
    }
  }

  return (
    <AuthForm
      title="Sign up"
      onSubmit={handleSignup}
      Link={
        <Link
          href="/signin"
          className="flex items-center justify-center underline text-muted-foreground w-full text-sm pt-4"
        >
          Already have an account? Sign in
        </Link>
      }
    />
  );
}
