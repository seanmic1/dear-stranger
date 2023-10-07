import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import prisma from "../../../lib/prisma";
import { getServerSession } from 'next-auth';

export async function GET(request: NextRequest) {

  const session = await getServerSession()
  if (session?.user?.email !== "seanlasono@gmail.com"){
    NextResponse.json({ success: false })
  }

  // reset letters
  await prisma.letter.updateMany({
    where:{
      responseContent: null
    },
    data:{
      responseAuthorEmail: null
    }
  })

  // reset users
  await prisma.user.updateMany({
    where:{
      letterToRespond: {not: null}
    },
    data:{
      letterToRespond: null
    }
  })

  return NextResponse.json({ success: true });
}