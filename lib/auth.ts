import type { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET ?? "dev-instay-secret",
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // This is where you would validate credentials against your database
        // For demo purposes, we'll use hardcoded values
        if (credentials?.email === "admin@instay.com" && credentials?.password === "admin123") {
          return {
            id: "1",
            email: "admin@instay.com",
            name: "Admin User",
            role: "admin",
          }
        }
        if (credentials?.email === "investor@instay.com" && credentials?.password === "investor123") {
          return {
            id: "2",
            email: "investor@instay.com",
            name: "Investor User",
            role: "investor",
          }
        }
        return null
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role
      }
      return token
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.sub!
        session.user.role = token.role as string
      }
      return session
    },
  },
  pages: {
    signIn: "/auth/login",
  },
  session: {
    strategy: "jwt",
  },
}
