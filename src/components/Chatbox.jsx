import React, { useContext, useState } from "react";
import { ScrollArea } from "./ui/scroll-area";
import { Button } from "./ui/button";
import { Send } from "lucide-react";
import { context } from "../context/context";
import { cn } from "../lib/utils";

export default function ChatArea() {
  const { prompt, setPrompt } = useContext(context);
  const [messages, setMessages] = useState([]);

  function handleSend() {
    if (!prompt.trim()) return;

    // user message add
    const userMessage = { id: Date.now(), sender: "user", text: prompt };

    setMessages((prev) => [...prev, userMessage]);
    setPrompt("");

    // 2 sec delay → AI reply
    setTimeout(() => {
      const aiMessage = {
        id: Date.now() + 1,
        sender: "ai",
        text: "This is a dummy AI reply 🤖",
      };
      setMessages((prev) => [...prev, aiMessage]);
    }, 2000);
  }

  return (
    <div className="flex flex-col h-screen w-[90vw] text-white z-10 ">
      {/* Header */}
      <div className="border-b border-white/10 p-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-wide">Lexora AI</h1>
        <span className="text-xs text-white/50">v1.0</span>
      </div>

      {messages.length === 0 ? (
        <div className="hero absolute top-[10vw] left-[17%]">
          <h1 className="text-[17vw] bg-gradient-to-b from-white to-zinc-900 bg-clip-text text-transparent">
            Lexora AI
          </h1>
        </div>
      ) : (
        <div className="h-[80vh] overflow-y-scroll overflow-x-hidden">
          <ScrollArea className="flex-1 p-4 px-30    m-auto w-[90vw]   ">
            <div className="flex flex-col gap-4 ">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={cn(
                    "max-w-[75%] p-3 rounded-lg text-sm leading-relaxed",
                    msg.sender === "user"
                      ? "bg-white text-black self-end"
                      : "bg-white/5 border border-white/10 self-start"
                  )}
                >
                  <p className="text-xs mb-1 opacity-60">
                    {msg.sender === "user" ? "You" : "AI"}
                  </p>
                  {msg.text}
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
      )}

      {/* Input Area */}
      <div
        className={`p-4 w-[55%] fixed ${
          messages.length === 0
            ? "top-[25vw] left-[23vw]"
            : "bottom-0 left-[28%]"
        } h-[15vh] m-auto flex items-center gap-2 z-10`}
      >
        <input
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Type your message..."
          className="bg-white/5 h-[100%] text-[1.2vw] w-[100%] p-3 rounded-lg backdrop-blur-[15px] border-white/10 text-white placeholder:text-white/50 outline-0"
        />
        <Button
          size="icon"
          onClick={handleSend}
          className="absolute bottom-[39px] bg-white right-10 text-black hover:bg-white/90 transition"
        >
          <Send className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
