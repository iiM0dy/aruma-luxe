"use client"

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import {
    LuPlus,
    LuPencil,
    LuTrash2,
    LuPackage,
    LuLayoutGrid,
    LuLoader,
    LuSearch,
    LuMoveVertical
} from 'react-icons/lu'

export default function AdminProductsPage() {
    const searchParams = useSearchParams()
    const globalSearch = searchParams.get('search') || ''
    const [products, setProducts] = useState<Record<string, any>[]>([])
    const [loading, setLoading] = useState(true)
    const [searchQuery, setSearchQuery] = useState(globalSearch)

    useEffect(() => {
        setSearchQuery(globalSearch)
    }, [globalSearch])

    useEffect(() => {
        fetchProducts()
    }, [])

    const fetchProducts = async () => {
        try {
            const res = await fetch('/api/products')
            const data = await res.json()
            setProducts(data)
        } catch (error) {
            console.error("Failed to fetch products")
        } finally {
            setLoading(false)
        }
    }

    const handleDelete = async (id: number) => {
        if (!confirm("هل أنت متأكد من حذف هذا المنتج؟")) return

        try {
            const res = await fetch(`/api/products/${id}`, { method: 'DELETE' })
            if (res.ok) {
                setProducts(prev => prev.filter(p => p.id !== id))
            }
        } catch (error) {
            alert("فشل الحذف")
        }
    }

    const filteredProducts = products.filter(p =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.id.toString().includes(searchQuery)
    )

    const stats = [
        { label: 'إجمالي المنتجات', value: products.length.toString(), icon: LuPackage, color: 'text-yellow-500', bg: 'bg-yellow-500/10' },
        { label: 'الفئات النشطة', value: Array.from(new Set(products.map(p => p.categoryId))).filter(Boolean).length.toString(), icon: LuLayoutGrid, color: 'text-blue-500', bg: 'bg-blue-500/10' },
        { label: 'مجموع المخزون', value: products.reduce((acc, p) => acc + (p.stock || 0), 0).toString(), icon: LuPlus, color: 'text-green-500', bg: 'bg-green-500/10' },
    ]

    return (
        <div className="space-y-6 lg:space-y-10" dir="rtl">
            {/* Stats Cards - Responsive Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
                {stats.map((stat, i) => (
                    <div key={i} className="bg-[#141414] border border-white/5 p-5 lg:p-8 rounded-[2rem] group hover:border-[#F9C02E]/30 transition-all duration-500">
                        <div className="flex justify-between items-start mb-4 lg:mb-6">
                            <div className={`${stat.bg} ${stat.color} p-3.5 rounded-2xl`}>
                                <stat.icon size={26} />
                            </div>
                            <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest">{stat.label}</p>
                        </div>
                        <div className="flex flex-col">
                            <h3 className="text-3xl lg:text-4xl font-black tracking-tight">{stat.value}</h3>
                            <div className="flex items-center gap-2 mt-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#F9C02E] animate-pulse"></span>
                                <p className="text-[10px] text-gray-500 font-bold uppercase">إحصائيات مباشرة</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Toolbar - Responsive Layout */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-[#141414]/50 p-4 lg:p-6 rounded-[2rem] border border-white/5">
                <div className="flex flex-col gap-1">
                    <h2 className="text-xl font-bold">قائمة المنتجات</h2>
                    <p className="text-xs text-gray-500 font-medium">إدارة مخزون العطور الخاص بك</p>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                    <div className="relative flex-1 sm:w-64">
                        <input
                            type="text"
                            placeholder="بحث في المنتجات..."
                            value={searchQuery}
                            onChange={(e) => {
                                const val = e.target.value
                                setSearchQuery(val)
                                const params = new URLSearchParams(searchParams.toString())
                                if (val) params.set('search', val)
                                else params.delete('search')
                                window.history.replaceState(null, '', `?${params.toString()}`)
                            }}
                            className="w-full bg-[#0D0D0D] border border-white/5 rounded-xl py-3 pr-10 pl-4 text-xs focus:outline-none focus:border-[#F9C02E]/50 transition-all font-sans"
                        />
                        <LuSearch className="absolute right-3.5 top-3.5 text-gray-500" size={16} />
                    </div>

                    <Link
                        href="/admin/products/new"
                        className="bg-[#F9C02E] hover:bg-[#E5AF29] text-black font-black px-5 py-3 rounded-xl flex items-center gap-2 transition-all active:scale-95 shadow-lg shadow-[#F9C02E]/20 text-sm whitespace-nowrap"
                    >
                        <LuPlus size={18} />
                        <span className="hidden xs:inline">إضافة منتج</span>
                        <span className="xs:hidden">أضف</span>
                    </Link>
                </div>
            </div>

            {/* Product Table / Mobile List */}
            <div className="bg-[#141414] border border-white/5 rounded-[2.5rem] overflow-hidden min-h-[400px] shadow-2xl">
                {loading ? (
                    <div className="flex flex-col items-center justify-center h-[400px] text-gray-500 gap-4">
                        <div className="relative">
                            <LuLoader size={48} className="animate-spin text-[#F9C02E]" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="w-2 h-2 bg-white rounded-full"></span>
                            </div>
                        </div>
                        <p className="text-sm font-bold tracking-widest uppercase">جاري التحميل...</p>
                    </div>
                ) : filteredProducts.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-[400px] text-gray-500 gap-6">
                        <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center">
                            <LuPackage size={40} className="opacity-20" />
                        </div>
                        <div className="text-center">
                            <p className="text-lg font-bold text-white">لا توجد منتجات</p>
                            <p className="text-sm mt-1">ابدأ بإضافة منتجاتك الأولى إلى المتجر</p>
                        </div>
                        <Link href="/admin/products/new" className="bg-white/5 hover:bg-white/10 text-[#F9C02E] px-8 py-3 rounded-2xl border border-white/5 transition-all font-bold">إنشاء منتج جديد</Link>
                    </div>
                ) : (
                    <>
                        {/* Desktop Table View */}
                        <div className="hidden lg:block overflow-x-auto">
                            <table className="w-full text-right border-collapse">
                                <thead>
                                    <tr className="border-b border-white/5 text-gray-500 text-[10px] uppercase font-black tracking-[0.2em] bg-white/[0.01]">
                                        <th className="px-8 py-6">المنتج</th>
                                        <th className="px-8 py-6">الفئة</th>
                                        <th className="px-8 py-6">السعر</th>
                                        <th className="px-8 py-6">المخزون</th>
                                        <th className="px-8 py-6 text-left">التعديل</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/5">
                                    {filteredProducts.map((product) => (
                                        <tr key={product.id} className="group hover:bg-white/[0.02] transition-all duration-300">
                                            <td className="px-8 py-6">
                                                <div className="flex items-center gap-5">
                                                    <div className="w-16 h-16 rounded-2xl overflow-hidden bg-[#0D0D0D] border border-white/5 p-1 group-hover:border-[#F9C02E]/30 transition-colors">
                                                        <img src={product.image} alt={product.name} className="w-full h-full object-cover rounded-[12px]" />
                                                    </div>
                                                    <div>
                                                        <p className="font-black text-base tracking-tight group-hover:text-[#F9C02E] transition-colors">{product.name}</p>
                                                        <p className="text-[10px] text-gray-500 font-bold mt-1" dir="ltr">PROD-{product.id.toString().padStart(4, '0')}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-8 py-4">
                                                <span className="text-[10px] font-black uppercase tracking-widest bg-white/5 px-4 py-2 rounded-xl text-gray-400 border border-white/5 group-hover:border-white/10 transition-all">
                                                    {product.category?.name || 'عام'}
                                                </span>
                                            </td>
                                            <td className="px-8 py-4">
                                                <div className="flex flex-col">
                                                    <span className="font-black text-lg text-white">{product.price}</span>
                                                    <span className="text-[8px] text-gray-500 font-bold uppercase tracking-widest">ريال سعودي</span>
                                                </div>
                                            </td>
                                            <td className="px-8 py-4">
                                                <div className="flex items-center gap-3">
                                                    <div className={`w-2 h-2 rounded-full ${product.stock > 10 ? 'bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.4)]' : product.stock > 0 ? 'bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.4)]' : 'bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.4)]'}`}></div>
                                                    <span className="text-sm font-bold">{product.stock} قنينة</span>
                                                </div>
                                            </td>
                                            <td className="px-8 py-4 text-left">
                                                <div className="flex items-center justify-end gap-3">
                                                    <Link
                                                        href={`/admin/products/${product.id}/edit`}
                                                        className="p-3 bg-white/5 hover:bg-[#F9C02E]/10 rounded-2xl text-gray-400 hover:text-[#F9C02E] border border-white/5 hover:border-[#F9C02E]/30 transition-all"
                                                    >
                                                        <LuPencil size={18} />
                                                    </Link>
                                                    <button
                                                        onClick={() => handleDelete(product.id)}
                                                        className="p-3 bg-red-500/5 hover:bg-red-500/10 rounded-2xl text-red-500/50 hover:text-red-500 border border-white/5 hover:border-red-500/30 transition-all"
                                                    >
                                                        <LuTrash2 size={18} />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Mobile List View */}
                        <div className="lg:hidden p-4 space-y-4">
                            {filteredProducts.map((product) => (
                                <div key={product.id} className="bg-[#0D0D0D] border border-white/5 rounded-3xl p-5 relative overflow-hidden group">
                                    <div className="absolute top-0 left-0 w-1 h-full bg-[#F9C02E]/20 group-hover:bg-[#F9C02E] transition-all"></div>

                                    <div className="flex items-center gap-4 mb-5">
                                        <div className="w-20 h-20 rounded-2xl overflow-hidden bg-[#141414] border border-white/5">
                                            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-black text-lg group-hover:text-[#F9C02E] transition-colors">{product.name}</h3>
                                            <div className="flex items-center gap-2 mt-1">
                                                <span className="text-[10px] bg-white/5 px-2 py-1 rounded-md text-gray-500 font-bold uppercase tracking-widest">{product.category?.name || 'عام'}</span>
                                                <span className="text-[10px] text-gray-600 font-bold" dir="ltr">#{product.id}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5">
                                        <div>
                                            <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest mb-1">السعر</p>
                                            <p className="font-black text-primary">{product.price} ر.س</p>
                                        </div>
                                        <div>
                                            <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest mb-1">المخزون</p>
                                            <div className="flex items-center gap-2">
                                                <div className={`w-1.5 h-1.5 rounded-full ${product.stock > 10 ? 'bg-green-500' : 'bg-orange-500'}`}></div>
                                                <p className="font-bold text-sm">{product.stock} قنينة</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2 mt-5">
                                        <Link
                                            href={`/admin/products/${product.id}/edit`}
                                            className="flex-1 bg-white/5 hover:bg-white/10 py-3 rounded-xl flex items-center justify-center gap-2 text-sm font-bold border border-white/5 transition-all"
                                        >
                                            <LuPencil size={16} />
                                            <span>تعديل</span>
                                        </Link>
                                        <button
                                            onClick={() => handleDelete(product.id)}
                                            className="w-12 bg-red-500/10 hover:bg-red-500/20 text-red-500 py-3 rounded-xl flex items-center justify-center border border-red-500/10 transition-all"
                                        >
                                            <LuTrash2 size={16} />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}
