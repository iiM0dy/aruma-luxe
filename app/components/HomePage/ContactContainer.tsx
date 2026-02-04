import React from 'react'

const ContactContainer = () => {
  return (
    <div className="relative flex flex-col items-center gap-8 py-20 bg-white/2 rounded-[3rem] border border-white/5 mt-12 mb-20 overflow-hidden group">
      <div className="relative z-10 flex flex-col items-center gap-4 text-center px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white font-amiri leading-tight">
          جاهز لاختيار عطرك القادم؟
        </h2>
        <p className="text-gray-400 text-lg md:text-xl max-w-xl font-light leading-relaxed">
          مستشارو العطور لدينا متاحون الآن لمساعدتك في اختيار الرائحة التي تناسب شخصيك وتكمل حضورك بكل فخامة.
        </p>
      </div>

      <div className="relative z-10">
        <a
          href="https://wa.me/+966500000000"
          className="group/wa flex min-w-[300px] cursor-pointer items-center justify-center gap-4 rounded-full h-18 px-12 bg-primary text-background-dark text-xl font-bold shadow-lg hover:bg-primary/90 transition-all active:scale-95"
        >
          <span className="material-symbols-outlined text-3xl">chat</span>
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
