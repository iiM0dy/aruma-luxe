"use client"

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
    LuLayoutDashboard,
    LuPackage,
    LuLayers,
    LuChartBar,
    LuSettings,
    LuLogOut,
    LuSearch,
    LuBell
} from 'react-icons/lu'
import { signOut } from 'next-auth/react'

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const pathname = usePathname()

    const menuItems = [
        { name: 'لوحة القيادة', icon: LuLayoutDashboard, href: '/admin' },
        { name: 'المنتجات', icon: LuPackage, href: '/admin/products' },
    ]

    const activeItem = menuItems.find(item => pathname === item.href) || menuItems[1]

    return (
        <div className="flex h-screen bg-[#0D0D0D] text-white overflow-hidden font-sans" dir="rtl">
            {/* Sidebar */}
            <aside className="w-64 bg-[#141414] border-l border-white/5 flex flex-col">
                <div className="p-8 flex flex-col items-center">
                    <div className="w-12 h-12 bg-[#F9C02E] rounded-full flex items-center justify-center mb-4">
                        {/* Logo Icon */}
                        <div className="w-6 h-6 border-2 border-black rounded-full border-t-transparent animate-spin-slow"></div>
                    </div>
                    <h1 className="text-xl font-bold tracking-tight">Aroma Luxe</h1>
                    <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em] mt-1">لوحة التحكم</p>
                </div>

                <nav className="flex-1 px-4 mt-4 space-y-1">
                    {menuItems.map((item) => {
                        const isActive = pathname === item.href
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${isActive
                                    ? 'bg-[#F9C02E]/10 text-[#F9C02E] border-r-4 border-[#F9C02E]'
                                    : 'text-gray-400 hover:bg-white/5 hover:text-white'
                                    }`}
                            >
                                <item.icon size={20} />
                                <span className="font-medium">{item.name}</span>
                            </Link>
                        )
                    })}
                </nav>

                <div className="p-4 border-t border-white/5">
                    <button
                        onClick={() => signOut({ callbackUrl: '/login' })}
                        className="flex items-center gap-3 px-4 py-3 w-full text-red-500 hover:bg-red-500/10 rounded-xl transition-all"
                    >
                        <LuLogOut size={20} />
                        <span className="font-medium">تسجيل الخروج</span>
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col overflow-hidden">
                {/* Header */}
                <header className="h-20 bg-[#0D0D0D]/80 backdrop-blur-md border-b border-white/5 px-8 flex items-center justify-between z-10">
                    <div className="text-lg font-bold">{activeItem?.name}</div>

                    <div className="flex items-center gap-6">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="بحث عن عطر أو رقم الموديل..."
                                className="w-96 bg-[#1A1A1A] border border-white/5 rounded-xl py-2.5 pr-10 pl-4 text-sm focus:outline-none focus:border-[#F9C02E]/50 transition-all"
                            />
                            <LuSearch className="absolute right-3 top-3 text-gray-500" size={18} />
                        </div>

                        <div className="flex items-center gap-4">
                            <button className="relative p-2 text-gray-400 hover:text-white transition-colors">
                                <LuBell size={22} />
                                <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-[#0D0D0D]"></span>
                            </button>

                            <div className="flex items-center gap-3 pr-4 border-r border-white/10">
                                <div className="text-left">
                                    <p className="text-sm font-semibold">أدمن فهد</p>
                                    <p className="text-[10px] text-gray-500">المدير العام</p>
                                </div>
                                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#F9C02E] to-yellow-600 p-[2px]">
                                    <div className="w-full h-full rounded-full bg-[#1A1A1A] flex items-center justify-center overflow-hidden">
                                        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="Admin" className="w-8 h-8" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Page Content */}
                <section className="flex-1 overflow-y-auto p-8 bg-[#0D0D0D]">
                    {children}
                </section>
            </main>
        </div>
    )
}
