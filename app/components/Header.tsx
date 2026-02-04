"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 border-b ${scrolled
        ? "bg-background-dark border-white/10 py-2"
        : "bg-transparent border-transparent py-4"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2">
          <span className="text-2xl font-black text-white tracking-widest font-amiri hover:text-primary transition-colors">
            AROMA LUXE
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {[
            { href: "/", label: "الرئيسية" },
            { href: "/store", label: "المتجر" },
            { href: "/who-are-we", label: "من نحن" },
            { href: "/contact-us", label: "اتصل بنا" },
          ].map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative transition-colors font-medium text-lg font-amiri ${isActive ? "text-primary" : "text-white/80 hover:text-primary"
                  }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="hidden sm:flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-white/10 transition-all text-white font-medium"
          >
            <span className="material-symbols-outlined text-[22px]">person</span>
            <span className="text-sm font-amiri">تسجيل الدخول</span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden p-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group"
            aria-label="فتح القائمة"
          >
            <div className="flex flex-col gap-1.5 w-6">
              <span className="h-0.5 w-full bg-white group-hover:bg-primary transition-colors"></span>
              <span className="h-0.5 w-full bg-white group-hover:bg-primary transition-colors"></span>
              <span className="h-0.5 w-full bg-white group-hover:bg-primary transition-colors"></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 md:hidden transition-all duration-300
          ${isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-[320px] bg-background-dark border-r border-white/10 shadow-2xl transform transition-transform duration-300 ease-out md:hidden
          ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Mobile Header */}
        <div className="h-24 px-8 flex items-center justify-between border-b border-white/5">
          <span className="text-2xl font-bold text-white font-amiri">
            AROMA LUXE
          </span>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 rounded-xl hover:bg-white/10 transition-colors"
          >
            <span className="material-symbols-outlined text-white text-3xl">close</span>
          </button>
        </div>

        {/* Mobile Nav Links */}
        <nav className="flex flex-col gap-2 p-8" dir="rtl">
          {[
            { href: "/", label: "الرئيسية", icon: "home" },
            { href: "/store", label: "المتجر", icon: "shopping_bag" },
            { href: "/who-are-we", label: "من نحن", icon: "info" },
            { href: "/contact-us", label: "اتصل بنا", icon: "contact_mail" }
          ].map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center gap-4 py-4 px-6 rounded-2xl transition-all border border-transparent ${isActive
                  ? "bg-primary/10 text-primary border-primary/20"
                  : "text-white/90 hover:bg-primary/5 hover:text-primary hover:border-primary/20"
                  }`}
              >
                <span className="material-symbols-outlined text-2xl opacity-70">
                  {link.icon}
                </span>
                <span className="text-xl font-medium font-amiri">{link.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Footer */}
        <div className="absolute bottom-10 left-8 right-8">
          <Link
            href="/login"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center justify-center gap-3 w-full py-5 rounded-2xl bg-primary text-background-dark font-black text-xl transition-all"
          >
            <span className="material-symbols-outlined text-2xl">person</span>
            <span className="font-amiri">تسجيل الدخول</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
