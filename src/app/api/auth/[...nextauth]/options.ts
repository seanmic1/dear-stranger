import prisma from "@/lib/prisma";
import { log } from "console";
import type { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";

const options: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      // check if user email exists in db
      
      const myUser = await prisma.user.findUnique({
        where: {
          email: String(user.email),
        },
      })

      // if user exists
      if (myUser !== null) {
        return true
      // if user doesnt exist
      } else {
        // Return false to display a default error message
        return "/signup"
        // Or you can return a URL to redirect to:
        // return '/unauthorized'
      }
    },
  },
};

export default options;
