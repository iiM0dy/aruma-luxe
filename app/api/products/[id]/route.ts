import { prisma } from "@/prisma"
import { NextResponse } from "next/server"
import { auth } from "@/auth"

type Params = Promise<{ id: string }>;

export async function DELETE(
    req: Request,
    props: { params: Params }
) {
    const session = await auth()

    if (!session || (session.user as any).role !== "ADMIN") {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    try {
        const params = await props.params;
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
    props: { params: Params }
) {
    const session = await auth()

    if (!session || (session.user as any).role !== "ADMIN") {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    try {
        const params = await props.params;
        const id = parseInt(params.id)
        const data = await req.json()

        const status = data.status || "ACTIVE"
        const stock = status === "OUT_OF_STOCK" ? 0 : (parseInt(data.stock) || 0)

        // Prepare update data. Note: category string is filtered out as it causes Prisma errors (relation mismatch).
        // To update category, we would need to look up categoryId or change logic.
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
    req: Request,
    props: { params: Params }
) {
    try {
        const params = await props.params;
        const id = parseInt(params.id)
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
