"use client"

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import {
    LuPlus,
    LuPencil,
    LuTrash2,
    LuPackage,
    LuLayoutGrid,
    LuLoader,
    LuDollarSign,
    LuSearch
} from 'react-icons/lu'

export default function AdminProductsPage() {
    const [products, setProducts] = useState<any[]>([])
    const [loading, setLoading] = useState(true)

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

    const stats = [
        { label: 'إجمالي المنتجات', value: products.length.toString(), icon: LuPackage, color: 'text-yellow-500', bg: 'bg-yellow-500/10' },
        { label: 'الفئات النشطة', value: Array.from(new Set(products.map(p => p.categoryId))).filter(Boolean).length.toString(), icon: LuLayoutGrid, color: 'text-blue-500', bg: 'bg-blue-500/10' },
        { label: 'مجموع المخزون', value: products.reduce((acc, p) => acc + (p.stock || 0), 0).toString(), icon: LuPlus, color: 'text-green-500', bg: 'bg-green-500/10' },
    ]

    return (
        <div className="space-y-8" dir="rtl">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {stats.map((stat, i) => (
                    <div key={i} className="bg-[#141414] border border-white/5 p-6 rounded-2xl group hover:border-[#F9C02E]/30 transition-all">
                        <div className="flex justify-between items-start mb-4">
                            <div className={`${stat.bg} ${stat.color} p-3 rounded-xl`}>
                                <stat.icon size={24} />
                            </div>
                            <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">{stat.label}</p>
                        </div>
                        <div className="flex flex-col">
                            <h3 className="text-3xl font-bold">{stat.value}</h3>
                            <p className="text-[10px] text-gray-500 mt-2">محدث الآن</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Toolbar */}
            <div className="flex justify-between items-center">
                <Link
                    href="/admin/products/new"
                    className="bg-[#F9C02E] hover:bg-[#E5AF29] text-black font-bold px-6 py-3 rounded-xl flex items-center gap-2 transition-all active:scale-95"
                >
                    <LuPlus size={20} />
                    <span>إضافة منتج جديد</span>
                </Link>

                <div className="flex items-center gap-2 text-sm text-gray-400">
                    عرض {products.length} منتجات
                </div>
            </div>

            {/* Product Table */}
            <div className="bg-[#141414] border border-white/5 rounded-2xl overflow-hidden min-h-[400px]">
                {loading ? (
                    <div className="flex flex-col items-center justify-center h-[400px] text-gray-500 gap-4">
                        <LuLoader size={40} className="animate-spin text-[#F9C02E]" />
                        <p>جاري تحميل المنتجات...</p>
                    </div>
                ) : products.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-[400px] text-gray-500 gap-4">
                        < LuPackage size={60} className="opacity-10" />
                        <p className="text-lg">لا توجد منتجات حالياً</p>
                        <Link href="/admin/products/new" className="text-[#F9C02E] border-b border-[#F9C02E]/30 hover:border-[#F9C02E] pb-1">أضف منتجك الأول</Link>
                    </div>
                ) : (
                    <table className="w-full text-right border-collapse">
                        <thead>
                            <tr className="border-b border-white/5 text-gray-500 text-[10px] uppercase font-bold tracking-widest bg-white/[0.01]">
                                <th className="px-6 py-4">المنتج</th>
                                <th className="px-6 py-4">الفئة</th>
                                <th className="px-6 py-4">السعر</th>
                                <th className="px-6 py-4">الحالة</th>
                                <th className="px-6 py-4 text-left">الإجراءات</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {products.map((product) => (
                                <tr key={product.id} className="group hover:bg-white/[0.02] transition-colors">
                                    <td className="px-6 py-6">
                                        <div className="flex items-center gap-4">
                                            <div className="w-14 h-14 rounded-xl overflow-hidden bg-[#0D0D0D] border border-white/5 p-1">
                                                <img src={product.image || 'https://via.placeholder.com/200'} alt={product.nameAr} className="w-full h-full object-cover rounded-lg" />
                                            </div>
                                            <div>
                                                <p className="font-bold text-sm tracking-tight">{product.nameAr}</p>
                                                <p className="text-[10px] text-gray-500 mt-0.5" dir="ltr">{product.sku}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="text-[10px] font-bold bg-white/5 px-3 py-1.5 rounded-lg text-gray-400 border border-white/5">
                                            {product.category?.nameAr || 'غير محدد'}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 font-bold text-sm text-[#F9C02E]">
                                        {product.price} <span className="text-[10px] opacity-60">SAR</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`text-[10px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 w-fit ${product.stock > 10 ? 'text-green-500 bg-green-500/10' : 'text-orange-500 bg-orange-500/10'
                                            }`}>
                                            <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
                                            {product.stock > 10 ? 'متوفر' : 'كمية منخفضة'}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-left">
                                        <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <Link
                                                href={`/admin/products/${product.id}/edit`}
                                                className="p-2.5 bg-white/5 hover:bg-white/10 rounded-xl text-gray-400 hover:text-white transition-all"
                                            >
                                                <LuPencil size={18} />
                                            </Link>
                                            <button
                                                onClick={() => handleDelete(product.id)}
                                                className="p-2.5 bg-red-500/10 hover:bg-red-500/20 rounded-xl text-red-500 transition-all"
                                            >
                                                <LuTrash2 size={18} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    )
}
