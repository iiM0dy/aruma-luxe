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

const ProductsSection = ({ products, isLoading }: { products: Product[], isLoading?: boolean }) => {
    if (isLoading) {
        return (
            <div className="flex flex-col items-center justify-center py-32 text-center group">
                <p className="text-xl text-primary font-amiri tracking-wide font-bold animate-pulse">
                    جاري تحميل المنتجات...
                </p>
            </div>
        );
    }

    if (products.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center py-32 text-center group">
                <div className="size-24 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <span className="material-symbols-outlined cursor-default select-none text-4xl text-white/20 group-hover:text-primary/40 transition-colors">production_quantity_limits</span>
                </div>
                <p className="text-xl text-white/40 font-amiri tracking-wide font-light max-w-xs">
                    عذراً، لا توجد منتجات في هذه الفئة حالياً. يرجى مراجعة فئات أخرى.
                </p>
            </div>
        );
    }

    return (
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            {products.map((product) => {
                const isOutOfStock = product.status === "OUT_OF_STOCK" || product.stock === 0;

                return (
                    <div
                        key={product.id}
                        className={`group relative flex flex-col transition-all duration-300 ${isOutOfStock ? 'opacity-70' : ''
                            }`}
                    >
                        <Link href={`/${product.slug}`} className="relative block aspect-4/5 rounded-4xl overflow-hidden mb-6 border border-white/5 bg-[#151412] shadow-md group-hover:border-primary/20 transition-all duration-300">
                            <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                className="object-cover"
                            />

                            {/* Badge */}
                            {isOutOfStock ? (
                                <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px] flex items-center justify-center p-6">
                                    <div className="bg-white/10 backdrop-blur-md text-white text-[10px] font-bold uppercase px-6 py-2.5 rounded-full tracking-[0.2em] border border-white/20">
                                        نفذ من المخزون
                                    </div>
                                </div>
                            ) : product.badge && (
                                <div className="absolute top-4 left-4 bg-primary text-background-dark text-[10px] font-black uppercase px-3 py-1.5 rounded-lg tracking-widest shadow-lg">
                                    {product.badge}
                                </div>
                            )}
                        </Link>

                        {/* Content */}
                        <div className="flex flex-col gap-3 px-2">
                            <div className="flex justify-between items-start gap-4">
                                <h3 className={`text-xl font-bold font-amiri transition-colors text-white flex-1 leading-snug ${!isOutOfStock && 'group-hover:text-primary'}`}>
                                    {product.name}
                                </h3>
                                <span className="text-primary font-bold text-lg whitespace-nowrap">
                                    {product.price} ر.س
                                </span>
                            </div>

                            <p className="text-white/40 text-[13px] leading-relaxed line-clamp-2 font-light">
                                {product.description}
                            </p>

                            <div className="flex items-center justify-between pt-4 mt-2 border-t border-white/5">
                                <Link
                                    href={`https://wa.me/966500000000?text=مرحبا، أريد الاستفسار عن منتج: ${product.name}`}
                                    className={`flex items-center gap-2 text-sm font-bold transition-all ${isOutOfStock
                                        ? "text-white/20 cursor-not-allowed pointer-events-none"
                                        : "text-primary hover:text-white"
                                        }`}
                                >
                                    <span className="material-symbols-outlined text-[18px]">chat</span>
                                    <span>اسأل عبر الواتساب</span>
                                </Link>

                                {isOutOfStock ? (
                                    <span className="text-red-900/40 text-[10px] uppercase font-bold tracking-widest">مباع</span>
                                ) : (
                                    <div className="flex items-center gap-1.5">
                                        <div className="size-1.5 rounded-full bg-green-500"></div>
                                        <span className="text-white/40 text-[11px] font-bold font-noto uppercase tracking-wider">
                                            متوفر: {product.stock}
                                        </span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                );
            })}
        </section>
    );
};

export default ProductsSection;
