import React from 'react'

const CustomersReviews = () => {

  const reviews = [
    {
      id: '1',
      message: '"كل عطر اقتنيته من أروما لوكس يحكي قصة فخامة. التغليف رائع ومناسب جداً للهدايا الفاخرة."',
      sender: 'محمد العتيبي',
      subSender: 'عميل مميز',
    },
    {
      id: '2',
      message: '"الجودة لا تضاهى، العطر ثباته مذهل وفوحانه يأسر القلوب. تجربة شراء فاخرة من البداية للنهاية."',
      sender: 'فهد القحطاني',
      subSender: 'عميل مميز',
    },
    {
      id: '3',
      message: '"تواصلت معهم عبر واتساب وكان الرد سريعاً واحترافياً جداً. العطور الشرقية لديهم لها طابع خاص ومميز."',
      sender: 'سارة المنصور',
      subSender: 'عميل مميز',
    },


  ]
  return (
    <section className="py-24 border-t border-[#1a1814]">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-3 text-center">
          <h2 className="text-primary text-sm font-bold uppercase tracking-[0.3em]">ماذا يقولون عنا</h2>
          <h3 className="text-white text-4xl font-bold font-arabic">آراء عملائنا</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map(review => (
            <div key={review.id} className="group relative flex flex-col gap-6 p-8 rounded-2xl bg-[#0a0a0a] border border-[#1a1814] hover:border-primary/30 transition-all duration-500">
              <div className="flex gap-1 text-primary">
                <span className="material-symbols-outlined star-filled text-2xl"><svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#F4C025"><g><path d="M0 0h24v24H0V0z" fill="none" /><path d="M0 0h24v24H0V0z" fill="none" /></g><g><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z" /></g></svg></span>
                <span className="material-symbols-outlined star-filled text-2xl"><svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#F4C025"><g><path d="M0 0h24v24H0V0z" fill="none" /><path d="M0 0h24v24H0V0z" fill="none" /></g><g><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z" /></g></svg></span>
                <span className="material-symbols-outlined star-filled text-2xl"><svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#F4C025"><g><path d="M0 0h24v24H0V0z" fill="none" /><path d="M0 0h24v24H0V0z" fill="none" /></g><g><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z" /></g></svg></span>
                <span className="material-symbols-outlined star-filled text-2xl"><svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#F4C025"><g><path d="M0 0h24v24H0V0z" fill="none" /><path d="M0 0h24v24H0V0z" fill="none" /></g><g><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z" /></g></svg></span>
                <span className="material-symbols-outlined star-filled text-2xl"><svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#F4C025"><g><path d="M0 0h24v24H0V0z" fill="none" /><path d="M0 0h24v24H0V0z" fill="none" /></g><g><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z" /></g></svg></span>
              </div>
              <p className="text-gray-300 italic text-lg leading-relaxed font-arabic font-amiri">
                {review.message}
              </p>
              <div className="flex flex-col gap-1 mt-auto">
                <h4 className="text-primary text-xl font-bold font-arabic font-amiri">{review.sender}</h4>
                <span className="text-gray-500 text-xs uppercase tracking-widest">{review.subSender}</span>
              </div>
              <div className="absolute top-8 left-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-symbols-outlined text-9xl text-primary"><svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#F4C025"><path d="m248-240 94-162q-5 1-11 1.5t-11 .5q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 21-5.5 41.18Q469-498.63 458-480L320-240h-72Zm360 0 94-162q-5 1-11 1.5t-11 .5q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 21-5.5 41.18Q829-498.63 818-480L680-240h-72ZM319.76-480q33.24 0 56.74-23.26 23.5-23.27 23.5-56.5 0-33.24-23.26-56.74-23.27-23.5-56.5-23.5-33.24 0-56.74 23.26-23.5 23.27-23.5 56.5 0 33.24 23.26 56.74 23.27 23.5 56.5 23.5Zm360 0q33.24 0 56.74-23.26 23.5-23.27 23.5-56.5 0-33.24-23.26-56.74-23.27-23.5-56.5-23.5-33.24 0-56.74 23.26-23.5 23.27-23.5 56.5 0 33.24 23.26 56.74 23.27 23.5 56.5 23.5Zm.24-80Zm-360 0Z" /></svg></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CustomersReviews