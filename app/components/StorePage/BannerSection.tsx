import React from 'react'

const BannerSection = () => {
    return (
        <section className='mb-20'>
            <div className="relative rounded-[2.5rem] overflow-hidden min-h-[400px] flex items-center justify-center group shadow-2xl border border-white/5">
                <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-[5000ms] group-hover:scale-110"
                    style={{
                        backgroundImage: 'linear-gradient(to top, rgba(10, 9, 8, 0.95), rgba(10, 9, 8, 0.4)), url("/images/hero-bg2.png")'
                    }}
                ></div>

                {/* Decorative overlay */}
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>

                <div className="relative z-10 text-center max-w-3xl px-8 flex flex-col items-center">
                    <div className="h-1 w-12 bg-primary mb-6 rounded-full group-hover:w-24 transition-all duration-700"></div>
                    <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white font-amiri drop-shadow-2xl">
                        فخامة العطور <span className="text-primary italic">الأصلية</span>
                    </h2>
                    <p className="text-xl text-gray-300 mb-8 font-amiri font-light leading-relaxed max-w-xl">
                        اكتشف التناغم المثالي بين التقاليد العريقة والحداثة الفاخرة في مجموعتنا الحصرية التي صُممت لتدوم طويلاً.
                    </p>
                </div>

                {/* Corner details */}
                <div className="absolute top-8 left-8 size-16 border-t border-l border-white/10 rounded-tl-3xl"></div>
                <div className="absolute bottom-8 right-8 size-16 border-b border-r border-white/10 rounded-br-3xl"></div>
            </div>
        </section>
    )
}

export default BannerSection