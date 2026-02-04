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
            <nav className="flex items-center gap-3 text-sm text-gray-500 mb-12 font-amiri tracking-wide">
                <Link href="/" className="hover:text-primary transition-colors">الرئيسية</Link>
                <span className="material-symbols-outlined text-xs! opacity-30 transform rotate-180">chevron_right</span>
                <Link href="/store" className="hover:text-primary transition-colors">المتجر</Link>
                <span className="material-symbols-outlined text-xs! opacity-30 transform rotate-180">chevron_right</span>
                <span className="text-primary font-bold">{product.name}</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-32">
                {/* Image Gallery */}
                <div className="relative aspect-4/5 bg-[#12110D] rounded-4xl overflow-hidden border border-white/5 shadow-2xl group">
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className={`object-cover transition-transform duration-3000 group-hover:scale-105 ${isOutOfStock ? 'grayscale-[0.5]' : ''}`}
                        priority
                    />

                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 translate-y-full group-hover:translate-y-0"></div>

                    {isOutOfStock ? (
                        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center">
                            <div className="bg-red-600/90 text-white text-base font-black uppercase px-8 py-4 rounded-full tracking-[0.2em] shadow-2xl border border-white/20">
                                نفذ من المخزون
                            </div>
                        </div>
                    ) : product.badge && (
                        <div className="absolute top-6 left-6 bg-primary text-background-dark text-[10px] font-black uppercase px-4 py-2 rounded-xl tracking-widest z-10 shadow-xl">
                            {product.badge}
                        </div>
                    )}
                </div>

                {/* Product Info */}
                <div className="flex flex-col justify-center">
                    <div className="mb-10">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-primary/60 text-xs font-bold uppercase tracking-widest">{product.category?.name}</span>
                            <div className="w-8 h-px bg-primary/20"></div>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 font-amiri leading-tight drop-shadow-sm">
                            {product.name}
                        </h1>
                        <p className="text-gray-400 text-xl leading-relaxed font-amiri font-light border-r-2 border-primary/10 pr-6">
                            {product.description}
                        </p>
                    </div>

                    {/* Notes Composition */}
                    {(product.topNotes || product.heartNotes || product.baseNotes) && (
                        <div className="bg-white/2 border border-white/5 rounded-4xl p-8 mb-10 backdrop-blur-md relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>

                            <h3 className="text-white font-bold mb-6 font-amiri text-2xl flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary">auto_awesome</span>
                                التكوين العطري
                            </h3>
                            <div className="space-y-4 font-amiri">
                                {product.topNotes && (
                                    <div className="flex flex-col gap-1">
                                        <span className="text-primary/60 text-xs font-bold uppercase tracking-wider">القمة العطرية</span>
                                        <span className="text-white text-lg font-medium">{product.topNotes}</span>
                                    </div>
                                )}
                                {product.heartNotes && (
                                    <div className="flex flex-col gap-1">
                                        <span className="text-primary/60 text-xs font-bold uppercase tracking-wider">القلب العطري</span>
                                        <span className="text-white text-lg font-medium">{product.heartNotes}</span>
                                    </div>
                                )}
                                {product.baseNotes && (
                                    <div className="flex flex-col gap-1">
                                        <span className="text-primary/60 text-xs font-bold uppercase tracking-wider">القاعدة العطرية</span>
                                        <span className="text-white text-lg font-medium">{product.baseNotes}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    <div className="flex flex-col sm:flex-row items-center gap-8 mt-auto">
                        <div className="flex flex-col items-center sm:items-start">
                            <span className="text-primary/40 text-[10px] font-bold uppercase tracking-widest mb-1">السعر</span>
                            <div className="text-4xl font-bold text-primary font-manrope">
                                {product.price} <span className="text-sm">ر.س</span>
                            </div>
                        </div>

                        {isOutOfStock ? (
                            <button
                                disabled
                                className="flex-1 w-full bg-white/5 border border-white/10 text-white/30 py-5 px-10 rounded-2xl font-bold text-xl flex items-center justify-center gap-4 cursor-not-allowed font-amiri shadow-inner"
                            >
                                <span className="material-symbols-outlined">block</span>
                                غير متوفر حالياً
                            </button>
                        ) : (
                            <Link
                                href={`https://wa.me/966500000000?text=أهلاً، أود طلب عطر: ${product.name}`}
                                className="flex-1 w-full bg-primary text-background-dark py-5 px-10 rounded-2xl font-black text-xl flex items-center justify-center gap-4 hover:scale-[1.02] transition-all hover:shadow-[0_10px_40px_rgba(244,192,37,0.3)] font-amiri active:scale-95"
                            >
                                <span className="material-symbols-outlined text-3xl">chat</span>
                                اطلب الآن عبر الواتساب
                            </Link>
                        )}
                    </div>
                </div>
            </div>

            {/* Related Products Section */}
            {relatedProducts.length > 0 && (
                <section className="pt-20 border-t border-white/5">
                    <div className="flex flex-col sm:flex-row items-center justify-between mb-12 gap-6">
                        <div className="flex flex-col items-center sm:items-start text-center sm:text-right">
                            <div className="w-12 h-1 bg-primary mb-4 rounded-full"></div>
                            <h2 className="text-3xl md:text-5xl font-bold text-white font-amiri">
                                منتجات قد <span className="text-primary italic">تعجبك</span>
                            </h2>
                        </div>
                        <Link href="/store" className="group text-primary hover:text-white transition-all text-lg font-bold flex items-center gap-3 font-amiri">
                            عرض المتجر الكامل
                            <span className="material-symbols-outlined group-hover:translate-x-[-8px] transition-transform">arrow_back</span>
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
