import React from "react";
import { ScrollArea } from "./ui/scroll-area";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { cn } from "../lib/utils";
import { Send } from "lucide-react";

export default function ChatArea() {
  const messages = [];

  return (
    <>
      <div className="flex flex-col h-screen w-[90vw] px-[]  text-white z-10 ">
        {/* Header */}
        <div className="border-b border-white/10 p-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-wide">Lexora AI</h1>
          <span className="text-xs text-white/50">v1.0</span>
        </div>
        {messages.length === 0 ? (
          <div className="hero absolute top-[10vw] left-[23%] bg-amber-">
            <h1 className="text  text-[17vw]  bg-gradient-to-b from-white to-zinc-900 bg-clip-text text-transparent">
              Lexora AI
            </h1>
          </div>
        ) : (
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
        )}

        {/* Input Area */}
        <div
          className={`p-4 w-[55%]  absolute ${
            messages.length === 0
              ? "top-[25vw] left-[28%]"
              : "bottom-0 left-[28%]"
          }   h-[15vh] m-auto flex items-center gap-2 z-10`}
        >
          <input
            placeholder="Type your message..."
            className="bg-white/5 input h-[100%]  text-[2vw ] w-[100%] p-3 rounded-lg backdrop-blur-[15px] border-white/10 text-white placeholder:text-white/50  outline-0 "
            val
          />
          <div>
            <Button
              size="icon"
              className=" absolute bottom-[39px]  bg-white right-10 text-black hover:bg-white/90 transition"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
