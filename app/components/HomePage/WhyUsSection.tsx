import React from 'react'

const WhyUsSection = () => {
  const cards = [
    {
      id: 1,
      icon: "verified_user",
      title: 'منتجات أصلية',
      description: 'نضمن لك الجودة والأصالة في كل زجاجة عطر نقدمها، مع ضمان كامل للمنتج من مصادره الأصلية.',
    },
    {
      id: 2,
      icon: "schedule",
      title: 'ثبات طويل',
      description: 'عطورنا تدوم لساعات طويلة بفضل التركيز العالي للزيوت العطرية النقية التي نستخدمها.',
    },
    {
      id: 3,
      icon: "local_shipping",
      title: 'توصيل سريع',
      description: 'خدمة توصيل سريعة وآمنة تصلك أينما كنت وفي وقت قياسي مع تغليف يحفظ جودة المنتج.',
    },
  ]
  return (
    <section className="py-24">
      <div className="flex flex-col gap-16">
        <div className="flex flex-col gap-4 text-center items-center">
          <div className="w-16 h-1 bg-primary rounded-full mb-2"></div>
          <h2 className="text-primary text-sm font-bold uppercase tracking-[0.4em] font-noto">لماذا أروما لوكس؟</h2>
          <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight font-amiri max-w-[800px]">
            نصنع الفخامة في كل قطرة
          </h1>
          <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-[700px] mt-2">
            نحن نؤمن أن العطر ليس مجرد رائحة، بل هو هوية وتعبير عن الشخصية، لذا نحرص على تقديم الأفضل دائماً.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map(card => (
            <div
              key={card.id}
              className="group relative flex flex-col gap-8 rounded-3xl border border-white/5 bg-white/[0.02] p-10 items-center text-center transition-all duration-300 hover:bg-white/[0.04]"
            >
              <div className="relative">
                <div className="relative bg-white/5 p-6 rounded-2xl text-primary border border-white/10 group-hover:border-primary/50 transition-colors">
                  <span className="material-symbols-outlined cursor-default select-none text-4xl">{card.icon}</span>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <h2 className="text-white text-2xl font-bold font-amiri">{card.title}</h2>
                <p className="text-gray-400 text-base leading-relaxed font-light">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyUsSection
