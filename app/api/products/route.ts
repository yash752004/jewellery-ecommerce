// app/api/chat/route.ts
import { NextResponse } from "next/server";
import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Make sure this is set in your environment
});

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: "Invalid messages format" }, { status: 400 });
    }

    // Call OpenAI Chat Completion API
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini", // or "gpt-4o", "gpt-3.5-turbo", etc.
      messages: messages,
    });

    // Extract assistant's reply
    const message = completion.choices[0]?.message?.content ?? "No response";

    return NextResponse.json({ message });
  } catch (error) {
    console.error("OpenAI API error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
