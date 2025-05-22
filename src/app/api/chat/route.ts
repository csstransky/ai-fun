import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { streamText } from "ai";
import { openai } from "@ai-sdk/openai";

export async function POST(request: NextRequest) {
  const { messages } = await request.json();

  const result = streamText({
    model: openai("gpt-4o"),
    messages,
  });

  const streamResult = result.toDataStreamResponse();

  // TODO: Hook up to DB

  return streamResult;
}
