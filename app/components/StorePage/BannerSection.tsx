import React from 'react'

const BannerSection = () => {
    return (
        <section className='mb-20'>
            <div className="relative rounded-[2.5rem] overflow-hidden min-h-[400px] flex items-center justify-center border border-white/5 shadow-lg">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: 'linear-gradient(to top, rgba(10, 9, 8, 0.95), rgba(10, 9, 8, 0.4)), url("/images/hero-bg2.png")'
                    }}
                ></div>

                <div className="relative z-10 text-center max-w-3xl px-8 flex flex-col items-center">
                    <div className="h-1 w-12 bg-primary mb-6 rounded-full"></div>
                    <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white font-amiri drop-shadow-xl">
                        فخامة العطور <span className="text-primary italic">الأصلية</span>
                    </h2>
                    <p className="text-xl text-gray-300 mb-8 font-amiri font-light leading-relaxed max-w-xl">
                        اكتشف التناغم المثالي بين التقاليد العريقة والحداثة الفاخرة في مجموعتنا الحصرية التي صُممت لتدوم طويلاً.
                    </p>
                </div>

                {/* Corner details */}
                <div className="absolute top-8 left-8 size-16 border-t border-l border-white/5 rounded-tl-3xl"></div>
                <div className="absolute bottom-8 right-8 size-16 border-b border-r border-white/5 rounded-br-3xl"></div>
            </div>
        </section>
    )
}

export default BannerSection