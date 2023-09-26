import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request:Request) {
  const letters = await prisma.letter.findMany()
  return NextResponse.json(letters)
}

export async function POST(request: Request) {
  try {
    // get form data
    const data = await request.formData();

    // create the letter
    const letter = await prisma.letter.create({
      data: {
        letterAuthorEmail: String(data.get("email")),
        letterContent: String(data.get("content")),
      },
    });

    return new NextResponse(JSON.stringify(letter), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error: any) {
    return new NextResponse(error.message, { status: 500 });
  }
}
