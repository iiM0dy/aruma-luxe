import React from 'react'
import Link from 'next/link'
import Map from '../components/ContactUs/Map'
const ContactUsPage = () => {
    return (
        <section className='max-w-[1200px] mx-auto px-4 md:px-40 py-12'>
            <section className="mb-12">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl md:text-5xl font-black leading-tight mb-4 text-white">تواصل معنا</h2>
                        <p className="text-[#bab29c] text-lg leading-relaxed">نحن هنا لمساعدتك في اختيار عطرك الفاخر المفضل. يسعدنا استقبال استفساراتكم وتقديم المشورة العطرية التي تليق بذوقكم الرفيع.</p>
                    </div>
                </div>
            </section>
            <section className="mb-8">
                <div className="p-6 md:p-8 rounded-2xl border border-primary/30 bg-gradient-to-l from-card-dark to-background-dark flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-6">
                        <div className="bg-primary/10 p-4 rounded-full border border-primary/20">
                            <span className="material-symbols-outlined text-primary text-4xl">chat_bubble</span>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white mb-2">تواصل سريع عبر الواتساب</h3>
                            <p className="text-[#bab29c] text-base">تحدث مباشرة مع خبراء العطور لدينا للحصول على استشارة فورية وطلب المنتجات بكل سهولة.</p>
                        </div>
                    </div>
                    <Link href="https://wa.me/966500000000" className="w-full cursor-pointer md:w-auto min-w-[240px] bg-primary text-background-dark py-4 px-8 rounded-xl font-bold text-lg flex items-center justify-center gap-3 hover:scale-[1.02] transition-transform active:scale-95 shadow-[0_0_20px_rgba(244,192,37,0.2)]">
                        <span className="material-symbols-outlined font-bold">send</span>
                        تحدث معنا الآن
                    </Link>
                </div>
            </section>
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                <div className="flex flex-col gap-4 rounded-2xl border border-border-dark bg-card-dark p-8 hover:border-primary/30 transition-all group">
                    <div className="bg-background-dark size-12 rounded-lg flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined text-3xl">phone_in_talk</span>
                    </div>
                    <div>
                        <h4 className="text-white text-lg font-bold mb-1">خدمة العملاء</h4>
                        <p className="text-[#bab29c] text-base mb-4">متاحون للرد على مكالماتكم خلال ساعات العمل الرسمية.</p>
                        <p className="text-primary text-xl font-bold tracking-widest" dir="ltr">+966 50 000 0000</p>
                    </div>
                </div>
                <div className="flex flex-col gap-4 rounded-2xl border border-border-dark bg-card-dark p-8 hover:border-primary/30 transition-all group">
                    <div className="bg-background-dark size-12 rounded-lg flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined text-3xl">photo_camera</span>
                    </div>
                    <div>
                        <h4 className="text-white text-lg font-bold mb-1">تابعنا على إنستغرام</h4>
                        <p className="text-[#bab29c] text-base mb-4">اكتشف أحدث التشكيلات والقصص وراء عطورنا الفاخرة.</p>
                        <p className="text-primary text-xl font-bold tracking-tight">@aromaluxe.sa</p>
                    </div>
                </div>
            </section>


            <section className="mb-20">
                <div className="flex items-center gap-3 mb-8">
                    <span className="material-symbols-outlined text-primary">location_on</span>
                    <h2 className="text-2xl font-bold text-white">موقعنا في الرياض</h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <Map />
                    <div className="flex flex-col justify-between p-8 rounded-2xl border border-border-dark bg-card-dark/50">
                        <div>
                            <h5 className="text-primary font-bold text-sm uppercase tracking-widest mb-4">العنوان الرئيسي</h5>
                            <p className="text-white text-xl font-bold mb-2">بوتيك أروما لوكس</p>
                            <p className="text-[#bab29c] leading-relaxed mb-8">طريق الملك فهد، حي الملقا<br />الرياض 13521، المملكة العربية السعودية</p>
                            <div className="space-y-4">
                                <h5 className="text-primary font-bold text-sm uppercase tracking-widest">ساعات العمل</h5>
                                <div className="flex justify-between text-sm">
                                    <span className="text-[#bab29c]">السبت - الخميس</span>
                                    <span className="text-white font-medium">10:00 صباحاً - 11:00 مساءً</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-[#bab29c]">الجمعة</span>
                                    <span className="text-white font-medium">4:00 مساءً - 11:30 مساءً</span>
                                </div>
                            </div>
                        </div>
                        <a href="https://www.google.com/maps/dir/?api=1&destination=Riyadh,Saudi+Arabia" className="mt-8 w-full border border-primary text-primary py-3 rounded-lg font-bold hover:bg-primary hover:text-background-dark transition-all flex items-center justify-center gap-2">
                            <span className="material-symbols-outlined">directions</span>
                            الحصول على الاتجاهات
                        </a>
                    </div>
                </div>
            </section>



        </section>
    )
}

export default ContactUsPage