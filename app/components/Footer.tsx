import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="relative border-t border-white/5 bg-[#0a0a0a] pt-20 pb-10 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-6 group">
                            <span className="text-xl text-white font-black tracking-widest font-amiri group-hover:text-primary transition-colors">AROMA LUXE</span>
                        </Link>
                        <p className="text-white/40 text-base leading-relaxed font-amiri">
                            منذ عام 1995، نسعى لتقديم أجود أنواع العطور والزيوت العطرية المستوحاة من التراث العربي الأصيل مع لمسة عصرية تناسب تطلعاتكم.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white text-lg font-bold mb-8 font-amiri border-r-2 border-primary pr-3">روابط سريعة</h4>
                        <ul className="space-y-4 text-white/50 text-base font-amiri">
                            <li><Link className="hover:text-primary transition-colors flex items-center gap-2" href="/store">المتجر</Link></li>
                            <li><Link className="hover:text-primary transition-colors flex items-center gap-2" href="/who-are-we">من نحن</Link></li>
                            <li><Link className="hover:text-primary transition-colors flex items-center gap-2" href="/contact-us">اتصل بنا</Link></li>
                            <li><Link className="hover:text-primary transition-colors flex items-center gap-2" href="/questions">الأسئلة الشائعة</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white text-lg font-bold mb-8 font-amiri border-r-2 border-primary pr-3">تواصل معنا</h4>
                        <ul className="space-y-5 text-white/50 text-base">
                            <li className="flex items-center gap-4 group cursor-pointer hover:text-white transition-colors">
                                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary/50 transition-all">
                                    <span className="material-symbols-outlined cursor-default select-none text-primary text-xl">call</span>
                                </div>
                                <Link href="tel:+966500000000" dir="ltr">+966 50 000 0000</Link>
                            </li>
                            <li className="flex items-center gap-4 group cursor-pointer hover:text-white transition-colors">
                                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary/50 transition-all">
                                    <span className="material-symbols-outlined cursor-default select-none text-primary text-xl">mail</span>
                                </div>
                                <Link href="mailto:[EMAIL_ADDRESS]">hello@aromaluxe.com</Link>
                            </li>
                            <li className="flex items-center gap-4 group cursor-pointer hover:text-white transition-colors">
                                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary/50 transition-all">
                                    <span className="material-symbols-outlined cursor-default select-none text-primary text-xl">location_on</span>
                                </div>
                                <Link href="https://maps.app.goo.gl/FbuZe1PrHRnGBfhz5" className="font-amiri">الرياض، المملكة العربية السعودية</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col items-start md:items-end">
                        <h4 className="text-white text-lg font-bold mb-8 font-amiri border-l-2 border-primary pl-3 md:border-r-2 md:border-l-0 md:pr-3">تابعونا</h4>
                        <div className="flex gap-4">
                            {[
                                { icon: <FaTwitter />, href: "#" },
                                { icon: <FaInstagram />, href: "#" },
                                { icon: <FaFacebookF />, href: "#" },
                            ].map((social, idx) => (
                                <a
                                    key={idx}
                                    className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all text-white text-xl"
                                    href={social.href}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-white/20 text-sm font-amiri order-2 md:order-1">
                        © 2026 Aroma Luxe. جميع الحقوق محفوظة لشركة أروما لوكس للعطور.
                    </p>
                    <div className="flex gap-8 text-white/20 text-sm font-amiri order-1 md:order-2">
                        <Link href="/privacy" className="hover:text-white/40 transition-colors">سياسة الخصوصية</Link>
                        <Link href="/terms" className="hover:text-white/40 transition-colors">الشروط والأحكام</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
