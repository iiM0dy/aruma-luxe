import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { prisma } from '@/lib/db';
import ProductsSection from '@/app/components/StorePage/ProductsSection';

interface ProductPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
    const { slug } = await params;

    const product = await prisma.product.findUnique({
        where: { slug },
        include: { category: true },
    });

    if (!product) {
        notFound();
    }

    let relatedProducts = await prisma.product.findMany({
        where: {
            categoryId: product.categoryId,
            id: { not: product.id },
        },
        take: 4,
        include: { category: true },
        orderBy: { createdAt: 'desc' },
    });

    // Fallback: If not enough related products, fill with other random/latest products
    if (relatedProducts.length < 4) {
        const existingIds = [product.id, ...relatedProducts.map(p => p.id)];
        const additionalProducts = await prisma.product.findMany({
            where: {
                id: { notIn: existingIds },
            },
            take: 4 - relatedProducts.length,
            include: { category: true },
            orderBy: { createdAt: 'desc' },
        });
        relatedProducts = [...relatedProducts, ...additionalProducts];
    }

    const isOutOfStock = product.status === "OUT_OF_STOCK" || product.stock === 0;

    return (
        <main className={`min-h-screen pt-32 pb-20 px-6 max-w-7xl mx-auto ${isOutOfStock ? 'opacity-90' : ''}`}>
            {/* Breadcrumbs */}
            <nav className="flex items-center gap-2 text-sm text-[#bab29c] mb-8 font-noto">
                <Link href="/" className="hover:text-primary transition-colors">الرئيسية</Link>
                <span className="material-symbols-outlined text-sm transform rotate-180">chevron_right</span>
                <Link href="/store" className="hover:text-primary transition-colors">المتجر</Link>
                <span className="material-symbols-outlined text-sm transform rotate-180">chevron_right</span>
                <span className="text-primary font-bold">{product.name}</span>
            </nav>

            {/* Product Details Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-24">
                {/* Image Gallery (Single Image for now) */}
                <div className="relative aspect-[3/4] lg:aspect-[4/5] bg-[#1a1814] rounded-2xl overflow-hidden border border-white/5 shadow-2xl">
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className={`object-cover ${isOutOfStock ? 'grayscale-[0.5]' : ''}`}
                        priority
                    />
                    {isOutOfStock ? (
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                            <div className="bg-red-600/90 text-white text-base font-black uppercase px-6 py-3 rounded-full tracking-widest shadow-2xl border border-white/20">
                                نفذ من المخزون
                            </div>
                        </div>
                    ) : product.badge && (
                        <div className="absolute top-4 right-4 bg-primary text-background-dark text-xs font-black uppercase px-3 py-1.5 rounded tracking-widest z-10">
                            {product.badge}
                        </div>
                    )}
                </div>

                {/* Info */}
                <div className="flex flex-col justify-center">
                    <div className="mb-2">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-amiri leading-tight">
                            {product.name}
                        </h1>
                        <p className="text-[#bab29c] text-lg leading-relaxed mb-8 font-noto">
                            {product.description}
                        </p>
                    </div>

                    {/* Notes */}
                    {(product.topNotes || product.heartNotes || product.baseNotes) && (
                        <div className="bg-[#1a1814]/50 border border-white/5 rounded-xl p-6 mb-8 backdrop-blur-sm">
                            <h3 className="text-white font-bold mb-4 font-amiri text-xl flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">spa</span>
                                التكوين العطري
                            </h3>
                            <div className="space-y-3 font-noto">
                                {product.topNotes && (
                                    <div className="flex items-start gap-3">
                                        <span className="text-[#bab29c] min-w-[80px]">القمة:</span>
                                        <span className="text-white font-medium">{product.topNotes}</span>
                                    </div>
                                )}
                                {product.heartNotes && (
                                    <div className="flex items-start gap-3">
                                        <span className="text-[#bab29c] min-w-[80px]">القلب:</span>
                                        <span className="text-white font-medium">{product.heartNotes}</span>
                                    </div>
                                )}
                                {product.baseNotes && (
                                    <div className="flex items-start gap-3">
                                        <span className="text-[#bab29c] min-w-[80px]">القاعدة:</span>
                                        <span className="text-white font-medium">{product.baseNotes}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    <div className="flex flex-col sm:flex-row items-center gap-6 mt-auto">
                        <div className="text-3xl font-bold text-primary font-manrope">
                            {product.price} ر.س
                        </div>
                        {isOutOfStock ? (
                            <button
                                disabled
                                className="flex-1 w-full bg-white/5 border border-white/10 text-white/30 py-4 px-8 rounded-xl font-bold text-lg flex items-center justify-center gap-3 cursor-not-allowed font-noto"
                            >
                                <span className="material-symbols-outlined">block</span>
                                غير متوفر حالياً
                            </button>
                        ) : (
                            <Link
                                href={`https://wa.me/966500000000?text=أهلاً، أود طلب عطر: ${product.name}`}
                                className="flex-1 w-full bg-primary text-background-dark py-4 px-8 rounded-xl font-bold text-lg flex items-center justify-center gap-3 hover:scale-[1.02] transition-transform shadow-[0_4px_20px_rgba(244,192,37,0.2)] font-noto"
                            >
                                <span className="material-symbols-outlined">shopping_cart</span>
                                اطلب الآن عبر واتساب
                            </Link>
                        )}
                    </div>

                    <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-[#bab29c]/60 font-noto justify-center sm:justify-center">
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-lg">local_shipping</span>
                            شحن سريع
                        </div>
                        <div className="w-1 h-1 bg-[#bab29c]/30 rounded-full"></div>
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-lg">verified_user</span>
                            ضمان الجودة
                        </div>
                        <div className="w-1 h-1 bg-[#bab29c]/30 rounded-full"></div>
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-lg">secure</span>
                            دفع آمن
                        </div>
                    </div>
                </div>
            </div>

            {/* Related Products */}
            {relatedProducts.length > 0 && (
                <section>
                    <div className="flex items-center justify-between mb-8 text-white">
                        <h2 className="text-2xl md:text-3xl font-bold font-amiri flex items-center gap-2">
                            <span className="w-8 h-1 bg-primary rounded-full inline-block"></span>
                            منتجات قد تعجبك
                        </h2>
                        <Link href="/store" className="text-primary hover:text-white transition-colors text-sm font-bold flex items-center gap-1">
                            عرض المزيد
                            <span className="material-symbols-outlined text-lg transform rotate-180">arrow_right_alt</span>
                        </Link>
                    </div>

                    <ProductsSection
                        products={relatedProducts.map((p) => ({
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
                </section>
            )}
        </main>
    );
}
