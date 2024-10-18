"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Link from "next/link";

import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { OAuthProviders } from "@/features/auth/components/oauth";

const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6).max(100),
});

export type SignupInput = z.infer<typeof registerSchema>;

export default function Login() {
  const form = useForm<SignupInput>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <div className="h-screen w-full bg-background">
      <div className="flex h-full items-center justify-center">
        <div className="w-full max-w-md p-8">
          <h1 className="mb-4 text-2xl font-semibold">Sign in</h1>
          <Form {...form}>
            <form className="flex w-full flex-1 flex-col justify-center gap-2 text-muted-foreground animate-in">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-muted-foreground">
                      Email Address
                    </FormLabel>
                    <FormControl>
                      <Input
                        disabled
                        placeholder="Your email address"
                        {...field}
                        autoComplete="on"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-muted-foreground">
                      Password
                    </FormLabel>
                    <FormControl>
                      <Input
                        disabled
                        placeholder="Your password"
                        type="password"
                        autoComplete="on"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                disabled
                variant="default"
                className="my-3 w-full"
                type="submit"
              >
                Sign in
              </Button>
            </form>
          </Form>
          <div className="flex items-center gap-2 py-4">
            <hr className="w-full" />
            <p className="text-xs text-muted-foreground">OR</p>
            <hr className="w-full" />
          </div>
          <OAuthProviders />

          <p className="py-4 text-center text-sm text-muted-foreground underline">
            <Link href="/signup">Don&apos;t have an account? Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
