// app/api/chat/route.ts

import { OpenAI } from "openai";
import { NextResponse } from "next/server";

const openai = new OpenAI({
  // apiKey: process.env.OPENAI_API_KEY!,
  apiKey: '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',
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("🟢 Received body:", body);

    const { messages, model = "gpt-3.5-turbo" } = body;

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: "Invalid or missing 'messages' array." },
        { status: 400 }
      );
    }

    const completion = await openai.chat.completions.create({
      model,
      messages,
    });

    const reply =
      completion.choices[0]?.message?.content ||
      "I couldn't generate a response.";

    return NextResponse.json({ message: reply });
  } catch (err: any) {
    console.error("🔴 API Error:", err);

    if (err.status && err.response) {
      return NextResponse.json(
        {
          error: "OpenAI API error",
          status: err.status,
          details: err.response?.data || err.message,
        },
        { status: err.status }
      );
    }

    return NextResponse.json(
      { error: "Internal server error", message: err.message },
      { status: 500 }
    );
  }
}
