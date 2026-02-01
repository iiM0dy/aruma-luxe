import Credentials from "next-auth/providers/credentials"
import type { NextAuthConfig } from "next-auth"

// This configuration object will be used in the middleware (Edge Runtime)
// and the main auth.ts (Node.js Runtime).
// We EXCLUDE anything that depends on Node.js modules or Prisma here.

export default {
    providers: [
        Credentials({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text" },
                password: { label: "Password", type: "password" }
            },
            // Note: authorize will be implemented in auth.ts 
            // where we have access to Prisma and bcrypt
            async authorize(credentials) {
                return null // Placeholder, will be overridden in auth.ts
            }
        })
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.role = (user as any).role
            }
            return token
        },
        async session({ session, token }) {
            if (session.user) {
                (session.user as any).role = token.role
            }
            return session
        }
    },
    session: { strategy: "jwt" },
} satisfies NextAuthConfig
