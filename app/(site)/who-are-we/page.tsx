import React from 'react'
import MainSection from '@/app/components/WhoAreWePage/MainSection'
import Image from 'next/image'

const WhoAreWePage = () => {
  return (
    <>
      <MainSection />

      {/* Values Section */}
      <section className="py-32 bg-[#0a0908] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center mb-20">
            <div className="w-16 h-1 bg-primary rounded-full mb-4"></div>
            <h2 className="text-primary text-sm font-bold uppercase tracking-[0.4em] font-noto mb-2">مبادئنا</h2>
            <h3 className="text-4xl md:text-6xl font-amiri text-white">قيمنا الجوهرية</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "workspace_premium",
                title: "الجودة الفائقة",
                desc: "نلتزم باستخدام أنقى الزيوت العطرية الطبيعية والمكونات المختارة بعناية من مصادرها الأصلية لضمان تجربة فاخرة لا تُنسى."
              },
              {
                icon: "history_edu",
                title: "الأصالة",
                desc: "نحافظ على إرث العطارة العربية التقليدية مع دمجها بلمسات عصرية تلبي تطلعات الجيل الجديد من محبي العطور الراقية."
              },
              {
                icon: "diamond",
                title: "الحصرية",
                desc: "كل عطر في مجموعتنا هو إصدار فني فريد، صُمم خصيصاً ليعكس شخصية متميزة لا تشبه أحداً غيرك في حضورك الطاغي."
              }
            ].map((value, idx) => (
              <div key={idx} className="group relative flex flex-col items-center text-center p-12 rounded-[2.5rem] border border-white/5 bg-white/[0.02] hover:border-primary/30 transition-all duration-700 hover:bg-white/[0.04] hover:-translate-y-2">
                <div className="relative mb-8">
                  <div className="relative size-20 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center text-primary transition-colors">
                    <span className="material-symbols-outlined cursor-default select-none text-4xl">{value.icon}</span>
                  </div>
                </div>
                <h4 className="text-2xl font-bold mb-4 text-white font-amiri">{value.title}</h4>
                <p className="text-gray-400 leading-relaxed font-amiri text-lg">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className='pb-32 bg-[#0a0908] px-6'>
        <div className="max-w-7xl mx-auto">
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 h-[600px] md:h-[800px]'>
            <div className='relative group overflow-hidden rounded-[3rem] border border-white/10'>
              <Image
                src="/images/gallery-image-1.png"
                alt="Aroma Luxe Exclusive Collection"
                fill
                className="object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700"></div>
            </div>

            <div className='grid grid-cols-2 md:grid-cols-1 gap-8'>
              <div className='relative group overflow-hidden rounded-[3rem] border border-white/10'>
                <Image
                  src="/images/gallery-image-2.png"
                  alt="Aroma Luxe Exclusive Collection"
                  fill
                  className="object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700"></div>
              </div>
              <div className='relative group overflow-hidden rounded-[3rem] border border-white/10'>
                <Image
                  src="/images/gallery-image-3.png"
                  alt="Aroma Luxe Exclusive Collection"
                  fill
                  className="object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default WhoAreWePage
