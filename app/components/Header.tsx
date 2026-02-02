"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
          AROMA LUXE
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-white">
          <Link className="text-sm font-medium hover:text-primary transition-colors" href="/">
            الرئيسية
          </Link>
          <Link className="text-sm font-medium hover:text-primary transition-colors" href="/store">
            المتجر
          </Link>
          <Link className="text-sm font-medium hover:text-primary transition-colors" href="/who-are-we">
            من نحن
          </Link>
          <Link className="text-sm font-medium hover:text-primary transition-colors" href="/contact-us">
            اتصل بنا
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <Link
            href="/login"
            className="p-2 rounded-lg bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-white/10 transition-all active:scale-95"
            aria-label="تسجيل الدخول"
          >
            <span className="material-symbols-outlined text-white text-[20px] sm:text-[24px]">
              person
            </span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all active:scale-95"
            aria-label="فتح القائمة"
          >
            <span className="material-symbols-outlined text-white text-[20px] sm:text-[24px]">
              menu
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden transition-opacity duration-300
          ${isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-[280px] sm:w-80 bg-[#0a0a0a] border-l border-white/10 shadow-2xl transform transition-transform duration-300 ease-out md:hidden
          ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Mobile Header */}
        <div className="h-16 sm:h-20 px-4 sm:px-6 flex items-center justify-between border-b border-white/10 bg-black">
          <span className="text-lg sm:text-xl font-bold text-white tracking-tight">
            AROMA LUXE
          </span>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 rounded-lg hover:bg-white/10 transition-colors active:scale-95"
            aria-label="إغلاق القائمة"
          >
            <span className="material-symbols-outlined text-white text-[24px]">
              close
            </span>
          </button>
        </div>

        {/* Mobile Nav Links */}
        <nav className="flex flex-col gap-1 p-4 sm:p-6 bg-[#0a0a0a]" dir="rtl">
          {[
            { href: "/", label: "الرئيسية", icon: "home" },
            { href: "/store", label: "المتجر", icon: "shopping_bag" },
            { href: "/who-are-we", label: "من نحن", icon: "info" },
            { href: "/contact-us", label: "اتصل بنا", icon: "contact_mail" }
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="group flex items-center gap-3 py-3.5 px-4 rounded-xl text-white hover:bg-white/10 transition-all active:scale-[0.98] border border-transparent hover:border-white/5"
            >
              <span className="material-symbols-outlined text-primary/80 group-hover:text-primary text-[22px] transition-colors">
                {link.icon}
              </span>
              <span className="text-[15px] font-medium">{link.label}</span>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Footer */}
        <div className="absolute h-16 sm:h-20 bottom-0 left-0 right-0 p-4 sm:p-6 border-t border-white/10 bg-black">
          <Link
            href="/login"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20 transition-all active:scale-[0.98]"
          >
            <span className="material-symbols-outlined text-[20px]">person</span>
            <span className="text-sm font-medium">تسجيل الدخول</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;