import Image from "next/image";
import Link from "next/link";

interface Product {
    id: number;
    image: string;
    name: string;
    description: string;
    price: number;
    badge?: string;
}

const ProductsSection = ({ products }: { products: Product[] }) => {
    if (products.length === 0) {
        return (
            <div className="text-center text-white/60 py-20">
                No products found in this category.
            </div>
        );
    }

    return (
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product) => (
                <div
                    key={product.id}
                    className="group bg-card-bg border border-white/5 rounded-2xl p-4 flex flex-col transition-all hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5"
                >
                    {/* Image */}
                    <div className="relative aspect-[3/4] rounded-xl overflow-hidden mb-6 bg-[#2a2720]">
                        <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />

                        {product.badge && (
                            <div className="absolute top-3 left-3 bg-primary text-background-dark text-[10px] font-black uppercase px-2 py-1 rounded tracking-widest">
                                {product.badge}
                            </div>
                        )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-2 mb-6">
                        <h3 className="text-xl font-bold group-hover:text-primary transition-colors text-white">
                            {product.name}
                        </h3>

                        <p className="text-white/50 text-sm leading-relaxed line-clamp-2">
                            {product.description}
                        </p>

                        <div className="pt-2 flex items-center justify-between">
                            <span className="text-primary font-bold text-lg">
                                {product.price} ر.س
                            </span>
                        </div>
                    </div>

                    {/* CTA */}
                    <Link href={`https://wa.me/966500000000?text=مرحبا، أريد الاستفسار عن منتج: ${product.name}`} className="w-full flex items-center justify-center gap-2 border border-primary/60 text-primary py-3 rounded-xl font-bold text-sm hover:bg-primary hover:text-background-dark transition-all">
                        <span className="material-symbols-outlined text-lg">chat</span>
                        اسأل على واتساب
                    </Link>
                </div>
            ))}
        </section>
    );
};

export default ProductsSection;
