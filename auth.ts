import NextAuth from "next-auth"
import { prisma } from "@/prisma"
import authConfig from "./auth.config"
import bcrypt from "bcryptjs"
import Credentials from "next-auth/providers/credentials"

export const { handlers, auth, signIn, signOut } = NextAuth({
    session: { strategy: "jwt" },
    ...authConfig,
    providers: [
        Credentials({
            async authorize(credentials) {
                if (!credentials?.username || !credentials?.password) return null

                const user = await prisma.user.findUnique({
                    where: { username: credentials.username as string }
                })

                if (!user || !user.password) return null

                const isValid = await bcrypt.compare(credentials.password as string, user.password)

                if (!isValid) return null

                return {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    role: user.role,
                }
            }
        }),
        ...authConfig.providers.filter(p => (p as any).id !== "credentials")
    ]
})