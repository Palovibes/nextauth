// pages/api/auth/[...nextauth].js
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { sql } from '@vercel/postgres';

export default NextAuth({
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const { rows } = await sql`SELECT * FROM users WHERE email = ${credentials.email}`;
        const user = rows[0];

        if (user && credentials.password === user.password) {
          return { email: user.email, roleID: user.roleID };
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.roleID = user.roleID;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.roleID = token.roleID;
      return session;
    },
  },
});
