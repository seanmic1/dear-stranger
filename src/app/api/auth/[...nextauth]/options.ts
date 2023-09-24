import prisma from "@/lib/prisma";
import { url } from "inspector";
import type { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google"

const options: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    
  ],
  callbacks: {
    session: ({session,token}) => {
      return session
    },
     async jwt({token, account, profile}){
      if ( profile !== undefined && await prisma.user.findUnique({where: {email: profile?.email}}) === null){
        await prisma.user.create({
          data: {
            email: String(profile?.email),
            name: String(profile?.name),
            country: "NULL"
          }
        })
        console.log("user created")
      }
      return token
     },
     async redirect({ url, baseUrl }) {
      // Allows relative callback URLs
      // if (url.startsWith("/")) return `${baseUrl}`
      // Allows callback URLs on the same origin
      // else if (new URL(url).origin === baseUrl) return url
      return baseUrl
    }
  }
};

export default options; 
