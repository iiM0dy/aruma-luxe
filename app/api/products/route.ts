import { prisma } from "@/prisma"
import { NextResponse } from "next/server"
import { auth } from "@/auth"

export async function GET() {
    try {
        const products = await prisma.product.findMany({
            include: { category: true },
            orderBy: { createdAt: 'desc' }
        })
        return NextResponse.json(products)
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 })
    }
}

export async function POST(req: Request) {
    const session = await auth()

    if (!session || (session.user as any).role !== "ADMIN") {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    try {
        const data = await req.json()

        // Generate slug from name if not provided
        const slug = data.slug || data.name.toLowerCase().replace(/ /g, '-') + '-' + Date.now()

        const product = await prisma.product.create({
            data: {
                name: data.name,
                description: data.description,
                price: parseFloat(data.price),
                image: data.image,
                categoryId: data.categoryId ? parseInt(data.categoryId) : (await prisma.category.findFirst({ where: { name: data.category } }))?.id,
                slug: slug,
                status: data.status || "ACTIVE",
                stock: parseInt(data.stock) || 0,
                topNotes: data.topNotes,
                heartNotes: data.heartNotes,
                baseNotes: data.baseNotes,
                badge: data.badge,
                numReviews: 0,
            }
        })

        return NextResponse.json(product)
    } catch (error) {
        console.error("Create product error:", error)
        return NextResponse.json({ error: "Failed to create product" }, { status: 500 })
    }
}
