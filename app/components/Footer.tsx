import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="border-t border-white/5 bg-[#12110D] py-12">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="col-span-1 md:col-span-1">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="text-xl text-white font-bold tracking-tight">AROMA LUXE</span>
                    </div>
                    <p className="text-white/40 text-sm leading-relaxed">منذ عام 1995، نسعى لتقديم أجود أنواع العطور والزيوت العطرية المستوحاة من التراث العربي الأصيل.</p>
                </div>
                <div>
                    <h4 className="text-white font-bold mb-6">روابط سريعة</h4>
                    <ul className="space-y-4 text-white/50 text-sm">
                        <li><a className="hover:text-primary" href="#">سياسة الخصوصية</a></li>
                        <li><a className="hover:text-primary" href="#">الشروط والأحكام</a></li>
                        <li><a className="hover:text-primary" href="#">الأسئلة الشائعة</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-white font-bold mb-6">تواصل معنا</h4>
                    <ul className="space-y-4 text-white/50 text-sm">
                        <li className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-primary text-lg">call</span>
                            +966 50 000 0000
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-primary text-lg">mail</span>
                            hello@aromaluxe.com
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-primary text-lg">location_on</span>
                            الرياض، المملكة العربية السعودية
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col items-start md:items-end">
                    <h4 className="text-white font-bold mb-6">تابعونا</h4>
                    <div className="flex gap-4">
                        <a className="size-10 rounded-full border border-white/10 flex items-center justify-center hover:border-primary transition-colors text-white" href="#">
                            <FaTwitter className="text-xl" />
                        </a>
                        <a className="size-10 rounded-full border border-white/10 flex items-center justify-center hover:border-primary transition-colors text-white" href="#">
                            <FaInstagram className="text-xl" />
                        </a>
                        <a className="size-10 rounded-full border border-white/10 flex items-center justify-center hover:border-primary transition-colors text-white" href="#">
                            <FaFacebookF className="text-xl" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-white/5 text-center text-white/20 text-xs">
                © 2026 Aroma Luxe. جميع الحقوق محفوظة.
            </div>
        </footer>
    )
}

export default Footer