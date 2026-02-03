import { NextResponse } from 'next/server'
import { prisma } from '@/prisma'

export async function GET() {
    try {
        const categories = await prisma.category.findMany({
            orderBy: { createdAt: 'desc' }
        })
        return NextResponse.json(categories)
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch categories" }, { status: 500 })
    }
}

export async function POST(req: Request) {
    try {
        const data = await req.json()
        if (!data.name) {
            return NextResponse.json({ error: "Category name is required" }, { status: 400 })
        }

        const category = await prisma.category.create({
            data: {
                name: data.name
            }
        })
        return NextResponse.json(category)
    } catch (error) {
        return NextResponse.json({ error: "Failed to create category" }, { status: 500 })
    }
}
