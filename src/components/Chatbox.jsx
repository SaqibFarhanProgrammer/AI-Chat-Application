import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
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
    <div className="flex flex-col h-screen bg-black text-white">
      {/* Header */}
      <div className="border-b border-white/10 p-4 flex items-center justify-between">
        <h1
          className={cn(
            "text-2xl font-bold bg-gradient-to-r from-[#0040ff] via-purple-500 to-pink-500 bg-clip-text text-transparent"
          )}
        >
          Lexora AI
        </h1>
        <span className="text-xs text-white/50">v1.0</span>
      </div>

      {/* Chat Messages */}
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={cn(
                "max-w-[75%] p-3 rounded-lg text-sm leading-relaxed",
                msg.sender === "ai"
                  ? "bg-white/5 border border-white/10 self-start"
                  : "bg-gradient-to-r from-[#0040ff] to-purple-600 text-white self-end ml-auto"
              )}
            >
              {msg.text}
            </div>
          ))}
        </div>
      </ScrollArea>

      {/* Input Area */}
      <div className="p-4 border-t border-white/10 flex items-center gap-2">
        <Input
          placeholder="Type your message..."
          className="bg-white/5 border-white/10 text-white placeholder:text-white/50 focus-visible:ring-1 focus-visible:ring-[#0040ff]"
        />
        <Button
          size="icon"
          className="bg-gradient-to-r from-[#0040ff] to-purple-600 hover:opacity-90 transition"
        >
          <Send className="w-4 h-4 text-white" />
        </Button>
      </div>
    </div>
  );
}
