import React from 'react'

interface BannerProps {
  title: string;
  description: string;
  image: string;
}

const BannerSection = ({ title, description, image }: BannerProps) => {
  return (
    <section className="w-full">
      <div className="relative overflow-hidden rounded-3xl group">
        <div
          className="flex min-h-[500px] md:min-h-[640px] flex-col gap-6 bg-cover bg-center bg-no-repeat items-center justify-center p-6 md:p-12 text-center transition-transform duration-500"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.7) 100%), url("${image}")`
          }}
        >
          <div className="flex flex-col gap-4 max-w-[800px]">
            <h1 className="text-white text-5xl md:text-8xl font-bold leading-tight tracking-tight font-amiri drop-shadow-lg">
              {title}
            </h1>
            <div className="h-1 w-24 bg-primary mx-auto rounded-full mb-2"></div>
            <h2 className="text-primary text-xl md:text-3xl font-medium tracking-wide font-amiri">
              {description}
            </h2>
            <p className="text-gray-200 text-lg md:text-xl font-light leading-relaxed mt-2 max-w-[650px] mx-auto">
              اكتشف مجموعتنا الحصرية من الروائح التي تجمع بين عبق الماضي وفخامة الحاضر، لتمنحك حضوراً واثقاً لا ينسى.
            </p>
          </div>

          <div className="mt-10">
            <a
              href="https://wa.me/966555555555"
              className="group/btn relative flex min-w-[260px] cursor-pointer items-center justify-center gap-4 overflow-hidden rounded-full h-16 px-10 bg-primary text-background-dark text-xl font-bold shadow-lg hover:bg-primary/90 transition-all active:scale-95"
            >
              <span className="material-symbols-outlined text-2xl">chat</span>
              <span>تواصل عبر واتساب</span>
            </a>
          </div>
        </div>

        {/* Subtle border overlay */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none border border-white/5 rounded-3xl z-10"></div>
      </div>
    </section>
  )
}

export default BannerSection
