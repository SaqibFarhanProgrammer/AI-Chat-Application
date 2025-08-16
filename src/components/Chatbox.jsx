import React, { useContext, useState } from "react";
import { ScrollArea } from "./ui/scroll-area";
import { Button } from "./ui/button";
import { Send } from "lucide-react";
import { context } from "../context/context";
import { cn } from "../lib/utils";

export default function ChatArea() {
  const { prompt, setPrompt, aiResponse, getResponse } = useContext(context);
  const [messages, setMessages] = useState([]);
  const [usermessage, setusermessage] = useState([]);

  function handleSend() {
    setMessages((prev) => [...prev, { sender: "user", text: prompt }]);

    setPrompt("");

    const aiMessage = {
      id: Date.now() + 1,
      sender: "ai",
      text: aiResponse,
    };
    setusermessage((prev) => [...prev, prompt]);
    getResponse(prompt);
  }

  console.log(usermessage);

  return (
    <div className="flex justify-between items-center flex-col h-screen w-[90vw] text-white z-10 ">
      {/* Header */}
      <div className="flex justify-between border-b border-white/10 p-4 w-[90vw]">
        <h1 className="text-2xl font-bold tracking-wide">Neura AI</h1>
        <span className="text-xs text-white/50">v1.0</span>
      </div>

      {messages.length === 0 ? (
        <div className="hero absolute top-[10vw] left-[17%]">
          <h1 className="text-[17vw] bg-gradient-to-b from-white to-zinc-900 bg-clip-text text-transparent">
            Neura AI
          </h1>
        </div>
      ) : (
        <div className="chatarea flex items-center justify-center mb-20 mr-5 overflow-y-scroll overflow-x-hidden bg-zinc-600 h-screen w-full ">
          <ScrollArea className="flex flex-col gap-4 p-4 w-full">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[70%] rounded-2xl px-4 py-2 shadow-md ${
                    msg.sender === "user"
                      ? "bg-blue-600 text-white"
                      : "bg-zinc-800 text-white"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </ScrollArea>
        </div>
      )}

      {/* Input Area */}
      <div
        className={`p-4 w-[55%] fixed ${
          messages.length === 0
            ? "top-[25vw] left-[23vw]"
            : "bottom-0 left-[28%]"
        } h-[15vh] m-auto flex items-center gap-2 z-10 `}
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
