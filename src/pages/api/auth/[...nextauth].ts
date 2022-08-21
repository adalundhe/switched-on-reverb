import NextAuth, { type NextAuthOptions } from "next-auth";
import type { NextApiRequest, NextApiResponse } from "next"

// Prisma adapter for NextAuth, optional and can be removed
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "../../../server/db/client";
import CredentialsProvider from "next-auth/providers/credentials";
import EmailProvider from 'next-auth/providers/email'
import GoogleProvider from "next-auth/providers/google";
import DiscordProvider from "next-auth/providers/discord";
import FacebookProvider from "next-auth/providers/facebook";
import { env } from "../../../env/server.mjs";
import bcrypt from 'bcrypt'

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  adapter: PrismaAdapter(prisma),
  providers: [
    
  ],
};

export default async function auth(req: NextApiRequest, res: NextApiResponse) {

  // const isDefaultSigninPage = req.method === "GET" && req.query.nextauth?.includes("signin")

  // // Will hide the `GoogleProvider` when you visit `/api/auth/signin`
  // if (isDefaultSigninPage) authOptions.providers.pop()

  return await NextAuth(req, res, authOptions)
}

// export default NextAuth(authOptions);
