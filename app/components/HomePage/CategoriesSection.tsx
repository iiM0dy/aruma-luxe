import React from 'react'
import Link from 'next/link'

const CategoriesSection = () => {

  const categories = [
    {
      title: 'عطور رجالية',
      image: '/images/men-section.png',
      query: 'Royal Oud',
      tag: 'القوة والفخامة'
    },
    {
      title: 'عطور نسائية',
      image: '/images/women-section.png',
      query: 'Rare Florals',
      tag: 'الأنوثة والرقة'
    },
    {
      title: 'عطور شرقية',
      image: '/images/oriental-section.png',
      query: 'Oil-Based Perfumes',
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
              className="group relative bg-cover bg-center flex flex-col gap-3 rounded-2xl justify-end p-8 aspect-4/5 overflow-hidden cursor-pointer shadow-2xl"
              style={{
                backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.2) 50%, rgba(0, 0, 0, 0) 100%), url("${category.image}")`
              }}
            >
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="z-10 transition-all duration-500 group-hover:translate-y-[-8px]">
                <p className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-2 font-noto opacity-80 group-hover:opacity-100">
                  {category.tag}
                </p>
                <p className="text-white text-3xl font-bold leading-tight font-amiri group-hover:text-primary transition-colors">
                  {category.title}
                </p>
                <div className="w-12 h-1 bg-primary mt-4 group-hover:w-full transition-all duration-500 rounded-full"></div>
              </div>

              {/* Glass overlay on hover */}
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-black/80 to-transparent pointer-events-none translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CategoriesSection
