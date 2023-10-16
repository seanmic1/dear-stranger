import { createCipheriv, createDecipheriv } from "crypto";
import { cookies } from "next/headers";
import { getServerSession } from "next-auth";
import options from "@/app/api/auth/[...nextauth]/options";
import { CustomSession } from "./CustomSession";

// put in env
const algorithm = "aes-256-cbc";
const key = Buffer.from(String(process.env.COOKIE_KEY), "hex");
const iv = Buffer.from(String(process.env.COOKIE_IV), "hex");

export async function decryptCookie() {
  "use server";

  const decipher = createDecipheriv(algorithm, Buffer.from(key), iv);

  const encrypted = String(cookies().get("guestid")?.value);

  if (encrypted === null) {
    return null;
  }

  try {
    let decrypted = decipher.update(Buffer.from(encrypted, "hex"));

    decrypted = Buffer.concat([decrypted, decipher.final()]);

    return decrypted.toString();
  } catch {
    return "Error"
  }
}
