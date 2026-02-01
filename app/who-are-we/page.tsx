import React from 'react'
import MainSection from '../components/WhoAreWePage/MainSection'
import Image from 'next/image'

const WhoAreWePage = () => {
  return (
    <>
      <MainSection />
      <section className="py-24 bg-[#12110D] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-amiri text-primary mb-4">قيمنا الجوهرية</h3>
            <div className="h-1 w-20 bg-primary mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center p-8 border border-white/5 hover:border-primary/20 transition-all rounded-xl group">
              <div className="size-16 rounded-full border border-primary/40 flex items-center justify-center mb-6 group-hover:bg-primary/5 transition-colors">
                <span className="material-symbols-outlined text-primary text-4xl">workspace_premium</span>
              </div>
              <h4 className="text-xl font-bold mb-4 text-white font-noto">الجودة الفائقة</h4>
              <p className="text-white/60 leading-relaxed text-sm font-noto">
                نلتزم باستخدام أنقى الزيوت العطرية الطبيعية والمكونات المختارة بعناية من مصادرها الأصلية لضمان تجربة فاخرة.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-8 border border-white/5 hover:border-primary/20 transition-all rounded-xl group">
              <div className="size-16 rounded-full border border-primary/40 flex items-center justify-center mb-6 group-hover:bg-primary/5 transition-colors">
                <span className="material-symbols-outlined text-primary text-4xl">history_edu</span>
              </div>
              <h4 className="text-xl font-bold mb-4 text-white font-noto">الأصالة</h4>
              <p className="text-white/60 leading-relaxed text-sm font-noto">
                نحافظ على إرث العطارة العربية التقليدية مع دمجها بلمسات عصرية تلبي تطلعات الجيل الجديد من محبي العطور.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-8 border border-white/5 hover:border-primary/20 transition-all rounded-xl group">
              <div className="size-16 rounded-full border border-primary/40 flex items-center justify-center mb-6 group-hover:bg-primary/5 transition-colors">
                <span className="material-symbols-outlined text-primary text-4xl">diamond</span>
              </div>
              <h4 className="text-xl font-bold mb-4 text-white font-noto">الحصرية</h4>
              <p className="text-white/60 leading-relaxed text-sm font-noto">
                كل عطر في مجموعتنا هو إصدار فني فريد، صُمم خصيصاً ليعكس شخصية متميزة لا تشبه أحداً غيرك.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className='mb-24 max-w-7xl mx-auto px-6'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 h-[600px]'>
          <div className='relative'>
            <Image
              src="/images/gallery-image-1.png"
              alt="Aroma Luxe Exclusive Collection"
              fill
              className="object-cover rounded-2xl"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className='grid grid-cols-2 md:grid-cols-1 md:grid-rows-2 gap-6'>
            <div className='relative '>
              <Image
                src="/images/gallery-image-2.png"
                alt="Aroma Luxe Exclusive Collection"
                fill
                className="object-cover rounded-2xl"

              />
            </div>
            <div className='relative'>
              <Image
                src="/images/gallery-image-3.png"
                alt="Aroma Luxe Exclusive Collection"
                fill
                className="object-cover rounded-2xl"

              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default WhoAreWePage
