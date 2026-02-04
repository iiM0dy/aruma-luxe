import React from 'react'

const ContactContainer = () => {
  return (
    <div className="relative flex flex-col items-center gap-8 py-20 bg-gradient-to-b from-white/[0.03] to-transparent rounded-[3rem] border border-white/10 mt-12 mb-20 overflow-hidden group">
      {/* Decorative background blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/20 blur-[100px] rounded-full group-hover:bg-primary/30 transition-colors duration-700"></div>

      <div className="relative z-10 flex flex-col items-center gap-4 text-center px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white font-amiri leading-tight">
          جاهز لاختيار عطرك القادم؟
        </h2>
        <p className="text-gray-400 text-lg md:text-xl max-w-xl font-light leading-relaxed">
          مستشارو العطور لدينا متاحون الآن لمساعدتك في اختيار الرائحة التي تناسب شخصيك وتكمل حضورك بكل فخامة.
        </p>
      </div>

      <div className="relative z-10 animate-pulse-slow">
        <a
          href="https://wa.me/+966500000000"
          className="group/wa flex min-w-[300px] cursor-pointer items-center justify-center gap-4 rounded-full h-18 px-12 bg-primary text-background-dark text-xl font-bold shadow-[0_10px_40px_rgba(244,192,37,0.4)] hover:shadow-[0_15px_50px_rgba(244,192,37,0.6)] transition-all hover:scale-105 active:scale-95"
        >
          <span className="material-symbols-outlined text-3xl group-hover/wa:rotate-[-12deg] transition-transform">chat</span>
          <span>تواصل مع مستشارنا الخاص</span>
        </a>
      </div>

      {/* Subtle corner patterns */}
      <div className="absolute top-0 right-0 w-32 h-32 border-t border-r border-primary/20 rounded-tr-[3rem] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 border-b border-l border-primary/20 rounded-bl-[3rem] pointer-events-none"></div>
    </div>
  )
}

export default ContactContainer
