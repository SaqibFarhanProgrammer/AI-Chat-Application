import { GoogleGenerativeAI } from "@google/generative-ai";

const runGemini = async () => {
  try {
    const genAI = new GoogleGenerativeAI(import.meta.env.VITE_API_KEY);

    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" },
      
    );

    const result = await model.generateContent("hi");
    console.log(result.response.text);
  } catch (error) {
    console.error("Error:", error);
  } finally {
    null;
  }
};

runGemini();
