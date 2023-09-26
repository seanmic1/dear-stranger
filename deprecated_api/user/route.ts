import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request:Request) {
  console.log(request);
  const email = "seanlasono@gmail.com"
  const user = await prisma.user.findUnique({
    where: {
      email
    }
  })

  if (!user) {
    return new NextResponse("No user with ID found", {status: 404})
  }

  return NextResponse.json(user)
}