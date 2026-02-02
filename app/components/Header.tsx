'use client'

import React, { useState } from 'react'
import Link from 'next/link'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold tracking-tight text-white">AROMA LUXE</h1>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-white">
            <Link className="text-sm font-medium hover:text-primary transition-colors" href="/">الرئيسية</Link>
            <Link className="text-sm font-medium hover:text-primary transition-colors" href="/store">المتجر</Link>
            <Link className="text-sm font-medium hover:text-primary transition-colors" href="/who-are-we">من نحن</Link>
            <Link className="text-sm font-medium hover:text-primary transition-colors" href="/contact-us">اتصل بنا</Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/login" className="p-2 rounded-lg bg-white/5 border border-white/10 hover:border-primary/50 transition-colors">
            <span className="material-symbols-outlined text-white">person</span>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header