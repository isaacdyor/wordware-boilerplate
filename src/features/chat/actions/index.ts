"use server";

import { env } from "@/env";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export async function sendMessageToWordware(messages: Message[]) {
  const response = await fetch("https://api.wordware.ai/api/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${env.WORDWARE_API_KEY}`,
    },
    body: JSON.stringify({
      app_slug: "eb056355-5fa4-4f67-a39f-0bad93b801e0",
      org_slug: "isaac-dyor-d74b42",
      messages: messages,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to fetch response from Wordware API");
  }

  return response;
}
