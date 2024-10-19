"use server";

import { env } from "@/env";

export type Message = {
  role: "user" | "assistant";
  content: string;
};

export async function sendMessageToWordware(messages: Message[]) {
  const orgSlug = "isaac-dyor-d74b42";
  const appSlug = "40db4b8b-3037-42bc-8426-3547d1d462c3";
  const version = "2.0";

  console.log("Sending POST request to start the run");
  const runResponse = await fetch(
    `https://api.wordware.ai/v1alpha/apps/${orgSlug}/${appSlug}/${version}/runs`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${env.WORDWARE_API_KEY}`,
      },
      body: JSON.stringify({
        inputs: {
          question: messages[messages.length - 1].content,
        },
      }),
    }
  );

  if (!runResponse.ok) {
    console.error("Failed to start a run. Status:", runResponse.status);
    throw new Error("Failed to start a run with the Wordware API");
  }

  const { runId } = await runResponse.json();
  console.log("Run started. ID:", runId);

  const streamResponse = await fetch(
    `https://api.wordware.ai/v1alpha/runs/${runId}/stream`,
    {
      headers: {
        Authorization: `Bearer ${env.WORDWARE_API_KEY}`,
      },
    }
  );

  if (!streamResponse.ok) {
    throw new Error(`Failed to start streaming: ${streamResponse.status}`);
  }

  const reader = streamResponse.body?.getReader();
  if (!reader) {
    throw new Error("Failed to get stream reader");
  }

  return reader;
}
