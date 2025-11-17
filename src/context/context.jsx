import { createContext, useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

// eslint-disable-next-line react-refresh/only-export-components
export const context = createContext();

export function AIProvider({ children }) {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [aiResponse, setAiResponse] = useState("");
  const [previousPrompts, setPreviousPrompts] = useState([]);
  const [send, setSend] = useState(false);
  const [newchat, setnewchat] = useState(true);

  // ----------- SIMPLE FORMATTER (no library, no markdown parser) -------------
  function formatAI(text) {
    let t = text;

    // escape basic HTML chars
    t = t.replace(/&/g, "&amp;");
    t = t.replace(/</g, "&lt;");
    t = t.replace(/>/g, "&gt;");

    // basic formatting
    t = t.replace(/\*\*(.*?)\*\*/g, "<b>$1</b>");
    t = t.replace(/\*(.*?)\*/g, "<i>$1</i>");

    // line breaks
    t = t.replace(/\n/g, "<br/>");

    // wrap final output
    return `<div>${t}</div>`;
  }
  // --------------------------------------------------------------------------

  async function getResponse(promptText) {
    try {
      setLoading(true);

      const genAI = new GoogleGenerativeAI(import.meta.env.VITE_API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

      const result = await model.generateContent(promptText);
      const rawText = result.response.text();

      const htmlFormatted = formatAI(rawText);

      setAiResponse(htmlFormatted);

      setPreviousPrompts((prev) => [...prev, promptText]);

      return htmlFormatted;
    } catch (error) {
      console.error("AI Error:", error);
      return "The model is overloaded. Please try again later.";
    } finally {
      setLoading(false);
    }
  }

  const value = {
    prompt,
    setPrompt,
    loading,
    setLoading,
    aiResponse,
    setAiResponse,
    send,
    setSend,
    previousPrompts,
    setPreviousPrompts,
    getResponse,
    newchat,
    setnewchat,
  };

  return <context.Provider value={value}>{children}</context.Provider>;
}
