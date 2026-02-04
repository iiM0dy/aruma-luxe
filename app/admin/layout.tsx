"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import {
    LuLayoutDashboard,
    LuPackage,
    LuLayers,
    LuLogOut,
    LuSearch,
    LuBell,
    LuMenu,
    LuX
} from 'react-icons/lu'
import { signOut } from 'next-auth/react'

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const pathname = usePathname()
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    const menuItems = [
        { name: 'لوحة القيادة', icon: LuLayoutDashboard, href: '/admin' },
        { name: 'المنتجات', icon: LuPackage, href: '/admin/products' },
        { name: 'التصنيفات', icon: LuLayers, href: '/admin/categories' },
    ]

    const activeItem = menuItems.find(item => pathname === item.href) || menuItems[1]

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)

    return (
        <div className="flex h-screen bg-[#0D0D0D] text-white overflow-hidden font-sans" dir="rtl">
            {/* Sidebar Overlay (Mobile) */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/60 shadow-2xl backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside className={`
                fixed lg:relative z-50 h-full w-72 bg-[#141414] border-l border-white/5 flex flex-col transition-all duration-300 ease-in-out
                ${isSidebarOpen ? 'translate-x-0' : 'translate-x-[100%] lg:translate-x-0'}
            `}>
                <div className="p-8 flex flex-col items-center relative">
                    <button
                        onClick={() => setIsSidebarOpen(false)}
                        className="lg:hidden absolute top-4 left-4 p-2 text-gray-500 hover:text-white"
                    >
                        <LuX size={24} />
                    </button>

                    <div className="relative h-20 w-40 mb-4 mt-4 lg:mt-0">
                        <Image
                            src="/images/aruma-luxe-logo.png"
                            alt="Aruma Luxe"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em] mt-1 font-bold">لوحة التحكم</p>
                </div>

                <nav className="flex-1 px-4 mt-4 space-y-1">
                    {menuItems.map((item) => {
                        const isActive = pathname === item.href
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setIsSidebarOpen(false)}
                                className={`flex items-center gap-3 px-4 py-3.5 rounded-2xl transition-all duration-300 ${isActive
                                    ? 'bg-[#F9C02E] text-black shadow-lg shadow-[#F9C02E]/20 font-bold'
                                    : 'text-gray-400 hover:bg-white/5 hover:text-white'
                                    }`}
                            >
                                <item.icon size={20} />
                                <span className="text-sm">{item.name}</span>
                            </Link>
                        )
                    })}
                </nav>

                <div className="p-4 border-t border-white/5 bg-[#0D0D0D]/50">
                    <button
                        onClick={() => signOut({ callbackUrl: '/login' })}
                        className="flex items-center gap-3 px-4 py-3.5 w-full text-red-500 hover:bg-red-500/10 rounded-2xl transition-all font-bold text-sm"
                    >
                        <LuLogOut size={20} />
                        <span>تسجيل الخروج</span>
                    </button>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 flex flex-col overflow-hidden w-full">
                {/* Header */}
                <header className="h-16 lg:h-24 bg-[#0D0D0D]/80 backdrop-blur-md border-b border-white/5 px-4 lg:px-10 flex items-center justify-between z-30">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={toggleSidebar}
                            className="lg:hidden p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl transition-all"
                        >
                            <LuMenu size={24} />
                        </button>
                        <h2 className="text-base lg:text-xl font-bold tracking-tight">{activeItem?.name}</h2>
                    </div>

                    <div className="flex items-center gap-2 lg:gap-8">
                        <div className="flex items-center gap-2 lg:gap-5">

                            <div className="flex items-center gap-3 pr-2 lg:pr-5 border-r border-white/10 ml-1">
                                <div className="text-left hidden sm:block">
                                    <p className="text-xs font-bold whitespace-nowrap">المدير العام</p>
                                </div>
                                <div className="w-8 h-8 lg:w-11 lg:h-11 rounded-2xl bg-gradient-to-tr from-[#F9C02E] to-yellow-600 p-[1.5px] lg:p-[2px] rotate-3 hover:rotate-0 transition-transform cursor-pointer">
                                    <div className="w-full h-full rounded-[14px] lg:rounded-[18px] bg-[#1A1A1A] flex items-center justify-center overflow-hidden -rotate-3 hover:rotate-0 transition-transform">
                                        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="Admin" className="w-[85%] h-[85%] object-cover" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Content Section */}
                <section className="flex-1 overflow-y-auto p-4 lg:p-10 bg-[#0D0D0D]">
                    <div className="max-w-7xl mx-auto w-full">
                        {children}
                    </div>
                </section>
            </main>
        </div>
    )
}
