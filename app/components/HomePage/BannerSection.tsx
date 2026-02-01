import React from 'react'

interface BannerProps {
  title: string;
  description: string;
  image: string;
}

const BannerSection = ({ title, description, image }: BannerProps) => {
  return (
    <section className="w-full">
      <div className="relative overflow-hidden rounded-2xl">
        <div
          className="flex min-h-[560px] flex-col gap-6 bg-cover bg-center bg-no-repeat items-center justify-center p-8 text-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.8) 100%), url("${image}")`
          }}
        >
          <div className="flex flex-col gap-4 max-w-[700px] font-manrope">
            <h1 className="text-white text-5xl font-bold leading-tight tracking-tight md:text-7xl">
              {title}
            </h1>
            <h2 className="text-primary text-xl font-medium tracking-wide md:text-2xl">
              {description}
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mt-2">
              اكتشف مجموعتنا الحصرية من الروائح التي تجمع بين عبق الماضي وفخامة الحاضر
            </p>
          </div>
          <div className="mt-8">
            <a href="https://wa.me/966555555555" className="flex min-w-[240px] cursor-pointer items-center justify-center gap-3 overflow-hidden rounded-xl h-14 px-8 bg-primary text-background-dark text-lg font-bold shadow-[0_0_20px_rgba(244,192,37,0.3)] hover:scale-105 transition-transform">
              <span className="material-symbols-outlined">chat</span>
              <span>تواصل عبر واتساب</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BannerSection