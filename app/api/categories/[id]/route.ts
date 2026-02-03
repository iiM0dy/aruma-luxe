import { NextResponse } from 'next/server'
import { prisma } from '@/prisma'

export async function DELETE(
    req: Request,
    { params }: { params: { id: string } }
) {
    try {
        const id = parseInt(params.id)

        // Optional: Check if products are linked to this category
        const productsCount = await prisma.product.count({
            where: { categoryId: id }
        })

        if (productsCount > 0) {
            return NextResponse.json({
                error: "cannot delete category with linked products"
            }, { status: 400 })
        }

        await prisma.category.delete({
            where: { id }
        })
        return NextResponse.json({ message: "Category deleted" })
    } catch (error) {
        return NextResponse.json({ error: "Failed to delete category" }, { status: 500 })
    }
}
