import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

import { connect_to_db } from "@/utils/database";

import User from "@/models/user";

// Pour la connexion avec Google
const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        })
    ],
    secret: process.env.NEXTAUTH_SECRET!,
    debug: true,
})

export { handler as GET, handler as POST }