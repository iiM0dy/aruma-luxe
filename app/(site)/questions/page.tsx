'use client'
import React, { useState } from 'react'

const Page = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: "كيفية الطلب عبر الواتساب؟",
            answer: "للحصول على تجربة شخصية فاخرة، يمكنكم الطلب مباشرة من خلال الضغط على أيقونة الواتساب أسفل الصفحة. سيتواصل معكم خبير العطور لدينا لمساعدتكم في اختيار العطر المناسب وتأكيد طلبكم وتفاصيل التوصيل بكل سهولة."
        },
        {
            question: "مناطق الشحن والتوصيل",
            answer: "نحن فخورون بتقديم خدمات الشحن لجميع مناطق المملكة ودول الخليج. تستغرق عملية التوصيل داخل المدن الرئيسية من 2-4 أيام عمل، وللمناطق الأخرى من 5-7 أيام عمل عبر شركائنا المعتمدين لضمان سلامة وصول عطوركم."
        },
        {
            question: "ما الذي يميز ثبات عطور Aroma Luxe؟",
            answer: "تتميز عطورنا بتركيزات عالية \"Eau de Parfum\" وما فوق، حيث نستخدم زيوت عطرية نقية ومستخلصة بعناية. يمتد ثبات عطورنا على الجلد لأكثر من 12 ساعة، وعلى الملابس لأكثر من 48 ساعة، مع فوحان متميز يليق بذائقتكم الرفيعة."
        },
        {
            question: "سياسة الاستبدال والاسترجاع",
            answer: "ثقتكم هي أولويتنا. نوفر سياسة استبدال مرنة خلال 7 أيام من استلام الطلب في حال وجود عيب مصنعي أو خطأ في الطلب، بشرط أن يكون المنتج بحالته الأصلية وتغليفه الأصلي. يسعدنا تقديم عينات تجريبية مع كل طلب لتجربة العطر قبل فتحه."
        }
    ];

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    }

    return (
        <main className="max-w-[960px] mx-auto px-4 py-12 flex flex-col items-center text-[#bab29c]">
            <div className="text-center mb-12">
                <h1 className="text-primary text-4xl md:text-5xl font-bold tracking-tight mb-4">الأسئلة الشائعة</h1>
                <p className=" text-lg max-w-2xl mx-auto">كل ما تود معرفته عن خدمات Aroma Luxe المتميزة وتجربة العطور الفاخرة</p>
                <div className="w-24 h-1 bg-primary/30 mx-auto mt-6 rounded-full"></div>
            </div>
            <div className="w-full mb-16 space-y-6">
                {faqs.map((faq, index) => (
                    <div key={index} className="qa overflow-hidden border border-[rgb(244_192_37/0.3)] bg-[rgb(24_22_17/0.5)] rounded-xl transition-all duration-300">
                        <button
                            onClick={() => toggleAccordion(index)}
                            className="w-full p-6 flex justify-between items-center text-right hover:bg-primary/5 transition-colors group cursor-pointer"
                        >
                            <h3 className="text-xl font-bold text-primary">{faq.question}</h3>
                            <div className={`flex items-center justify-center w-8 h-8 rounded-full border border-primary/30 transition-all duration-300 ${openIndex === index ? 'bg-primary text-background-dark rotate-180' : 'text-primary group-hover:border-primary'}`}>
                                <span className="material-symbols-outlined cursor-default select-none text-xl leading-none!">keyboard_arrow_down</span>
                            </div>
                        </button>
                        <div
                            className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
                        >
                            <div className="px-6 pb-6 leading-relaxed text-lg border-t border-primary/10 pt-4">
                                {faq.answer}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    )
}

export default Page
