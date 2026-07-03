import { GoogleGenerativeAI } from "@google/generative-ai";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

async function main() {
  try {
    console.log("Fetching models...");
    
    // Instead of using genAI.getGenerativeModel which we know fails,
    // let's fetch from the REST API directly to list models since the SDK doesn't expose listModels directly.
    
    const response = await fetch(\`https://generativelanguage.googleapis.com/v1beta/models?key=\${process.env.GEMINI_API_KEY}\`);
    const data = await response.json();
    
    if (data.models) {
      console.log("Available Models:");
      data.models.forEach((m: any) => {
        if (m.supportedGenerationMethods.includes("generateContent")) {
           console.log("- " + m.name);
        }
      });
    } else {
      console.log("Error or no models found:", data);
    }
  } catch (e) {
    console.error("Failed:", e);
  }
}

main();
