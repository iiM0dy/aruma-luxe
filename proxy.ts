import NextAuth from "next-auth"
import authConfig from "./auth.config"
import { NextResponse } from "next/server"

// Use a separate NextAuth instance for the middleware 
// that ONLY includes the Edge-safe config (no Prisma adapter)
const { auth } = NextAuth(authConfig)

export default auth((req) => {
    const isLoggedin = !!req.auth
    const { nextUrl } = req

    const isAdminRoute = nextUrl.pathname.startsWith("/admin")
    const isLoginRoute = nextUrl.pathname === "/login"

    if (isAdminRoute) {
        if (!isLoggedin) {
            return NextResponse.redirect(new URL("/login", nextUrl))
        }

        const role = (req.auth?.user as any)?.role
        if (role !== "ADMIN") {
            return NextResponse.redirect(new URL("/", nextUrl))
        }
    }

    return NextResponse.next()
})

export const config = {
    matcher: ["/admin/:path*", "/login"],
}
