import { prisma } from "@/prisma"
import { NextResponse } from "next/server"
import { auth } from "@/auth"

export async function DELETE(
    req: Request,
    { params }: { params: { id: string } }
) {
    const session = await auth()

    if (!session || (session.user as any).role !== "ADMIN") {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    try {
        const id = parseInt(params.id)
        await prisma.product.delete({
            where: { id }
        })
        return NextResponse.json({ message: "Product deleted" })
    } catch (error) {
        return NextResponse.json({ error: "Failed to delete product" }, { status: 500 })
    }
}

export async function PUT(
    req: Request,
    { params }: { params: { id: string } }
) {
    const session = await auth()

    if (!session || (session.user as any).role !== "ADMIN") {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    try {
        const id = parseInt(params.id)
        const data = await req.json()

        const product = await prisma.product.update({
            where: { id },
            data: {
                nameAr: data.nameAr,
                nameEn: data.nameEn,
                descriptionAr: data.descriptionAr,
                descriptionEn: data.descriptionEn,
                price: parseFloat(data.price),
                image: data.image,
                images: data.images,
                category: data.category,
                sku: data.sku,
                status: data.status,
                stock: parseInt(data.stock),
                topNotes: data.topNotes,
                heartNotes: data.heartNotes,
                baseNotes: data.baseNotes,
            }
        })

        return NextResponse.json(product)
    } catch (error) {
        return NextResponse.json({ error: "Failed to update product" }, { status: 500 })
    }
}
