import { createCipheriv, privateEncrypt, publicEncrypt } from "crypto";
import { getServerSession } from "next-auth";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";
import options from "../auth/[...nextauth]/options";
import { CustomSession } from "@/lib/CustomSession";

const algorithm = "aes-256-cbc";
const key = Buffer.from(String(process.env.COOKIE_KEY), "hex");
const iv = Buffer.from(String(process.env.COOKIE_IV), "hex");

export async function GET(request: Request){

  const session = await getServerSession(options) as CustomSession;

  if (session !== null && session.user?.email?.endsWith("example.com")){

    let cipher = createCipheriv(algorithm, Buffer.from(key), iv);
  
    let encrypted = cipher.update(String(session?.user?.id));
  
    encrypted = Buffer.concat([encrypted, cipher.final()]);
  
    cookies().set("guestid", encrypted.toString("hex"), {httpOnly: true});
  }

  redirect("/signin")
}