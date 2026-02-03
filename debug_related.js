const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function checkRelatedProducts() {
    try {
        // Get all products
        const products = await prisma.product.findMany({
            include: { category: true }
        });

        console.log(`Total products: ${products.length}`);

        if (products.length === 0) {
            console.log("No products.");
            return;
        }

        // Pick a sample product (e.g., the first one)
        const sampleProduct = products[0];
        console.log(`Checking related products for: ${sampleProduct.name} (ID: ${sampleProduct.id}, Slug: ${sampleProduct.slug}, CategoryID: ${sampleProduct.categoryId})`);

        const related = await prisma.product.findMany({
            where: {
                categoryId: sampleProduct.categoryId,
                id: { not: sampleProduct.id },
            },
        });

        console.log(`Found ${related.length} related products.`);
        related.forEach(p => console.log(` - ${p.name} (ID: ${p.id})`));

    } catch (error) {
        console.error(error);
    } finally {
        await prisma.$disconnect();
    }
}

checkRelatedProducts();
