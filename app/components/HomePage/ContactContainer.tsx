import React from 'react'

const ContactContainer = () => {
  return (
    <div className="flex flex-col items-center gap-6 py-16 bg-gradient-to-t from-primary/5 to-transparent rounded-3xl border border-primary/20 mt-12 mb-20">
      <h2 className="text-3xl font-bold text-white">جاهز لاختيار عطرك القادم؟</h2>
      <p className="text-gray-400 text-center max-w-md">مستشارو العطور لدينا متاحون الآن لمساعدتك في اختيار الرائحة التي تناسب شخصيتك</p>
      <a href="https://wa.me/+966500000000" className="flex min-w-[280px] cursor-pointer items-center justify-center gap-4 rounded-full h-16 px-10 bg-primary text-background-dark text-xl font-black shadow-lg hover:bg-yellow-500 transition-all">
        <span className="material-symbols-outlined text-3xl">chat_bubble</span>
        <span>اطلب الآن عبر واتساب</span>
      </a>
    </div>
  )
}

export default ContactContainer