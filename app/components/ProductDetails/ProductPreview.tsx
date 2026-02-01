import React from 'react'


const ProductPreview = ({ product }: { product: any }) => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="relative group">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-[#161512] border border-white/5 shadow-2xl relative">
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url("${product.image_url}")` }}
                    ></div>
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent"></div>
                </div>
                <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-12 text-primary">
                    <div className="flex flex-col items-center gap-2">
                        <span className="material-symbols-outlined text-3xl">verified</span>
                        <span className="text-[10px] uppercase tracking-widest text-white/60 font-noto">جودة فاخرة</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <span className="material-symbols-outlined text-3xl">history</span>
                        <span className="text-[10px] uppercase tracking-widest text-white/60 font-noto">ثبات يدوم</span>
                    </div>
                </div>
            </div>

            <div className="space-y-8">
                <div className="space-y-4">
                    <span className="text-primary tracking-widest text-xs font-bold uppercase font-noto">
                        {product.badge === 'exclusive' ? 'إصدار حصري' : product.badge === 'new' ? 'وصل حديثاً' : 'مجموعة أروما'}
                    </span>
                    <h2 className="text-5xl md:text-6xl font-black leading-tight text-white font-amiri">{product.name}</h2>
                    <div className="flex items-center gap-4">
                        <span className="text-3xl font-bold text-primary font-manrope">{product.price} ر.س</span>
                        <div className="h-6 w-px bg-white/10"></div>
                        <div className="flex text-primary">
                            <span className="material-symbols-outlined star-filled text-2xl"><svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#F4C025"><g><path d="M0 0h24v24H0V0z" fill="none" /><path d="M0 0h24v24H0V0z" fill="none" /></g><g><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z" /></g></svg></span>
                            <span className="material-symbols-outlined star-filled text-2xl"><svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#F4C025"><g><path d="M0 0h24v24H0V0z" fill="none" /><path d="M0 0h24v24H0V0z" fill="none" /></g><g><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z" /></g></svg></span>
                            <span className="material-symbols-outlined star-filled text-2xl"><svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#F4C025"><g><path d="M0 0h24v24H0V0z" fill="none" /><path d="M0 0h24v24H0V0z" fill="none" /></g><g><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z" /></g></svg></span>
                            <span className="material-symbols-outlined star-filled text-2xl"><svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#F4C025"><g><path d="M0 0h24v24H0V0z" fill="none" /><path d="M0 0h24v24H0V0z" fill="none" /></g><g><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z" /></g></svg></span>
                            <span className="material-symbols-outlined star-filled text-2xl"><svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#F4C025"><g><path d="M0 0h24v24H0V0z" fill="none" /><path d="M0 0h24v24H0V0z" fill="none" /></g><g><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z" /></g></svg></span>
                            <span className="mr-2 text-white/40 text-sm font-noto">({product.reviews_count} تقييم)</span>
                        </div>
                    </div>
                </div>

                <p className="text-white/70 text-lg leading-relaxed font-light font-noto">
                    {product.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8 border-y border-white/5">
                    <div className="space-y-3">
                        <div className="flex items-center gap-2 text-primary">
                            <span className="material-symbols-outlined">expand_less</span>
                            <h4 className="text-sm font-bold uppercase tracking-wider font-noto">القمة العطرية</h4>
                        </div>
                        <p className="text-white/50 text-sm font-noto">الزعفران، الهيل والبرغموت</p>
                    </div>
                    <div className="space-y-3">
                        <div className="flex items-center gap-2 text-primary">
                            <span className="material-symbols-outlined">favorite</span>
                            <h4 className="text-sm font-bold uppercase tracking-wider font-noto">قلب العطر</h4>
                        </div>
                        <p className="text-white/50 text-sm font-noto">الورد الطائفي وخشب الصندل</p>
                    </div>
                    <div className="space-y-3">
                        <div className="flex items-center gap-2 text-primary">
                            <span className="material-symbols-outlined">expand_more</span>
                            <h4 className="text-sm font-bold uppercase tracking-wider font-noto">القاعدة العطرية</h4>
                        </div>
                        <p className="text-white/50 text-sm font-noto">العود الهندي الملكي والعنبر</p>
                    </div>
                </div>

                <div className="space-y-4">
                    <a
                        className="flex items-center justify-center gap-3 w-full bg-primary text-background-dark py-5 rounded-xl font-black text-lg hover:scale-[1.02] transition-transform shadow-xl shadow-primary/10 font-noto"
                        href={`https://wa.me/966500000000?text=مرحبا، أريد الاستفسار عن منتج ${product.name}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="material-symbols-outlined text-2xl">chat</span>
                        اسأل على واتساب
                    </a>
                    <p className="text-center text-white/30 text-xs font-noto">الشحن مجاني لجميع مناطق المملكة | الدفع عند الاستلام متاح</p>
                </div>
            </div>
        </div>
    )
}

export default ProductPreview