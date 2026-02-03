"use client"

import React, { useEffect, useState } from 'react'
import { LuUsers, LuPlus, LuPackage, LuTrendingUp, LuShoppingCart, LuArrowUpRight, LuClock } from 'react-icons/lu'
import Link from 'next/link'

export default function AdminDashboard() {
    const [stats, setStats] = useState({
        products: 0,
        categories: 0,
    })

    useEffect(() => {
        fetch('/api/products')
            .then(res => res.json())
            .then(data => {
                if (Array.isArray(data)) {
                    setStats({
                        products: data.length,
                        categories: Array.from(new Set(data.map((p: any) => p.categoryId))).filter(Boolean).length
                    })
                }
            })
    }, [])

    const cards = [
        { label: 'إجمالي العطور', value: stats.products, icon: LuPackage, color: 'text-[#F9C02E]', bg: 'bg-[#F9C02E]/10' },
        { label: 'الأصناف الفعالة', value: stats.categories, icon: LuTrendingUp, color: 'text-blue-500', bg: 'bg-blue-500/10' },
        { label: 'عملاء النخبة', value: '1', icon: LuUsers, color: 'text-green-500', bg: 'bg-green-500/10' },
        { label: 'طلبات جديدة', value: '0', icon: LuShoppingCart, color: 'text-red-500', bg: 'bg-red-500/10' },
    ]

    return (
        <div className="space-y-8 lg:space-y-12" dir="rtl">
            {/* Welcome Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 bg-gradient-to-l from-[#141414] to-transparent p-6 lg:p-10 rounded-[2.5rem] border border-white/5 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-64 h-64 bg-[#F9C02E]/5 blur-[100px] rounded-full -translate-x-1/2 -translate-y-1/2"></div>

                <div className="relative z-10">
                    <h1 className="text-3xl lg:text-5xl font-black tracking-tight text-white mb-2 lg:mb-3">أهلاً بك، فهد</h1>
                    <p className="text-gray-500 text-sm lg:text-base font-medium flex items-center gap-2">
                        <LuClock className="text-[#F9C02E]" size={18} />
                        نظرة سريعة على أداء متجر <span className="text-white font-bold">أروما لوكس</span> اليوم
                    </p>
                </div>

                <div className="flex items-center gap-3 relative z-10">
                    <div className="hidden lg:flex flex-col text-left border-l border-white/10 pl-6 ml-6">
                        <span className="text-[10px] text-gray-500 font-black uppercase tracking-widest mb-1">حالة السيرفر</span>
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></span>
                            <span className="text-xs font-bold">متصل ومستقر</span>
                        </div>
                    </div>
                    <Link href="/admin/products/new" className="flex items-center gap-3 bg-[#F9C02E] text-black px-6 py-4 rounded-2xl font-black text-sm  hover:scale-[1.05] transition-all active:scale-95">
                        <LuPlus size={20} />
                        <span>إضافة عطر</span>
                    </Link>
                </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
                {cards.map((card, i) => (
                    <div key={i} className="bg-[#141414] border border-white/5 p-6 lg:p-8 rounded-[2rem] hover:border-[#F9C02E]/30 transition-all duration-500 group relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-[40px] rounded-full translate-x-1/2 -translate-y-1/2 group-hover:bg-[#F9C02E]/10 transition-colors"></div>

                        <div className="flex justify-between items-start mb-6 relative z-10">
                            <div className={`${card.bg} ${card.color} p-4 rounded-2xl`}>
                                <card.icon size={26} />
                            </div>
                            <LuArrowUpRight size={20} className="text-gray-600 group-hover:text-white transition-colors" />
                        </div>

                        <div className="relative z-10">
                            <p className="text-gray-500 font-black text-[10px] uppercase tracking-[0.2em] mb-1.5">{card.label}</p>
                            <h3 className="text-4xl font-black group-hover:scale-105 transition-transform origin-right tracking-tight">{card.value}</h3>
                        </div>
                    </div>
                ))}
            </div>

            {/* Main Dashboard Sections */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
                {/* Visual Placeholder Section */}
                <div className="lg:col-span-8 bg-[#141414] border border-white/5 p-8 lg:p-12 rounded-[2.5rem] relative overflow-hidden group">
                    <div className="flex items-center justify-between mb-10 relative z-10">
                        <div className="space-y-1">
                            <h3 className="text-xl font-bold">تحليلات المبيعات القادمة</h3>
                            <p className="text-xs text-gray-500 font-medium">نظام مراقبة الأداء الذكي</p>
                        </div>
                        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-gray-500">
                            <LuTrendingUp size={20} />
                        </div>
                    </div>

                    <div className="flex flex-col items-center justify-center py-12 space-y-6 relative z-10">
                        <div className="w-24 h-24 bg-gradient-to-tr from-white/5 to-white/0 rounded-full flex items-center justify-center border border-white/5 group-hover:scale-110 transition-all duration-700">
                            <LuTrendingUp size={40} className="text-gray-700 opacity-20" />
                        </div>
                        <div className="text-center max-w-sm">
                            <p className="text-gray-500 text-sm leading-relaxed font-medium">سيتم ربط نظام تتبع المبيعات والطلبات قريباً لتوفير رؤية متكاملة لنمو متجرك.</p>
                        </div>
                    </div>

                    <div className="absolute bottom-0 right-0 left-0 h-1 bg-gradient-to-r from-transparent via-[#F9C02E]/20 to-transparent"></div>
                </div>

                {/* Quick Actions / Shortcuts */}
                <div className="lg:col-span-4 space-y-6 lg:space-y-8">
                    <div className="bg-[#141414] border border-white/5 p-8 rounded-[2.5rem] flex flex-col items-center justify-center text-center space-y-6 hover:border-[#F9C02E]/20 transition-all cursor-pointer group shadow-2xl relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#F9C02E]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                        <Link href="/admin/products/new" className="flex flex-col items-center gap-5 relative z-10">
                            <div className="w-20 h-20 bg-[#F9C02E] text-black rounded-3xl flex items-center justify-center shadow-2xl shadow-[#F9C02E]/30 group-hover:rotate-12 transition-all duration-500 scale-90 group-hover:scale-100">
                                <LuPlus size={40} strokeWidth={3} />
                            </div>
                            <div className="space-y-1">
                                <p className="font-black text-lg">إدارة سريعة</p>
                                <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest">أضف عطراً جديداً الآن</p>
                            </div>
                        </Link>
                    </div>

                    <div className="bg-[#141414] border border-white/5 p-8 rounded-[2.5rem] flex flex-col space-y-6">
                        <h4 className="font-black text-[10px] uppercase tracking-widest text-[#F9C02E]">اختصارات سريعة</h4>
                        <div className="space-y-3">
                            <Link href="/store" target="_blank" className="flex items-center justify-between p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-all border border-white/5 group">
                                <div className="flex items-center gap-3">
                                    <LuShoppingCart className="text-gray-500 group-hover:text-white transition-colors" size={18} />
                                    <span className="text-xs font-bold">عرض المتجر</span>
                                </div>
                                <LuArrowUpRight className="text-gray-700 group-hover:text-[#F9C02E] transition-colors" size={16} />
                            </Link>
                            <Link href="/admin/products" className="flex items-center justify-between p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-all border border-white/5 group">
                                <div className="flex items-center gap-3">
                                    <LuPackage className="text-gray-500 group-hover:text-white transition-colors" size={18} />
                                    <span className="text-xs font-bold">كل المنتجات</span>
                                </div>
                                <LuArrowUpRight className="text-gray-700 group-hover:text-[#F9C02E] transition-colors" size={16} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
