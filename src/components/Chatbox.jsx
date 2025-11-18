import React, { useContext, useState } from "react";
import { Button } from "./ui/button";
import { Send } from "lucide-react";
import "../App.css";
import { context } from "../context/context";
import ChatBoxes from "./chatboxes";

export default function ChatArea() {
  const { prompt, setPrompt, getResponse, setPreviousPrompts } =
    useContext(context);
  const [messages, setMessages] = useState([]);
  const [loading, setloading] = useState(false);

  async function handleSend(prompttext) {
    setPreviousPrompts((prev) => [...prev, prompttext]);

    setPrompt("");

    setMessages((prev) => [...prev, { role: "user", text: prompttext }]);
    setloading(false);
    const aires = await getResponse(prompttext);
    setloading(true);
    setMessages((prev) => [...prev, { role: "ai", text: aires }]);
  }

  return (
    <div className="flex justify-between items-center flex-col h-screen w-[90vw] text-white z-10 ">
      <div className="w-full max-[420px]:ml-10 px-4 py-3   border-white/10 flex items-center justify-between">
        <h1 className="text-lg font-semibold tracking-wide max-[420px]:text-base">
          Neura AI
        </h1>

        <span className="text-[10px] text-white/50 max-[420px]:text-[9px]">
          v1.0
        </span>
      </div>

      {messages.length === 0 ? (
        <div className="hero absolute max-[420px]:top-[27vh]  max-[670px]:top-[41vw] max-[895px]:top-[21vw] max-[1090px]:top-[20vh] top-[10vw] left-[17%]">
          <h1 className="text-[17vw] bg-gradient-to-b from-white to-zinc-900 bg-clip-text text-transparent">
            Neura AI
          </h1>
        </div>
      ) : (
        <div
          className="
    chatarea p-20 flex flex-col gap-5 mr-5 
    overflow-y-auto overflow-x-hidden mb-20  
    h-[100vh] w-full

    max-[480px]:p-4
    max-[480px]:mr-0
    max-[480px]:mb-24
  "
        >
          {messages.map((data, i) => (
            <div
              key={i}
              className={`
        my-2 px-4 py-2 rounded-md shadow-md
        ${
          data.role === "user"
            ? "bg-white text-black self-end"
            : "text-white self-start"
        }

        max-w-[70%]
        max-[480px]:max-w-[90%]
      `}
            >
              <p className="text-xs opacity-70 mb-1">
                {data.role === "user" ? "You" : "AI"}
              </p>

              <p
                className="text-sm"
                dangerouslySetInnerHTML={{ __html: data.text }}
              />
            </div>
          ))}

          {!loading ? (
            <div className="ml-4 max-[480px]:ml-1">
              <p className="text-xs opacity-70 mb-1">AI</p>
              <p className="shiny-text">Typing...</p>
            </div>
          ) : null}
        </div>
      )}
      <div
        className={`
    p-4 w-[55%] fixed 
    ${messages.length === 0 ? "top-[26vw] left-[23vw]" : "bottom-0 left-[25%]"}
    h-[13vh] m-auto flex items-center gap-2 z-10

    max-[1090px]:top-[30vw]
    max-[895px]:top-[36vw]
    max-[670px]:w-[80vw] max-[670px]:left-[10vw]

    /* MOBILE FIX */
    max-[420px]:w-[100vw] 
    max-[420px]:left-0 
    max-[420px]:right-0
    max-[420px]:bottom-0
    max-[420px]:top-auto
    max-[420px]:h-[10vh]
    max-[420px]:p-3
  `}
      >
        <input
          onKeyDown={(e) => e.key === "Enter" && handleSend(prompt)}
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Type your message..."
          className="
      bg-white/5 h-full text-white w-full p-3 rounded-lg backdrop-blur-[15px] 
      border-white/10 placeholder:text-white/50 outline-0

      max-[420px]:text-[12px]
    "
        />

        <Button
          size="icon"
          onClick={() => handleSend(prompt)}
          className="
      absolute bottom-[33px] right-9 bg-white text-black hover:bg-white/90 transition

      max-[420px]:right-6
      max-[420px]:bottom-6
    "
        >
          <Send className="w-4 h-4" />
        </Button>
      </div>

      {messages.length === 0 ? <ChatBoxes /> : null}
    </div>
  );
}
