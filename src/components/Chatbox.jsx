import React from "react";
import { ScrollArea } from "./ui/scroll-area";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { cn } from "../lib/utils";
import { Send } from "lucide-react";

export default function ChatArea() {
  const messages = [
    { id: 1, sender: "ai", text: "Hello! How can I assist you today?" },
    { id: 2, sender: "user", text: "Tell me about Lexora AI." },
    {
      id: 3,
      sender: "ai",
      text: "Lexora AI is your intelligent assistant designed to deliver premium AI experiences.",
    },
  ];

  return (
    <>
      <div className="flex flex-col h-screen w-full px-[]  text-white z-10 ">
        {/* Header */}
        <div className="border-b border-white/10 p-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-wide">Lexora AI</h1>
          <span className="text-xs text-white/50">v1.0</span>
        </div>

        {/* Chat Messages */}
        <ScrollArea className="flex-1 p-4 px-30">
          <div className="flex flex-col gap-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={cn(
                  "max-w-[75%] p-3 rounded-lg text-sm leading-relaxed",
                  msg.sender === "ai"
                    ? "bg-white/5 border border-white/10 self-start"
                    : "bg-white text-black self-end ml-auto"
                )}
              >
                {msg.text}
              </div>
            ))}
          </div>
        </ScrollArea>

        {/* Input Area */}
        <div className="p-4 w-[55%] relative h-[15vh] m-auto flex items-center gap-2 z-10">
          <Input
            placeholder="Type your message..."
            className="bg-white/5  h-[100%] border-white/10 text-white placeholder:text-white/50 focus-visible:ring-1 focus-visible:ring-white"
          />
          <Button
            size="icon"
            className="absolute bg-white right-10 text-black hover:bg-white/90 transition"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </>
  );
}
