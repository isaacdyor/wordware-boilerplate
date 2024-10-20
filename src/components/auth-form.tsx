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

import { OAuthProviders } from "@/components/oauth";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";

const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6).max(100),
});

export type AuthInput = z.infer<typeof registerSchema>;

interface AuthFormProps {
  title: string;
  onSubmit: (data: AuthInput) => Promise<void>;
  Link: React.ReactNode;
}

export function AuthForm({ title, onSubmit, Link }: AuthFormProps) {
  const [loading, setLoading] = useState(false);
  const form = useForm<AuthInput>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function handleSubmit(data: AuthInput) {
    setLoading(true);
    await onSubmit(data);
    setLoading(false);
  }

  return (
    <div className="w-full bg-background p-6">
      <div className="flex h-full items-center justify-center">
        <div className="w-full max-w-md">
          <h1 className="mb-4 text-2xl font-semibold">{title}</h1>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className="flex w-full flex-1 flex-col justify-center gap-2"
            >
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
                isLoading={loading}
                variant="default"
                className="my-3 w-full"
                type="submit"
              >
                {title}
              </Button>
            </form>
          </Form>
          <div className="flex items-center gap-2 py-4">
            <hr className="w-full" />
            <p className="text-xs text-muted-foreground">OR</p>
            <hr className="w-full" />
          </div>
          <OAuthProviders />

          {Link}
        </div>
      </div>
    </div>
  );
}
