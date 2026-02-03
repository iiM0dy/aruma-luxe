import { prisma } from "@/prisma"
import { NextRequest, NextResponse } from "next/server"
import { auth } from "@/auth"

type Params = Promise<{ id: string }>;

export async function DELETE(
    request: NextRequest,
    context: { params: Params }
) {
    const session = await auth()

    if (!session || (session.user as any).role !== "ADMIN") {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    try {
        const { id: idStr } = await context.params
        const id = parseInt(idStr)
        await prisma.product.delete({
            where: { id }
        })
        return NextResponse.json({ message: "Product deleted" })
    } catch (error) {
        return NextResponse.json({ error: "Failed to delete product" }, { status: 500 })
    }
}

export async function PUT(
    request: NextRequest,
    context: { params: Params }
) {
    const session = await auth()

    if (!session || (session.user as any).role !== "ADMIN") {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    try {
        const { id: idStr } = await context.params
        const id = parseInt(idStr)
        const data = await request.json()

        const status = data.status || "ACTIVE"
        const stock = status === "OUT_OF_STOCK" ? 0 : (parseInt(data.stock) || 0)

        const updateData: any = {
            name: data.name,
            description: data.description,
            price: parseFloat(data.price),
            image: data.image,
            status: status,
            stock: stock,
            topNotes: data.topNotes,
            heartNotes: data.heartNotes,
            baseNotes: data.baseNotes,
            badge: data.badge,
            categoryId: data.categoryId ? parseInt(data.categoryId) : (await prisma.category.findFirst({ where: { name: data.category } }))?.id
        }

        const product = await prisma.product.update({
            where: { id },
            data: updateData
        })

        return NextResponse.json(product)
    } catch (error) {
        console.error("Update product error:", error)
        return NextResponse.json({ error: "Failed to update product" }, { status: 500 })
    }
}

export async function GET(
    request: NextRequest,
    context: { params: Params }
) {
    try {
        const { id: idStr } = await context.params
        const id = parseInt(idStr)
        const product = await prisma.product.findUnique({
            where: { id },
            include: { category: true }
        })

        if (!product) {
            return NextResponse.json({ error: "Product not found" }, { status: 404 })
        }

        return NextResponse.json(product)
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch product" }, { status: 500 })
    }
}
