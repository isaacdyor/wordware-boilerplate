"use client";

import { signin } from "@/actions/auth";
import { AuthForm, AuthInput } from "@/components/auth-form";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function Signup() {
  const router = useRouter();

  async function handleSignin(data: AuthInput) {
    const { error } = await signin(data);
    if (error) {
      toast.error(error.message);
    } else {
      router.push("/dashboard");
    }
  }

  return (
    <AuthForm
      title="Sign in"
      onSubmit={handleSignin}
      Link={
        <Link
          href="/signup"
          className="flex w-full items-center justify-center pt-4 text-sm text-muted-foreground underline"
        >
          Don&apos;t have an account? Sign up
        </Link>
      }
    />
  );
}
