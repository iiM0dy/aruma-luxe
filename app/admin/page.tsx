"use client"

import React, { useEffect, useState } from 'react'
import { LuUsers, LuPlus, LuPackage, LuTrendingUp, LuShoppingCart } from 'react-icons/lu'
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
                setStats({
                    products: data.length,
                    categories: Array.from(new Set(data.map((p: any) => p.category))).length
                })
            })
    }, [])

    const cards = [
        { label: 'إجمالي المنتجات', value: stats.products, icon: LuPackage, color: 'text-[#F9C02E]' },
        { label: 'الفئات النشطة', value: stats.categories, icon: LuTrendingUp, color: 'text-blue-500' },
        { label: 'إجمالي المستخدمين', value: '1', icon: LuUsers, color: 'text-green-500' },
        { label: 'الطلبات الجديدة', value: '0', icon: LuShoppingCart, color: 'text-red-500' },
    ]

    return (
        <div className="space-y-10" dir="rtl">
            <div>
                <h1 className="text-4xl font-bold tracking-tight">أهلاً بك، فهد</h1>
                <p className="text-gray-500 mt-2">نظرة عامة على متجر أروما لوكس اليوم</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {cards.map((card, i) => (
                    <div key={i} className="bg-[#141414] border border-white/5 p-8 rounded-3xl hover:border-white/10 transition-all group">
                        <div className="flex justify-between items-center mb-6">
                            <div className={`p-4 rounded-2xl bg-white/5 ${card.color}`}>
                                <card.icon size={28} />
                            </div>
                        </div>
                        <p className="text-gray-500 font-bold text-xs uppercase tracking-widest">{card.label}</p>
                        <h3 className="text-4xl font-bold mt-2 group-hover:scale-105 transition-transform origin-right">{card.value}</h3>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-[#141414] border border-white/5 p-8 rounded-[2rem] h-64 flex flex-col items-center justify-center text-center space-y-4">
                    <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center text-gray-700">
                        <LuTrendingUp size={32} />
                    </div>
                    <p className="text-gray-500 text-sm">إحصائيات المبيعات التفصيلية ستظهر هنا قريباً</p>
                </div>
                <div className="bg-[#141414] border border-white/5 p-8 rounded-[2rem] h-64 flex flex-col items-center justify-center text-center space-y-4 hover:border-[#F9C02E]/20 transition-all cursor-pointer group">
                    <Link href="/admin/products/new" className="flex flex-col items-center gap-4">
                        <div className="w-16 h-16 bg-[#F9C02E]/10 rounded-full flex items-center justify-center text-[#F9C02E] group-hover:scale-110 transition-transform">
                            <LuPlus size={32} />
                        </div>
                        <p className="font-bold">إضافة منتج جديد بسرعة</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}
