import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request:Request) {
  try {

    const data = await request.formData()
    
    // create the letter
    const letter = await prisma.letter.create({
      data: {
        letterAuthorEmail: String(data.get("email")),
        letterContent: String(data.get("content")),
      }
    })

   

    return new NextResponse(JSON.stringify(letter), {
      status: 201,
      headers: { "Content-Type": "application/json"}
    })
  } catch (error: any) {
    if (error.code === "P2002") {
      return new NextResponse("User with email already exists", {
        status: 409
      })
    } 
    return new NextResponse(error.message, {status: 500})
  }
}