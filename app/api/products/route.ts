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

        // Generate slug from English name if not provided
        const slug = data.slug || data.nameEn.toLowerCase().replace(/ /g, '-') + '-' + Date.now()

        const product = await prisma.product.create({
            data: {
                nameAr: data.nameAr,
                nameEn: data.nameEn,
                descriptionAr: data.descriptionAr,
                descriptionEn: data.descriptionEn,
                price: parseFloat(data.price),
                image: data.image,
                images: data.images || [],
                categoryId: data.categoryId ? parseInt(data.categoryId) : undefined,
                slug: slug,
                sku: data.sku || `AL-${Math.floor(Math.random() * 10000)}`,
                status: data.status || "ACTIVE",
                stock: parseInt(data.stock) || 0,
                topNotes: data.topNotes,
                heartNotes: data.heartNotes,
                baseNotes: data.baseNotes,
            }
        })

        return NextResponse.json(product)
    } catch (error) {
        console.error("Create product error:", error)
        return NextResponse.json({ error: "Failed to create product" }, { status: 500 })
    }
}
