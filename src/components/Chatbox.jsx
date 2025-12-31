import React, { useContext, useState, useEffect, useRef } from "react";
import { Button } from "./ui/button";
import { Send } from "lucide-react";
import "../App.css";
import { context } from "../context/context";
import Chatboxes from "./Chatboxes";
import Navbar from "./Navbar";
import pdfToText from "react-pdftotext";
import { GoPlus } from "react-icons/go";

export default function ChatArea() {
  const { prompt, setPrompt, getResponse } = useContext(context);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pdfprompt, setpdfprompt] = useState("");

  const chatEndRef = useRef(null);

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, loading]);

  async function handleSend(promptText) {
    if (!promptText.trim()) return;

    setPrompt("");
    setMessages((prev) => [...prev, { role: "user", text: promptText }]);
    setLoading(true);

    const aiRes = await getResponse(promptText);
    setMessages((prev) => [...prev, { role: "ai", text: aiRes }]);
    setLoading(false);
  }

  async function handlePdf(event) {
    const file = event.target.files[0];
    if (!file) return;
    const text = await pdfToText(file);

    setPrompt(text);
  }

  return (
    <div className="flex justify-between items-center flex-col h-screen w-[100vw] text-white z-10">
      <Navbar />

      {messages.length === 0 ? (
        <div className="hero absolute max-[420px]:top-[20vh] max-[420px]:left-7 top-[10vw] left-[17%]">
          <h1 className="text-[17vw] max-[420px]:text-[11vh] bg-gradient-to-b from-white to-zinc-900 bg-clip-text text-transparent">
            Neura AI
          </h1>
        </div>
      ) : (
        <div
          className="
          chatarea p-20 flex flex-col gap-5 mr-5 
          overflow-y-auto overflow-x-hidden mb-20  
          h-[100vh] w-full
            px-50  
            max-[480px]:p-4
            max-[480px]:px-4
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
                {data.role === "user" ? "" : "AI"}
              </p>
              <p
                className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[18px]"
                dangerouslySetInnerHTML={{ __html: data.text }}
              />
            </div>
          ))}

          {loading && (
            <div className="ml-4 max-[480px]:ml-1">
              <p className="text-xs opacity-70 mb-1">AI</p>
              <p className="shiny-text">Typing...</p>
            </div>
          )}

          {/* Invisible div to scroll to */}
          <div ref={chatEndRef} />
        </div>
      )}

      {/* Input area */}
 <div
  className={`
    fixed p-4 w-[55%] h-[13vh] flex items-center gap-2 z-10
    ${messages.length === 0 ? "top-[26vw] left-[23vw]" : "bottom-0 left-[25%]"}
    max-[670px]:w-[80vw] max-[670px]:left-[10vw]
    max-[420px]:top-[33%]
    max-[420px]:w-full max-[420px]:left-0 max-[420px]:bottom-0 max-[420px]:h-[10vh] max-[420px]:p-3
  `}
>
  <textarea
    onKeyDown={(e) => e.key === "Enter" && handleSend(prompt)}
    value={prompt}
    onChange={(e) => setPrompt(e.target.value)}
    placeholder="Type your message..."
    className=" 
      bg-white/5 h-full w-full p-3 rounded-lg backdrop-blur-[15px] 
      border border-white/10 text-white placeholder:text-white/50 outline-none
      max-[420px]:text-[12px]
    "
  />

  <label className="absolute right-20 p-2 cursor-pointer flex items-center justify-center rounded-lg">
    <GoPlus className="text-3xl text-gray-100" />
    <input type="file" accept=".pdf" onChange={handlePdf} className="hidden" />
  </label>

  <Button
    disabled={!prompt}
    size="icon"
    onClick={() => handleSend(prompt)}
    className={`
      absolute bottom-[33px] right-9 transition
      ${prompt ? "bg-white text-black hover:bg-white/90" : "bg-zinc-100 text-black"}
      max-[420px]:right-6 max-[420px]:bottom-6
    `}
  >
    <Send className="w-4 h-4" />
  </Button>
</div>

      {messages.length === 0 ? <Chatboxes /> : null}
    </div>
  );
}
