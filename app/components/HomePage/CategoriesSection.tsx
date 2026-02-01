import React from 'react'
import Link from 'next/link'

const CategoriesSection = () => {

  const categories = [
    {
      title: 'عطور رجالية',
      image: '/images/men-section.png',
      query: 'Royal Oud'
    },
    {
      title: 'عطور نسائية',
      image: '/images/women-section.png',
      query: 'Rare Florals'
    },
    {
      title: 'عطور شرقية',
      image: '/images/oriental-section.png',
      query: 'Oil-Based Perfumes'
    },
  ]
  return (
    <section>
      <div className="mt-20">
        <h2 className="text-white text-3xl font-bold leading-tight tracking-tight border-r-4 border-primary pr-4 mb-8 font-amiri">
          تسوق حسب الفئة
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map(category => (
            <Link
              key={category.title}
              href={`/store?category=${encodeURIComponent(category.query)}`}
              className="group relative bg-cover bg-center flex flex-col gap-3 rounded-xl justify-end p-8 aspect-[4/5] overflow-hidden cursor-pointer"
              style={{
                backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0) 60%), url("${category.image}")`
              }}
            >
              <div className="z-10 transition-transform group-hover:-translate-y-2">
                <p className="text-primary text-sm font-bold uppercase tracking-widest mb-1 font-noto">المجموعة</p>
                <p className="text-white text-2xl font-bold leading-tight font-noto">{category.title}</p>
                <div className="w-10 h-1 bg-primary mt-4 group-hover:w-full transition-all duration-300"></div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CategoriesSection
