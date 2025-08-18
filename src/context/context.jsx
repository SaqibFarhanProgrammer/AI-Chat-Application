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

      const genAI = new GoogleGenerativeAI(import.meta.env.VITE_API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

      const result = await model.generateContent(promptText);
      const newResult = result.response.text();

      setAiResponse(newResult);

      setPreviousPrompts((prev) => [...prev, promptText]);

      let newresponse = "";
      const splitrespone = newResult.split("**");

      for (let i = 0; i < splitrespone.length; i++) {
        newresponse += splitrespone[i].split("*").join(" ");
      }

      return newresponse;
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
