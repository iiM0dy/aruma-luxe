import React from 'react'

const CustomersReviews = () => {

  const reviews = [
    {
      id: '1',
      message: '"كل عطر اقتنيته من أروما لوكس يحكي قصة فخامة. التغليف رائع ومناسب جداً للهدايا الفاخرة التي تترك انطباعاً مبهراً."',
      sender: 'محمد العتيبي',
      subSender: 'تم توثيق الشراء',
    },
    {
      id: '2',
      message: '"الجودة لا تضاهى، العطر ثباته مذهل وفوحانه يأسر القلوب. تجربة شراء فاخرة من البداية للنهاية تستحق كل ريال."',
      sender: 'فهد القحطاني',
      subSender: 'تم توثيق الشراء',
    },
    {
      id: '3',
      message: '"تواصلت معهم عبر واتساب وكان الرد سريعاً واحترافياً جداً. العطور الشرقية لديهم لها طابع خاص ومميز لا تجده في مكان آخر."',
      sender: 'سارة المنصور',
      subSender: 'تم توثيق الشراء',
    },
  ]

  return (
    <section className="py-24 border-t border-white/5">
      <div className="flex flex-col gap-16">
        <div className="flex flex-col gap-3 text-center items-center">
          <div className="w-12 h-1 bg-primary rounded-full mb-2"></div>
          <h2 className="text-primary text-sm font-bold uppercase tracking-[0.4em] font-noto">ثقة عملاؤنا</h2>
          <h3 className="text-white text-4xl md:text-5xl font-bold font-amiri">قالوا عن أروما لوكس</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {reviews.map(review => (
            <div key={review.id} className="group relative flex flex-col gap-8 p-10 rounded-[2rem] bg-white/[0.01] border border-white/5 hover:border-primary/20 transition-all duration-700 hover:bg-white/[0.03]">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined star-filled text-primary !text-xl opacity-80 group-hover:opacity-100 transition-opacity">star</span>
                ))}
              </div>

              <p className="text-gray-300 italic text-xl leading-relaxed font-amiri relative z-10">
                {review.message}
              </p>

              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center text-primary font-bold">
                  {review.sender[0]}
                </div>
                <div className="flex flex-col">
                  <h4 className="text-white text-xl font-bold font-amiri">{review.sender}</h4>
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-green-500 !text-sm">verified</span>
                    <span className="text-gray-500 text-xs font-noto uppercase tracking-wider">{review.subSender}</span>
                  </div>
                </div>
              </div>

              {/* Large quote icon in background */}
              <div className="absolute top-10 left-10 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity duration-700 pointer-events-none">
                <span className="material-symbols-outlined !text-9xl">format_quote</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CustomersReviews