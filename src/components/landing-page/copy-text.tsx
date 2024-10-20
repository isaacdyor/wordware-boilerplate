"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";

export function CopyText({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      type="button"
      className="font-mono text-[#878787] text-xs md:text-sm p-4 rounded-full border border-border transition-colors flex items-center gap-2 bg-background"
    >
      <span>{value}</span>
      {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
    </button>
  );
}
