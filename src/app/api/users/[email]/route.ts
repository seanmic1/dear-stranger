import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request:Request, {params}: {params: {email: string}}) {
  const email = params.email
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

export async function PATCH(
  request: Request,
  { params }: { params: { email: string } }
) {
  const email = params.email;
  let json = await request.json();

  const updated_user = await prisma.user.update({
    where: { email },
    data: json,
  });

  if (!updated_user) {
    return new NextResponse("No user with ID found", { status: 404 });
  }

  return NextResponse.json(updated_user);
}

export async function DELETE(
  request: Request,
  { params }: { params: { email: string } }
) {
  try {
    const email = params.email;
    await prisma.user.delete({
      where: { email },
    });

    return new NextResponse(null, { status: 204 });
  } catch (error: any) {
    if (error.code === "P2025") {
      return new NextResponse("No user with ID found", { status: 404 });
    }

    return new NextResponse(error.message, { status: 500 });
  }
}