import Image from "next/image";
import Link from "next/link";

interface Product {
    id: number;
    image: string;
    name: string;
    description: string;
    price: number;
    badge?: string;
    categoryName?: string;
    slug: string;
    stock: number;
    status: string;
}

const ProductsSection = ({ products }: { products: Product[] }) => {
    if (products.length === 0) {
        return (
            <div className="text-center text-white/60 py-20">
                لا توجد منتجات في هذه الفئة حالياً.
            </div>
        );
    }

    return (
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product) => {
                const isOutOfStock = product.status === "OUT_OF_STOCK" || product.stock === 0;

                return (
                    <div
                        key={product.id}
                        className={`group bg-card-bg border border-white/5 rounded-2xl p-4 flex flex-col transition-all overflow-hidden ${isOutOfStock ? 'opacity-70 grayscale-[0.5]' : 'hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5'
                            }`}
                    >
                        <Link href={`/${product.slug}`} className="flex-1 flex flex-col relative">
                            {/* Image */}
                            <div className="relative aspect-[3/4] rounded-xl overflow-hidden mb-6 bg-[#2a2720]">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className={`object-cover transition-transform duration-700 ${!isOutOfStock && 'group-hover:scale-110'}`}
                                />

                                {isOutOfStock ? (
                                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-4">
                                        <div className="bg-red-600/90 text-white text-xs font-black uppercase px-4 py-2 rounded-full tracking-widest shadow-xl border border-white/20">
                                            نفذ من المخزون
                                        </div>
                                    </div>
                                ) : product.badge && (
                                    <div className="absolute top-3 left-3 bg-primary text-background-dark text-[10px] font-black uppercase px-2 py-1 rounded tracking-widest">
                                        {product.badge}
                                    </div>
                                )}
                            </div>

                            {/* Content */}
                            <div className="flex-1 space-y-2 mb-6">
                                <h3 className={`text-xl font-bold transition-colors text-white ${!isOutOfStock && 'group-hover:text-primary'}`}>
                                    {product.name}
                                </h3>

                                <p className="text-white/50 text-sm leading-relaxed line-clamp-2">
                                    {product.description}
                                </p>

                                <div className="pt-2 flex items-center justify-between">
                                    <span className="text-primary font-bold text-lg">
                                        {product.price} ر.س
                                    </span>
                                    {isOutOfStock ? (
                                        <span className="text-red-400 text-xs font-bold">غير متوفر حالياً</span>
                                    ) : (
                                        <span className="text-primary/60 text-xs font-bold">
                                            متوفر: {product.stock}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </Link>

                        {/* CTA */}
                        {isOutOfStock ? (
                            <button disabled className="w-full flex items-center justify-center gap-2 border border-white/10 text-white/30 py-3 rounded-xl font-bold text-sm cursor-not-allowed bg-white/5">
                                <span className="material-symbols-outlined text-lg">block</span>
                                غير متوفر
                            </button>
                        ) : (
                            <Link href={`https://wa.me/966500000000?text=مرحبا، أريد الاستفسار عن منتج: ${product.name}`} className="w-full flex items-center justify-center gap-2 border border-primary/60 text-primary py-3 rounded-xl font-bold text-sm hover:bg-primary hover:text-background-dark transition-all">
                                <span className="material-symbols-outlined text-lg">chat</span>
                                اسأل على واتساب
                            </Link>
                        )}
                    </div>
                );
            })}
        </section>
    );
};

export default ProductsSection;
