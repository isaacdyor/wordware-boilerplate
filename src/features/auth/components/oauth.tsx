"use client";

import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/client";
import type { Provider } from "@supabase/supabase-js";
import React from "react";
import { siGithub, siGoogle, SimpleIcon } from "simple-icons";

const providers: { name: Provider; logo: SimpleIcon }[] = [
  {
    name: "google",
    logo: siGoogle,
  },
  {
    name: "github",
    logo: siGithub,
  },
];

export const OAuthProviders: React.FC = () => {
  const supabase = createClient();

  const handleLogin = async (provider: Provider) => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: provider,
    });
    if (error) {
      console.error("OAuth error", error);
    }
  };

  return (
    <>
      {providers.map((provider) => {
        return (
          <Button
            key={provider.name}
            variant="outline"
            className="mb-2 w-full font-normal text-muted-foreground"
            onClick={() => handleLogin(provider.name)}
          >
            <div className="flex items-center gap-2">
              {/* <provider.logo.svg /> */}
              <p>
                Sign in with{" "}
                {provider.name.charAt(0).toUpperCase() + provider.name.slice(1)}
              </p>
            </div>
          </Button>
        );
      })}
    </>
  );
};
