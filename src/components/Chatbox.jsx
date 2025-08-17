import React, { useContext, useEffect, useRef, useState } from "react";
import { ScrollArea } from "./ui/scroll-area";
import { Button } from "./ui/button";
import { Send } from "lucide-react";
import { context } from "../context/context";

export default function ChatArea() {
  const { prompt, setPrompt, getResponse, loading, setLoading } =
    useContext(context);
  const [ai, setai] = useState("");
  const [messages, setMessages] = useState([]);
  const endRef = useRef(null);

  async function handleSend() {
    if (!prompt) return;
    setPrompt("");
    setMessages((prev) => [...prev, { role: "user", text: prompt }]);
    const aires = await getResponse(
      `"Please provide the most accurate, deeply researched, and insightful answer possible. Use a natural, human-like tone that’s professional yet conversational—as if explaining to a smart friend. Avoid buzzwords, filler, or press-release style language. Be clear, direct, and precise with simple language and well-structured sentences. Base your response on thorough web research for the best    ${prompt}`
    );
    setai(aires);
    console.log(aires);

    setMessages((prev) => [...prev, { role: "ai", text: aires }]);
  }

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex justify-between items-center flex-col h-screen w-[90vw] text-white z-10 ">
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
        <div
          ref={endRef}
          className="chatarea p-20 flex flex-col gap-5 mb-24 mr-5 overflow-y-auto overflow-x-hidden h-[100vh] w-full"
        >
          {messages.map((data, i) => (
            <div
              key={i}
              className={`max-w-[70%] my-2 px-4 py-2 rounded-md shadow-md ${
                data.role === "user"
                  ? "bg-white text-black self-end"
                  : "text-white self-start"
              }`}
            >
              <p className="text-xs opacity-70 mb-1">
                {data.role === "user" ? "You" : "AI"}
              </p>
              <p className="text-sm">{data.text}</p>
            </div>
          ))}
        </div>
      )}

      <div
        className={`p-4 w-[55%] fixed ${
          messages.length === 0
            ? "top-[26vw] left-[23vw]"
            : "bottom-0 left-[28%]"
        } h-[15vh] m-auto flex items-center gap-2 z-10 `}
      >
        <input
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSend();
            }
          }}
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
