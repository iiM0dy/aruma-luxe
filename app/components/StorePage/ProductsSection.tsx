import React from 'react'

const ProductsSection = ({ products }: { products: any }) => {
    return (
        <section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>

            {products.map((product: any) => (
                <div key={product.id} className="group bg-card-bg border border-white/5 rounded-2xl p-4 flex flex-col transition-all hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5">
                    <div className="relative aspect-[3/4] rounded-xl overflow-hidden mb-6 bg-[#2a2720]">
                        <img src={product.image} className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 w-full h-full object-cover" data-alt="Minimalist luxury glass perfume bottle" />
                        <div className="absolute top-3 left-3 bg-primary text-background-dark text-[10px] font-black uppercase px-2 py-1 rounded tracking-widest">حصري</div>
                    </div>
                    <div className="flex-1 space-y-2 mb-6">
                        <h3 className="text-xl font-bold group-hover:text-primary transition-colors text-white">{product.name}</h3>
                        <p className="text-white/50 text-sm leading-relaxed line-clamp-2">{product.description}</p>
                        <div className="pt-2 flex items-center justify-between">
                            <span className="text-primary font-bold text-lg">{product.price} ر.س</span>
                        </div>
                    </div>
                    <button className="w-full flex items-center justify-center gap-2 border border-primary/60 text-primary py-3 rounded-xl font-bold text-sm hover:bg-primary hover:text-background-dark transition-all">
                        <span className="material-symbols-outlined text-lg">chat</span>
                        اسأل على واتساب
                    </button>
                </div>
            ))}
        </section>
    )
}

export default ProductsSection