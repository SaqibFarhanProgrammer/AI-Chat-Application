import { createContext } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";


export const context = createContext();

    try {
      setLoading(true);

      const genAI = new GoogleGenerativeAI(import.meta.env.VITE_API_KEY);

      const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

      const result = await model.generateContent("what is next js");

      setOutput(result.response.text());
    } catch (error) {
      console.error("Error:", error);
      setOutput("Something went wrong!");
    } finally {
      setLoading(false);
    }
  }

