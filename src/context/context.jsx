import { createContext, useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

export const context = createContext();

export function AIProvider({ children }) {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [aiResponse, setAiResponse] = useState("");
  const [previousPrompts, setPreviousPrompts] = useState([]);
  const [send, setSend] = useState(false);

  async function getResponse(promptText) {
    try {
      setLoading(true);

      // init Gemini client
      const genAI = new GoogleGenerativeAI(import.meta.env.VITE_API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

      // generate response
      const result = await model.generateContent(promptText);

      // NOTE: SDK returns result.response.text() as a function, not string directly
      const newResult = result.response.text();

      // update states
      setAiResponse(newResult);
      setPreviousPrompts((prev) => [...prev, promptText]);

      return newResult.replace("** * -", " ");
    } catch (error) {
      console.error("AI Error:", error);
      return "Sorry, something went wrong.";
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
  };

  return <context.Provider value={value}>{children}</context.Provider>;
}
