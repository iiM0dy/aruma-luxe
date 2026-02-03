import BannerSection from "@/app/components/StorePage/BannerSection";
import ProductsSection from "@/app/components/StorePage/ProductsSection";
import CategoriesFilter from "@/app/components/StorePage/CategoriesFilter";
import { prisma } from "@/lib/db";

interface StorePageProps {
    searchParams: Promise<{
        category?: string;
    }>;
}

const StorePage = async ({ searchParams }: StorePageProps) => {
    const params = await searchParams; // ✅ REQUIRED IN NEXT 15
    const activeCategoryId = params.category
        ? Number(params.category)
        : undefined;

    const categories = await prisma.category.findMany({
        orderBy: { name: "asc" },
    });

    const products = await prisma.product.findMany({
        where: activeCategoryId ? { categoryId: activeCategoryId } : undefined,
        orderBy: { createdAt: "desc" },
        include: {
            category: true,
        },
    });

    return (
        <div className="max-w-7xl mx-auto px-6 py-12">
            <BannerSection />

            {/* CLIENT FILTER (no reload) */}
            <CategoriesFilter
                categories={categories}
                activeCategoryId={activeCategoryId}
            />

            <ProductsSection
                products={products.map((p) => ({
                    id: p.id,
                    image: p.image,
                    name: p.name,
                    description: p.description,
                    price: p.price,
                    badge: p.badge ?? undefined,
                    categoryName: p.category?.name,
                }))}
            />
        </div>
    );
};

export default StorePage;
