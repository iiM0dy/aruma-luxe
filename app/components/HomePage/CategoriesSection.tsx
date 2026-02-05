import React from 'react'
import Link from 'next/link'

const CategoriesSection = () => {

  const categories = [
    {
      title: 'عطور رجالية',
      image: '/images/men-section.png',
      query: '4',
      tag: 'القوة والفخامة'
    },
    {
      title: 'عطور نسائية',
      image: '/images/women-section.png',
      query: '7',
      tag: 'الأنوثة والرقة'
    },
    {
      title: 'عطور شرقية',
      image: '/images/oriental-section.png',
      query: '5',
      tag: 'عبق التراث'
    },
  ]
  return (
    <section className="py-20">
      <div className="flex flex-col gap-10">
        <div className="flex items-center justify-between">
          <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight tracking-tight border-r-4 border-primary pr-4 font-amiri">
            تصفح مجموعاتنا
          </h2>
          <Link href="/store" className="text-primary hover:text-white transition-colors flex items-center gap-2 group">
            عرض الكل
            <span className="material-symbols-outlined group-hover:translate-x-[-4px] transition-transform">arrow_back</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map(category => (
            <Link
              key={category.title}
              href={`/store?category=${encodeURIComponent(category.query)}`}
              className="group relative bg-cover bg-center flex flex-col gap-3 rounded-2xl justify-end p-8 aspect-4/5 overflow-hidden cursor-pointer shadow-lg border border-white/5 transition-all duration-300"
              style={{
                backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0.2) 100%), url("${category.image}")`
              }}
            >
              <div className="z-10">
                <p className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-2 font-noto opacity-80">
                  {category.tag}
                </p>
                <p className="text-white text-3xl font-bold leading-tight font-amiri group-hover:text-primary transition-colors">
                  {category.title}
                </p>
                <div className="w-12 h-1 bg-primary mt-4 group-hover:w-20 transition-all duration-300 rounded-full"></div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CategoriesSection
