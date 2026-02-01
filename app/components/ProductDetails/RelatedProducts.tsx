import React from 'react'
import Link from 'next/link'

const RelatedProducts = ({ relatedProducts }: { relatedProducts: any[] }) => {
    return (
        <section className="my-32">
            <div className="flex items-center justify-between mb-12">
                <h3 className="text-3xl font-bold font-amiri text-white">قد يعجبك أيضاً</h3>
                <div className="h-px flex-1 mx-8 bg-white/5"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedProducts.map((p: any) => (
                    <div key={p.id} className="group bg-[#161512] border border-white/5 rounded-2xl p-4 transition-all hover:border-primary/30">
                        <div className="aspect-square rounded-xl overflow-hidden mb-6 bg-[#2a2720] relative">
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                style={{ backgroundImage: `url("${p.image_url}")` }}
                            ></div>
                        </div>
                        <div className="space-y-2">
                            <h4 className="text-xl font-bold font-noto text-white">{p.name}</h4>
                            <p className="text-white/50 text-sm font-noto line-clamp-1">{p.description}</p>
                            <div className="flex items-center justify-between pt-4">
                                <span className="text-primary font-bold font-manrope">{p.price} ر.س</span>
                                <Link href={`/${p.slug}`} className="text-primary hover:underline text-sm font-bold font-noto">التفاصيل</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default RelatedProducts