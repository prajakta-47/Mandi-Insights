
import { GoogleGenAI } from "@google/genai";

// Fix: Correct initialization using named parameter and direct environment variable access as per guidelines
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const askAjrasakha = async (prompt: string, context: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Context: ${context}\n\nUser Question: ${prompt}`,
      config: {
        systemInstruction: "You are Ajrasakha, a helpful AI assistant for Mandi-Insights. You help farmers, traders, and researchers understand Indian agricultural market data. Be concise, professional, and empathetic. Use ₹ for currency. You have access to real-time price trends, forecasting data, and arbitrage alerts.",
      },
    });
    // Fix: Accessing .text property directly (not calling as a function) as per guidelines
    return response.text || "I'm sorry, I couldn't process that. Please try again.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Error communicating with Ajrasakha. Please check your network.";
  }
};
