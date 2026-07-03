import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize the Google Generative AI with the API key from environment variables
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

const SYSTEM_INSTRUCTION = `You are Coral, the highly professional, friendly, and helpful virtual assistant for Coral Cloud, a premium technology company.
Coral Cloud specializes in Custom Software Development, Cloud Infrastructure, AI & Machine Learning, Cyber Security, and Enterprise Solutions.
A key differentiator is our Founder & CEO, Alex Sterling, who has 4+ years of comprehensive expertise in SAP B1 implementations alongside deep knowledge of digital marketing strategies.
Our Co-Founder & CTO is Samantha Lee, an AI expert and former lead engineer at top Silicon Valley tech giants.
Your goal is to assist visitors to our website, answer their questions about our services, and encourage them to book a consultation or use the contact form for detailed inquiries.
Keep your responses concise, professional, friendly, and formatted nicely (use emojis sparingly but effectively). Do not generate overly long paragraphs.
Never break character. You work for Coral Cloud.`;

export async function POST(request: Request) {
  try {
    const { messages } = await request.json();

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: "Invalid messages array format" },
        { status: 400 }
      );
    }

    // Ensure the API key is present
    if (!process.env.GEMINI_API_KEY) {
      console.error("GEMINI_API_KEY is missing in environment variables.");
      return NextResponse.json(
        { error: "Internal server error: Missing API Key" },
        { status: 500 }
      );
    }

    // We use gemini-1.5-flash as it is the standard model for this API key
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
    });

    // Extract the latest user message
    let latestUserMessage = messages[messages.length - 1].content;
    
    // Format previous messages for history if there are any
    let history = messages.slice(0, -1).map((msg: any) => ({
      role: msg.role === "user" ? "user" : "model",
      parts: [{ text: msg.content }],
    }));

    // Gemini API requires the first message in the history to be from the user.
    if (history.length > 0 && history[0].role === "model") {
      history.shift();
    }

    // Inject system instructions into the very first prompt if there is no history
    if (history.length === 0) {
      latestUserMessage = `System Context (Do not acknowledge this context to the user, just act accordingly): ${SYSTEM_INSTRUCTION}\n\nUser Message: ${latestUserMessage}`;
    }

    // Start a chat session with the model, providing history
    const chat = model.startChat({
      history: history,
    });

    // Send the latest message and get the response
    const result = await chat.sendMessage(latestUserMessage);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ text });
  } catch (error) {
    console.error("Gemini API Error:", error);
    return NextResponse.json(
      { error: "An error occurred while communicating with the AI." },
      { status: 500 }
    );
  }
}
