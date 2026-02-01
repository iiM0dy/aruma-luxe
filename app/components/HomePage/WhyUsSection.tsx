import React from 'react'

const WhyUsSection = () => {
  const cards = [
    {
      id: 1,
      icon: <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 0 24 24" width="30px" fill="#F4C025"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm7 10c0 4.52-2.98 8.69-7 9.93-4.02-1.24-7-5.41-7-9.93V6.3l7-3.11 7 3.11V11zm-11.59.59L6 13l4 4 8-8-1.41-1.42L10 14.17z" /></svg>,
      title: 'منتجات أصلية',
      description: 'نضمن لك الجودة والأصالة في كل زجاجة عطر نقدمها، مع ضمان كامل للمنتج.',
    },
    {
      id: 2,
      icon: <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="30px" viewBox="0 0 24 24" width="30px" fill="#F4C025"><g><rect fill="none" height="24" width="24" /><path d="M15.1,19.37l1,1.74c-0.96,0.44-2.01,0.73-3.1,0.84v-2.02C13.74,19.84,14.44,19.65,15.1,19.37z M4.07,13H2.05 c0.11,1.1,0.4,2.14,0.84,3.1l1.74-1C4.35,14.44,4.16,13.74,4.07,13z M15.1,4.63l1-1.74C15.14,2.45,14.1,2.16,13,2.05v2.02 C13.74,4.16,14.44,4.35,15.1,4.63z M19.93,11h2.02c-0.11-1.1-0.4-2.14-0.84-3.1l-1.74,1C19.65,9.56,19.84,10.26,19.93,11z M8.9,19.37l-1,1.74c0.96,0.44,2.01,0.73,3.1,0.84v-2.02C10.26,19.84,9.56,19.65,8.9,19.37z M11,4.07V2.05 c-1.1,0.11-2.14,0.4-3.1,0.84l1,1.74C9.56,4.35,10.26,4.16,11,4.07z M18.36,7.17l1.74-1.01c-0.63-0.87-1.4-1.64-2.27-2.27 l-1.01,1.74C17.41,6.08,17.92,6.59,18.36,7.17z M4.63,8.9l-1.74-1C2.45,8.86,2.16,9.9,2.05,11h2.02C4.16,10.26,4.35,9.56,4.63,8.9z M19.93,13c-0.09,0.74-0.28,1.44-0.56,2.1l1.74,1c0.44-0.96,0.73-2.01,0.84-3.1H19.93z M16.83,18.36l1.01,1.74 c0.87-0.63,1.64-1.4,2.27-2.27l-1.74-1.01C17.92,17.41,17.41,17.92,16.83,18.36z M7.17,5.64L6.17,3.89 C5.29,4.53,4.53,5.29,3.9,6.17l1.74,1.01C6.08,6.59,6.59,6.08,7.17,5.64z M5.64,16.83L3.9,17.83c0.63,0.87,1.4,1.64,2.27,2.27 l1.01-1.74C6.59,17.92,6.08,17.41,5.64,16.83z M13,7h-2v5.41l4.29,4.29l1.41-1.41L13,11.59V7z" /></g></svg>,
      title: 'ثبات طويل',
      description: 'عطورنا تدوم لساعات طويلة بفضل التركيز العالي للزيوت العطرية النقية.',
    },
    {
      id: 3,
      icon: <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#F4C025"><path d="M229.41-160.67q-49.41 0-84.08-34.61-34.66-34.61-34.66-84.05H40v-454q0-27 19.83-46.84Q79.67-800 106.67-800h572.66v164.67h110l130.67 174v182h-74q0 49.44-34.59 84.05t-84 34.61q-49.41 0-84.08-34.61-34.66-34.61-34.66-84.05H348q0 49.33-34.59 84-34.59 34.66-84 34.66Zm-.08-66.66q21.67 0 36.84-15.17 15.16-15.17 15.16-36.83 0-21.67-15.16-36.84-15.17-15.16-36.84-15.16-21.66 0-36.83 15.16-15.17 15.17-15.17 36.84 0 21.66 15.17 36.83 15.17 15.17 36.83 15.17ZM106.67-346H132q17-24 41.69-38.33 24.7-14.34 55-14.34Q259-398.67 284-384q25 14.67 42 38h286.67v-387.33h-506V-346Zm620.66 118.67q21.67 0 36.84-15.17 15.16-15.17 15.16-36.83 0-21.67-15.16-36.84-15.17-15.16-36.84-15.16-21.66 0-36.83 15.16-15.17 15.17-15.17 36.84 0 21.66 15.17 36.83 15.17 15.17 36.83 15.17Zm-48-202.67H860L756-568.67h-76.67V-430ZM360-532.67Z" /></svg>,
      title: 'توصيل سريع',
      description: 'خدمة توصيل سريعة وآمنة تصلك أينما كنت وفي وقت قياسي.',
    },
  ]
  return (
    <section>
      <div className="flex flex-col gap-10 py-24">
        <div className="flex flex-col gap-4 text-center items-center">
          <h2 className="text-primary text-sm font-bold uppercase tracking-[0.3em]">تميزنا</h2>
          <h1 className="text-white text-4xl font-bold leading-tight md:text-5xl max-w-[720px]">
            لماذا تختار عطورنا؟
          </h1>
          <p className="text-gray-400 text-lg font-normal leading-relaxed max-w-[600px]">
            نحن نقدم أجود أنواع العطور المستوحاة من التراث الشرقي العريق مع لمسة عصرية تناسب ذوقكم الرفيع
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
          {cards.map(card => (
            <div key={card.id} className="flex flex-1 gap-6 rounded-2xl border border-[#393528] bg-[#1a1814] p-8 flex-col items-start hover:border-primary transition-colors">
              <div className="bg-primary/10 p-4 rounded-xl text-primary">
                <span className="material-symbols-outlined">{card.icon}</span>
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="text-white text-xl font-bold">{card.title}</h2>
                <p className="text-gray-400 text-base leading-relaxed">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyUsSection