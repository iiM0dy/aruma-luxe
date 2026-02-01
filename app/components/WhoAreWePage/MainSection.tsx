import React from 'react'
import Image from 'next/image'

const MainSection = () => {
    return (
        <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
            {/* Content Section */}
            <div className="bg-[#1A1A1A] px-8 md:px-20 lg:px-24 flex flex-col justify-center py-24 order-1">
                <div className="max-w-xl">
                    <span className="text-primary tracking-[0.2em] text-sm uppercase mb-4 block font-medium font-noto">إرثنا العطري</span>
                    <h2 className="text-4xl md:text-6xl serif-text text-primary mb-8 leading-tight font-amiri">قصة Aroma Luxe</h2>

                    <div className="space-y-6 text-white/80 text-lg leading-relaxed font-amiri serif-text">
                        <p>
                            بدأت رحلتنا من قلب الصحراء، حيث تلتقي التقاليد العريقة بفن صناعة العطور الحديث. في Aroma Luxe، نؤمن بأن العطر ليس مجرد رائحة، بل هو هوية وتعبير عن الروح.
                        </p>
                        <p>
                            تخصصنا في استخلاص أثمن المكونات الشرقية، من العود الملكي النادر إلى مسك الغزال الصافي والورد الطائفي، لنقدم لكم تجربة عطرية لا تُنسى تتميز بالثبات والفوحان الفريد.
                        </p>
                        <p>
                            كل زجاجة ننتجها هي ثمرة سنوات من البحث والشغف، مصممة لأولئك الذين يقدرون التميز ويبحثون عن لمسة من الفخامة في حياتهم اليومية.
                        </p>
                    </div>

                    <div className="mt-12 flex items-center gap-6">
                        <div className="h-px w-16 bg-primary/50"></div>
                        <span className="font-amiri serif-text italic text-primary/90 text-xl">فخامة تليق بك</span>
                    </div>
                </div>
            </div>

            {/* Image Section */}
            <div className="relative h-[60vh] lg:min-h-[80vh] overflow-hidden order-2">
                <Image
                    src="/images/hero-bg2.png"
                    alt="Aroma Luxe Exclusive Collection"
                    fill
                    className="object-cover transition-transform duration-1000"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                />

                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute inset-0 bg-black/10"></div>

                {/* Quote Box */}
                <div className="absolute bottom-2 right-2 md:bottom-10 md:right-10  border border-primary/30 p-8 backdrop-blur-sm bg-black/20">
                    <p className="serif-text text-2xl text-white italic leading-relaxed text-center font-amiri">
                        "العطر هو المفتاح الذي يفتح أبواب الذاكرة"
                    </p>
                </div>
            </div>
        </section>
    )
}

export default MainSection