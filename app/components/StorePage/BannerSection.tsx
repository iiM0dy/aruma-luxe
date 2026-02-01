import React from 'react'

const BannerSection = () => {
    return (
        <section className='mb-16'>
            <div className="relative rounded-2xl overflow-hidden aspect-[21/9] flex items-center justify-center">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: 'linear-gradient(to left, rgba(18, 17, 13, 0.9), rgba(18, 17, 13, 0.4)), url("/images/hero-bg2.png")'
                    }}
                ></div>
                <div className="relative z-10 text-center max-w-2xl px-6">
                    <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight text-white">فخامة العطور العربية الأصلية</h2>
                    <p className="text-lg text-white/70 mb-8 font-light leading-relaxed">اكتشف التناغم المثالي بين التقاليد العريقة والحداثة الفاخرة في مجموعتنا الحصرية لعام 2026</p>
                </div>
            </div>
        </section>
    )
}

export default BannerSection