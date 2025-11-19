import { createContext, useEffect, useState } from "react";
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
    t = t.replace(/\*/g, "");

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

      const result = await model.generateContent(
        `You are an expert AI assistant. Answer any question I ask with the best possible answer. 
Before answering, consider these example questions and answers:

Example 1:
Q: What is the capital of Pakistan?
A: The capital of Pakistan is Islamabad.

Example 2:
Q: How do I make a React button?
A: In React, you can create a button using:
   <button onClick={handleClick}>Click Me</button>

Example 3:
Q: Tell me a fun joke.
A: Why did the JavaScript developer go broke? Because he kept using 'try' but never 'catch'.

Now, here is my question: 
[Insert your question here]
` + promptText
      );
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

  function handlechatquestionssend(question) {
    setPrompt(question);
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
    handlechatquestionssend,
  };

  return <context.Provider value={value}>{children}</context.Provider>;
}
