import prisma from "@/lib/prisma";
import type {
  NextAuthOptions,
  Session,
  SessionStrategy,
  User,
} from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github"

import {
  uniqueNamesGenerator,
  Config,
  adjectives,
  colors,
  animals,
} from "unique-names-generator";
import { randomUUID } from "crypto";
import { JWT } from "next-auth/jwt";
import { AdapterUser } from "next-auth/adapters";
import { CustomSession } from "@/lib/CustomSession";
import { cookies } from "next/headers";

const options: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    CredentialsProvider({
      name: "Guest Account",
      credentials: {},
      async authorize(credentials, req) {
        cookies().set("acknowledgeAnon", "false")
        return createAnonymousUser();
      },
    }),
  ],
  callbacks: {
    async session({
      session,
      token,
      user,
    }: {
      session: CustomSession;
      token: JWT;
      user: AdapterUser;
    }): Promise<Session> {
      // don't make the token (JWT) contents available to the client session (JWT), but flag that they're server-side
      if (token && session.user !== undefined) {
        session.user.id = String(token.id)
      }
      return session;
    },
    async jwt({ token, account, profile }) {

      // if no token.id
      if (token.id === undefined) {
        
        // find user
        const user = await prisma.user.findUnique({where:{email:String(token.email)}})

        // if no user
        if (user === null){
          // create new user account
          const newUser = await prisma.user.create({
            data: {
              email: String(token.email),
              name: String(token.name),
            },
          });
          // set token id and return token
          token.id = newUser.id;
          return token;
        }
        else {
          // if user is found, set token id and return
          token.id = user.id;
          return token;
        }
      }

      // if token.id exists, user is already created/logged in, return
      return token;
    },
  },
  session: {
    // use default, an encrypted JWT (JWE) store in the session cookie
    strategy: "jwt" as SessionStrategy,
  },
  pages: {
    signIn: "/api/setEmailCookie",
    signOut: "/signout"
  },
};

export default options satisfies NextAuthOptions;

// Helper function
const createAnonymousUser = async (): Promise<User> => {
  // generate a random name and email for this anonymous user
  const customConfig: Config = {
    dictionaries: [adjectives, colors, animals],
    separator: "-",
    length: 3,
    style: "capital",
  };
  // handle is simple-red-aardvark
  const unique_handle: string = uniqueNamesGenerator(customConfig).replaceAll(
    " ",
    ""
  );
  // real name is Red Aardvark
  const unique_realname: string = unique_handle.split("-").slice(1).join(" ");
  const unique_uuid: string = randomUUID();

  return {
    id: unique_uuid,
    email: `${unique_handle.toLowerCase()}@example.com`,
    name: unique_realname,
  };
};
