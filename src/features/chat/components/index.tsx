"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Bot, Send, User } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { sendMessageToWordware, Message } from "../actions";

export const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hello! How can I assist you today?" },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (input.trim() && !isLoading) {
      const userMessage: Message = { role: "user", content: input };
      setMessages((prev) => [...prev, userMessage]);
      setInput("");
      setIsLoading(true);
      setError(null);

      try {
        const reader = await sendMessageToWordware([...messages, userMessage]);
        const assistantMessage: Message = { role: "assistant", content: "" };
        setMessages((prev) => [...prev, assistantMessage]);

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          const chunk = new TextDecoder().decode(value);
          try {
            const parsedChunk = JSON.parse(chunk);
            if (parsedChunk.type === "chunk" && parsedChunk.content) {
              assistantMessage.content += parsedChunk.content;
              setMessages((prev) => [...prev.slice(0, -1), assistantMessage]);
            }
          } catch (e) {
            console.error("Error parsing chunk:", e);
          }
        }
      } catch (error) {
        console.error("Error sending message to Wordware:", error);
        setError(
          error instanceof Error ? error.message : "An unknown error occurred"
        );
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="flex flex-col h-full ">
      <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex  ${
              message.role === "user" ? "justify-end" : "justify-start"
            } mb-4`}
          >
            <div
              className={`flex ${
                message.role === "user" ? "flex-row-reverse" : "flex-row"
              } items-end max-w-[80%]`}
            >
              <Avatar className="w-8 h-8">
                <AvatarFallback>
                  {message.role === "user" ? (
                    <User className="h-4 w-4" />
                  ) : (
                    <Bot className="h-4 w-4" />
                  )}
                </AvatarFallback>
              </Avatar>
              <div
                className={`mx-2 p-2 rounded-lg ${
                  message.role === "user"
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground"
                }`}
              >
                <p className="text-sm">{message.content}</p>
              </div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start mb-4">
            <div className="flex flex-row items-end max-w-[80%]">
              <Avatar className="w-8 h-8">
                <AvatarFallback>
                  <Bot className="h-4 w-4" />
                </AvatarFallback>
              </Avatar>
              <div className="mx-2 p-2 rounded-lg bg-secondary text-secondary-foreground">
                <p className="text-sm">Thinking...</p>
              </div>
            </div>
          </div>
        )}
        {error && (
          <div className="flex justify-start mb-4">
            <div className="flex flex-row items-end max-w-[80%]">
              <Avatar className="w-8 h-8">
                <AvatarFallback>
                  <Bot className="h-4 w-4" />
                </AvatarFallback>
              </Avatar>
              <div className="mx-2 p-2 rounded-lg bg-red-100 text-red-800">
                <p className="text-sm">Error: {error}</p>
              </div>
            </div>
          </div>
        )}
      </ScrollArea>

      <div className="flex items-center gap-2">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message here..."
          className="flex-1"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              handleSend();
            }
          }}
          disabled={isLoading}
        />
        <Button
          onClick={handleSend}
          size="icon"
          className="bg-primary hover:bg-primary/90"
          disabled={isLoading}
        >
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};
