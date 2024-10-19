"use server";

import { env } from "@/env";

export type Message = {
  role: "user" | "assistant";
  content: string;
};

const MAX_ATTEMPTS = 60; // Increased from 30 to 60
const POLL_INTERVAL = 5000; // Increased from 2000 to 5000 milliseconds (5 seconds)

async function pollRunStatus(runId: string): Promise<any> {
  let attempts = 0;
  while (attempts < MAX_ATTEMPTS) {
    const statusResponse = await fetch(
      `https://api.wordware.ai/v1alpha/runs/${runId}`,
      {
        headers: {
          Authorization: `Bearer ${env.WORDWARE_API_KEY}`,
        },
      }
    );

    if (!statusResponse.ok) {
      throw new Error(`Failed to check run status: ${statusResponse.status}`);
    }

    const runResult = await statusResponse.json();

    if (runResult.status === "COMPLETE") {
      return runResult;
    } else if (
      runResult.status === "FAILED" ||
      runResult.status === "CANCELED"
    ) {
      throw new Error(
        `Run ${runResult.status}: ${
          runResult.errors?.[0]?.message || "Unknown error"
        }`
      );
    }

    // Wait before next poll
    await new Promise((resolve) => setTimeout(resolve, POLL_INTERVAL));
    attempts++;
  }

  throw new Error("Run timed out after maximum polling attempts");
}

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

  console.log("Polling for run completion");
  const runResult = await pollRunStatus(runId);
  console.log("Run completed. Result:", runResult);

  if (runResult.outputs && runResult.outputs.answer) {
    const output = runResult.outputs.answer;
    console.log("Run output:", output);
    return output;
  } else {
    console.error("Run completed but no answer found in outputs");
    throw new Error("No answer found in run outputs");
  }
}
