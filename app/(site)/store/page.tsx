import { Suspense } from "react";
import BannerSection from "@/app/components/StorePage/BannerSection";
import ProductsSection from "@/app/components/StorePage/ProductsSection";
import CategoriesFilter from "@/app/components/StorePage/CategoriesFilter";
import { prisma } from "@/lib/db";

interface StorePageProps {
    searchParams: Promise<{
        category?: string;
    }>;
}

const ProductsList = async ({ categoryId }: { categoryId?: number }) => {
    const products = await prisma.product.findMany({
        where: categoryId ? { categoryId: categoryId } : undefined,
        orderBy: { createdAt: "desc" },
        include: {
            category: true,
        },
    });

    return (
        <ProductsSection
            products={products.map((p) => ({
                id: p.id,
                image: p.image,
                name: p.name,
                description: p.description,
                price: p.price,
                badge: p.badge ?? undefined,
                categoryName: p.category?.name,
                slug: p.slug,
                stock: p.stock,
                status: p.status,
            }))}
        />
    );
};

const StorePage = async ({ searchParams }: StorePageProps) => {
    const params = await searchParams;
    const activeCategoryId = params.category
        ? Number(params.category)
        : undefined;

    const categories = await prisma.category.findMany({
        orderBy: { name: "asc" },
    });

    return (
        <div className="max-w-7xl mx-auto px-6 py-12">
            <BannerSection />

            <CategoriesFilter
                categories={categories}
                activeCategoryId={activeCategoryId}
            />

            <Suspense key={activeCategoryId} fallback={<ProductsSection products={[]} isLoading={true} />}>
                <ProductsList categoryId={activeCategoryId} />
            </Suspense>
        </div>
    );
};

export default StorePage;
