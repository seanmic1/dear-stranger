import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import prisma from "../../../lib/prisma";

export async function GET(request: NextRequest) {

  const authHeader = request.headers.get('authorization');
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json(
      { success: false },
      {
        status: 401,
      },
    );
  }

  prisma.letter.updateMany({
    where:{
      responseContent: null
    },
    data:{
      responseAuthorEmail: null
    }
  })

  prisma.user.updateMany({
    data:{
      letterToRespond: null
    }
  })

  return NextResponse.json({ success: true });
}