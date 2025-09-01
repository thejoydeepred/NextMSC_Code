
import { GoogleGenAI } from "@google/genai";
import type { SearchResult, GroundingChunk } from '../types';

if (!process.env.API_KEY) {
  // This is a placeholder for environments where the key might be missing.
  // In a real deployed environment, the key is expected to be set.
  console.warn("API_KEY environment variable not set. Gemini API calls will fail.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });

export const fetchNextMscContent = async (userQuery: string): Promise<SearchResult> => {
  try {
    const prompt = `Based on information from nextmsc.com, provide a comprehensive answer for: "${userQuery}". Summarize the key points, reports, news, or blogs related to the query.`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        tools: [{ googleSearch: {} }],
      },
    });

    const text = response.text;
    const sources = response.candidates?.[0]?.groundingMetadata?.groundingChunks as GroundingChunk[] || [];

    if (!text && sources.length === 0) {
        throw new Error("Could not find relevant information for your query. Please try a different topic.");
    }
    
    return { text, sources };
  } catch (error) {
    console.error("Error fetching data from Gemini API:", error);
    throw new Error("Failed to get a response from the AI. Please check your connection or API key.");
  }
};
