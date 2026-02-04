import React from 'react'
import Image from 'next/image'

const MainSection = () => {
    return (
        <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[90vh]">
            {/* Content Section */}
            <div className="bg-[#0f0e0c] px-8 md:px-20 lg:px-24 flex flex-col justify-center py-24 order-2 lg:order-1 relative overflow-hidden">
                <div className="max-w-xl relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="h-px w-8 bg-primary"></div>
                        <span className="text-primary tracking-[0.3em] text-sm uppercase font-bold font-noto">إرثنا العطري</span>
                    </div>

                    <h2 className="text-5xl md:text-7xl text-white mb-10 leading-tight font-amiri drop-shadow-lg">
                        قصة <span className="text-primary italic">Aroma Luxe</span>
                    </h2>

                    <div className="space-y-8 text-white/70 text-xl leading-relaxed font-amiri font-light">
                        <p className="border-r-2 border-primary/20 pr-6">
                            بدأت رحلتنا من قلب الصحراء، حيث تلتقي التقاليد العريقة بفن صناعة العطور الحديث. في Aroma Luxe، نؤمن بأن العطر ليس مجرد رائحة، بل هو هوية وتعبير عن الروح.
                        </p>
                        <p>
                            تخصصنا في استخلاص أثمن المكونات الشرقية، من العود الملكي النادر إلى مسك الغزال الصافي والورد الطائفي، لنقدم لكم تجربة عطرية لا تُنسى تتميز بالثبات والفوحان الفريد.
                        </p>
                        <p>
                            كل زجاجة ننتجها هي ثمرة سنوات من البحث والشغف، مصممة لأولئك الذين يقدرون التميز ويبحثون عن لمسة من الفخامة في حياتهم اليومية.
                        </p>
                    </div>

                    <div className="mt-16 flex items-center gap-8">
                        <div className="flex flex-col">
                            <span className="text-primary text-4xl font-black font-amiri tracking-tighter">1995</span>
                            <span className="text-white/40 text-xs font-noto uppercase tracking-widest">التأسيس</span>
                        </div>
                        <div className="h-10 w-px bg-white/10"></div>
                        <div className="flex flex-col">
                            <span className="text-primary text-4xl font-black font-amiri tracking-tighter">+250</span>
                            <span className="text-white/40 text-xs font-noto uppercase tracking-widest">منتج حصري</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Image Section */}
            <div className="relative h-[60vh] lg:min-h-full overflow-hidden order-1 lg:order-2 group">
                <Image
                    src="/images/hero-bg2.png"
                    alt="Aroma Luxe Exclusive Collection"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                />

                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>

                {/* Quote Box */}
                <div className="absolute bottom-10 inset-x-10 p-10 bg-black/60 border border-white/5 rounded-2xl">
                    <span className="material-symbols-outlined cursor-default select-none text-primary text-4xl mb-4 opacity-50">format_quote</span>
                    <p className="text-2xl md:text-3xl text-white italic leading-relaxed text-center font-amiri">
                        "العطر هو المفتاح الذي يفتح أبواب الذاكرة، وهو الحارس الأمين لكل لحظاتنا الجميلة"
                    </p>
                </div>
            </div>
        </section>
    )
}

export default MainSection