"use client"

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter, useParams } from 'next/navigation'
import {
    LuUpload,
    LuPlus,
    LuInfo,
    LuChevronDown,
    LuDroplets,
    LuHeart,
    LuMountain,
    LuImage,
    LuDollarSign,
    LuLoader,
    LuCheck
} from 'react-icons/lu'

interface Category {
    id: number;
    name: string;
}

export default function EditProductPage() {
    const router = useRouter()
    const params = useParams()
    const id = params.id

    const [loading, setLoading] = useState(true)
    const [saving, setSaving] = useState(false)
    const [status, setStatus] = useState('ACTIVE')
    const [categories, setCategories] = useState<Category[]>([])
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: '',
        categoryId: '',
        stock: '',
        image: '',
        topNotes: '',
        heartNotes: '',
        baseNotes: '',
        badge: '',
    })

    const [uploading, setUploading] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch Categories
                const catRes = await fetch('/api/categories')
                const cats = await catRes.json()
                if (Array.isArray(cats)) setCategories(cats)

                // Fetch Product
                if (id) {
                    const prodRes = await fetch(`/api/products/${id}`)
                    const product = await prodRes.json()
                    if (product && !product.error) {
                        setFormData({
                            name: product.name,
                            description: product.description,
                            price: product.price.toString(),
                            categoryId: product.categoryId?.toString() || (cats.length > 0 ? cats[0].id.toString() : ''),
                            stock: product.stock.toString(),
                            image: product.image,
                            topNotes: product.topNotes || '',
                            heartNotes: product.heartNotes || '',
                            baseNotes: product.baseNotes || '',
                            badge: product.badge || '',
                        })
                        setStatus(product.status)
                    }
                }
            } catch (error) {
                console.error("Failed to load data")
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [id])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (!file) return

        setUploading(true)
        const uploadData = new FormData()
        uploadData.append('file', file)

        try {
            const res = await fetch('/api/upload', {
                method: 'POST',
                body: uploadData
            })

            if (res.ok) {
                const data = await res.json()
                setFormData(prev => ({ ...prev, image: data.url }))
            } else {
                alert("فشل في رفع الصورة")
            }
        } catch (error) {
            alert("حدث خطأ أثناء الرفع")
        } finally {
            setUploading(false)
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setSaving(true)

        try {
            const res = await fetch(`/api/products/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...formData,
                    price: parseFloat(formData.price),
                    stock: parseInt(formData.stock),
                    categoryId: parseInt(formData.categoryId),
                    status
                })
            })

            if (res.ok) {
                router.push('/admin/products')
            } else {
                alert("فشل في تحديث المنتج")
            }
        } catch (error) {
            alert("حدث خطأ ما")
        } finally {
            setSaving(false)
        }
    }

    if (loading) return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center text-white space-y-4" dir="rtl">
            <LuLoader className="animate-spin text-[#F9C02E]" size={48} />
            <p className="text-sm font-black uppercase tracking-[0.3em] text-gray-500">جاري التحميل...</p>
        </div>
    )

    return (
        <form onSubmit={handleSubmit} className="max-w-6xl mx-auto space-y-6 lg:space-y-10 pb-20" dir="rtl">
            {/* Header */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6">
                <div className="space-y-2">
                    <nav className="flex items-center gap-2 text-[10px] text-gray-500 uppercase tracking-widest font-black">
                        <Link href="/admin/products" className="hover:text-primary transition-colors">المنتجات</Link>
                        <LuPlus size={10} className="rotate-45" />
                        <span className="text-gray-300">تعديل المنتج</span>
                    </nav>
                    <h1 className="text-3xl lg:text-5xl font-black tracking-tight">تعديل: {formData.name}</h1>
                </div>

                <div className="flex items-center gap-3 w-full lg:w-auto">
                    <Link
                        href="/admin/products"
                        className="flex-1 lg:flex-none px-6 py-4 bg-[#1A1A1A] border border-white/5 rounded-2xl text-xs font-black flex items-center justify-center gap-2 hover:bg-white/10 transition-all text-gray-400 hover:text-white"
                    >
                        إلغاء التعديل
                    </Link>
                    <button
                        type="submit"
                        disabled={saving || uploading}
                        className="flex-1 lg:flex-none px-10 py-4 bg-[#F9C02E] text-black rounded-2xl text-xs font-black shadow-xl shadow-[#F9C02E]/20 hover:scale-[1.03] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                        {saving ? <LuLoader className="animate-spin" size={18} /> : <LuCheck size={18} />}
                        <span>حفظ التعديلات</span>
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
                {/* Right Column: Image & Settings */}
                <div className="lg:col-span-4 space-y-6 lg:space-y-8 order-2 lg:order-1">
                    {/* Image Area */}
                    <div className="bg-[#141414] border border-white/5 p-6 rounded-[2.5rem] space-y-5">
                        <h3 className="flex items-center gap-2 font-black text-xs uppercase tracking-widest text-[#F9C02E]">
                            <LuImage size={18} />
                            صورة المنتج <span className="text-[#F9C02E]">*</span>
                        </h3>

                        <div className="relative group">
                            <input
                                type="file"
                                id="image-upload"
                                accept="image/*"
                                onChange={handleFileUpload}
                                className="hidden"
                            />
                            <label
                                htmlFor="image-upload"
                                className={`flex flex-col items-center justify-center aspect-[4/5] w-full rounded-3xl border-2 border-dashed border-white/5 bg-[#0D0D0D] cursor-pointer hover:border-[#F9C02E]/40 hover:bg-[#F9C02E]/5 transition-all overflow-hidden relative ${uploading ? 'opacity-50 pointer-events-none' : ''}`}
                            >
                                {formData.image ? (
                                    <>
                                        <img src={formData.image} alt="Preview" className="w-full h-full object-cover" />
                                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all">
                                            <div className="bg-white/10 backdrop-blur-md p-4 rounded-full border border-white/20">
                                                <LuUpload className="text-white" size={24} />
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <div className="flex flex-col items-center gap-4 text-gray-500 text-center p-6">
                                        <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-2">
                                            <LuUpload size={28} />
                                        </div>
                                        <span className="text-xs font-black block">تغيير الصورة</span>
                                    </div>
                                )}

                                {uploading && (
                                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/80 rounded-3xl z-10">
                                        <LuLoader className="text-[#F9C02E] animate-spin mb-3" size={32} />
                                        <span className="text-[10px] text-[#F9C02E] font-black uppercase tracking-[0.2em]">جاري الرفع...</span>
                                    </div>
                                )}
                            </label>
                        </div>
                    </div>

                    {/* Inventory & Status */}
                    <div className="bg-[#141414] border border-white/5 p-6 lg:p-8 rounded-[2.5rem] space-y-6">
                        <h3 className="flex items-center gap-2 font-black text-xs uppercase tracking-widest text-[#F9C02E]">
                            <LuDollarSign size={18} />
                            المخزون والسعر
                        </h3>

                        <div className="space-y-5">
                            <div className="space-y-2">
                                <label className="text-[10px] text-gray-500 uppercase block font-black pr-1">السعر النهائي <span className="text-[#F9C02E]">*</span></label>
                                <div className="relative">
                                    <input
                                        name="price"
                                        value={formData.price}
                                        onChange={handleChange}
                                        type="number"
                                        className="w-full bg-[#0D0D0D] border border-white/5 rounded-2xl py-4 px-5 text-sm font-black focus:outline-none focus:border-[#F9C02E]/50 focus:bg-[#F9C02E]/5 transition-all"
                                    />
                                    <span className="absolute left-5 top-4 text-[10px] text-gray-500 font-black">SAR</span>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] text-gray-500 uppercase block font-black pr-1">الكمية المتوفرة <span className="text-[#F9C02E]">*</span></label>
                                <input
                                    name="stock"
                                    value={formData.stock}
                                    onChange={handleChange}
                                    type="number"
                                    className="w-full bg-[#0D0D0D] border border-white/5 rounded-2xl py-4 px-5 text-sm font-black focus:outline-none focus:border-[#F9C02E]/50 focus:bg-[#F9C02E]/5 transition-all"
                                />
                            </div>
                        </div>

                        <div className="pt-6 border-t border-white/5">
                            <label className="text-[10px] text-gray-500 uppercase block mb-4 pr-1 font-black">تحديث الحالة <span className="text-[#F9C02E]">*</span></label>
                            <div className="grid grid-cols-1 gap-2">
                                <button
                                    type="button"
                                    onClick={() => setStatus('ACTIVE')}
                                    className={`flex items-center justify-between px-5 py-4 rounded-2xl border transition-all ${status === 'ACTIVE' ? 'bg-[#F9C02E] text-black border-[#F9C02E] shadow-lg shadow-[#F9C02E]/20 font-black' : 'bg-[#0D0D0D] border-white/5 text-gray-400'}`}
                                >
                                    <span className="text-xs">نشط حالياً</span>
                                    {status === 'ACTIVE' && <div className="w-2 h-2 rounded-full bg-black animate-pulse"></div>}
                                </button>
                                <button
                                    type="button"
                                    onClick={() => {
                                        setStatus('OUT_OF_STOCK')
                                        setFormData(prev => ({ ...prev, stock: '0' }))
                                    }}
                                    className={`flex items-center justify-between px-5 py-4 rounded-2xl border transition-all ${status === 'OUT_OF_STOCK' ? 'bg-red-500 text-white border-red-500 shadow-lg shadow-red-500/20 font-black' : 'bg-[#0D0D0D] border-white/5 text-gray-400'}`}
                                >
                                    <span className="text-xs">نفذ من المخزون</span>
                                    {status === 'OUT_OF_STOCK' && <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>}
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setStatus('DRAFT')}
                                    className={`flex items-center justify-between px-5 py-4 rounded-2xl border transition-all ${status === 'DRAFT' ? 'bg-white/10 text-white border-white/10 font-bold' : 'bg-[#0D0D0D] border-white/5 text-gray-400'}`}
                                >
                                    <span className="text-xs">مسودة</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Left Column: Details & Notes */}
                <div className="lg:col-span-8 space-y-6 lg:space-y-8 order-1 lg:order-2">
                    <div className="bg-[#141414] border border-white/5 p-6 lg:p-10 rounded-[2.5rem] space-y-8">
                        <h3 className="flex items-center gap-2 font-black text-xs uppercase tracking-widest text-[#F9C02E]">
                            <LuInfo size={18} />
                            هوية العطر وتفاصيله
                        </h3>

                        <div className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-[10px] text-gray-500 uppercase block font-black pr-1 tracking-widest">اسم المنتج <span className="text-[#F9C02E]">*</span></label>
                                <input
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    type="text"
                                    className="w-full bg-[#0D0D0D] border border-white/5 rounded-2xl py-4.5 px-6 text-base font-black focus:outline-none focus:border-[#F9C02E]/50 focus:bg-[#F9C02E]/2 transition-all"
                                />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] text-gray-500 uppercase block font-black pr-1 tracking-widest">التصنيف <span className="text-[#F9C02E]">*</span></label>
                                    <div className="relative">
                                        <select
                                            name="categoryId"
                                            value={formData.categoryId}
                                            onChange={handleChange}
                                            className="w-full bg-[#0D0D0D] border border-white/5 rounded-2xl py-4 px-6 text-sm font-bold focus:outline-none focus:border-[#F9C02E]/50 appearance-none cursor-pointer"
                                        >
                                            {categories.length === 0 && <option value="">جاري تحميل التصنيفات...</option>}
                                            {categories.map(cat => (
                                                <option key={cat.id} value={cat.id}>{cat.name}</option>
                                            ))}
                                        </select>
                                        <LuChevronDown className="absolute left-6 top-4.5 text-gray-500 pointer-events-none" size={18} />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] text-gray-500 uppercase block font-black pr-1 tracking-widest">وسام المنتج (Badge)</label>
                                    <input
                                        name="badge"
                                        value={formData.badge}
                                        onChange={handleChange}
                                        type="text"
                                        className="w-full bg-[#0D0D0D] border border-white/5 rounded-2xl py-4 px-6 text-sm font-bold focus:outline-none focus:border-[#F9C02E]/50"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] text-gray-500 uppercase block font-black pr-1 tracking-widest">الوصف الكامل <span className="text-[#F9C02E]">*</span></label>
                                <textarea
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    rows={8}
                                    className="w-full bg-[#0D0D0D] border border-white/5 rounded-[2rem] py-5 px-6 text-sm font-medium focus:outline-none focus:border-[#F9C02E]/50 transition-all resize-none leading-relaxed"
                                ></textarea>
                            </div>
                        </div>
                    </div>

                    {/* Olfactive Pyramid */}
                    <div className="bg-[#141414] border border-white/5 p-6 lg:p-10 rounded-[3rem] space-y-10 relative overflow-hidden">
                        <h3 className="flex items-center gap-2 font-black text-xs uppercase tracking-widest text-[#F9C02E]">
                            <LuDroplets size={18} />
                            الهرم العطري والمكونات
                        </h3>

                        <div className="grid grid-cols-1 gap-8 relative z-10">
                            {[
                                { id: 'topNotes', icon: LuMountain, label: 'الافتتاحية', val: formData.topNotes },
                                { id: 'heartNotes', icon: LuHeart, label: 'القلب', val: formData.heartNotes },
                                { id: 'baseNotes', icon: LuDroplets, label: 'القاعدة', val: formData.baseNotes },
                            ].map((note) => (
                                <div key={note.id} className="group">
                                    <label className="flex items-center gap-3 text-[10px] font-black text-gray-500 uppercase tracking-widest mb-4 group-focus-within:text-[#F9C02E] transition-all">
                                        <div className="w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center group-focus-within:bg-[#F9C02E]/10 group-focus-within:scale-110 transition-all">
                                            <note.icon size={16} />
                                        </div>
                                        {note.label} <span className="text-[#F9C02E] mr-[-10px]">*</span>
                                    </label>
                                    <input
                                        name={note.id}
                                        value={note.val}
                                        onChange={handleChange}
                                        type="text"
                                        className="w-full bg-[#0D0D0D] border border-white/5 rounded-2xl py-5 px-6 text-sm font-bold focus:outline-none focus:border-[#F9C02E]/50 focus:bg-[#F9C02E]/2 transition-all"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}
