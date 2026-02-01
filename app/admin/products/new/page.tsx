"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
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
    LuEye,
    LuLoader
} from 'react-icons/lu'

export default function AddProductPage() {
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [status, setStatus] = useState('ACTIVE')
    const [formData, setFormData] = useState({
        nameAr: '',
        nameEn: '',
        descriptionAr: '',
        descriptionEn: '',
        price: '',
        category: 'خشبية وشرقية',
        stock: '',
        sku: '',
        image: '',
        topNotes: '',
        heartNotes: '',
        baseNotes: '',
    })

    const [uploading, setUploading] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (!file) return

        setUploading(true)
        const formData = new FormData()
        formData.append('file', file)

        try {
            const res = await fetch('/api/upload', {
                method: 'POST',
                body: formData
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
        if (!formData.nameAr || !formData.nameEn || !formData.price) {
            alert("يرجى ملء الحقول الأساسية")
            return
        }
        setLoading(true)

        try {
            const res = await fetch('/api/products', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...formData, status })
            })

            if (res.ok) {
                router.push('/admin/products')
            } else {
                const err = await res.json()
                alert(err.error || "فشل في إضافة المنتج")
            }
        } catch (error) {
            alert("حدث خطأ ما")
        } finally {
            setLoading(false)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="max-w-6xl mx-auto space-y-8" dir="rtl">
            {/* Breadcrumbs & Header */}
            <div className="flex justify-between items-end">
                <div>
                    <nav className="flex items-center gap-2 text-[10px] text-gray-500 uppercase tracking-widest mb-2 font-bold">
                        <Link href="/admin">لوحة القيادة</Link>
                        <LuPlus size={10} />
                        <Link href="/admin/products">المنتجات</Link>
                        <LuPlus size={10} />
                        <span className="text-gray-300">إضافة منتج جديد</span>
                    </nav>
                    <h1 className="text-4xl font-bold tracking-tight">إضافة منتج فاخر جديد</h1>
                    <p className="text-gray-500 mt-2">أضف تفاصيل العطر الحصري الخاص بك إلى المتجر</p>
                </div>

                <div className="flex gap-4">
                    <button type="button" className="px-6 py-3 bg-[#1A1A1A] border border-white/5 rounded-xl text-sm font-bold flex items-center gap-2 hover:bg-white/5 transition-all">
                        <LuEye size={18} />
                        <span>معاينة في الموقع</span>
                    </button>
                    <button
                        type="submit"
                        disabled={loading || uploading}
                        className="px-8 py-3 bg-[#F9C02E] text-black rounded-xl text-sm font-bold shadow-lg shadow-[#F9C02E]/20 hover:scale-[1.02] transition-all flex items-center gap-2 disabled:opacity-50"
                    >
                        {(loading || uploading) && <LuLoader className="animate-spin" size={18} />}
                        حفظ التغييرات
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* Left Column: Image Uploads */}
                <div className="lg:col-span-1 space-y-8">
                    {/* Image Upload Area */}
                    <div className="bg-[#141414] border border-white/5 p-6 rounded-3xl space-y-4">
                        <h3 className="flex items-center gap-2 font-bold text-sm">
                            <LuImage className="text-[#F9C02E]" />
                            صورة المنتج
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
                                className={`flex flex-col items-center justify-center aspect-[4/5] w-full rounded-2xl border-2 border-dashed border-white/10 bg-[#0D0D0D] cursor-pointer hover:border-[#F9C02E]/40 hover:bg-white/5 transition-all overflow-hidden relative ${uploading ? 'opacity-50 pointer-events-none' : ''}`}
                            >
                                {formData.image ? (
                                    <>
                                        <img src={formData.image} alt="Preview" className="w-full h-full object-cover" />
                                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                                            <LuUpload className="text-white" size={32} />
                                        </div>
                                    </>
                                ) : (
                                    <div className="flex flex-col items-center gap-3 text-gray-500">
                                        <LuUpload size={32} />
                                        <span className="text-xs font-bold">اضغط لرفع صورة من جهازك</span>
                                        <p className="text-[10px] opacity-60">PNG, JPG حتى 5MB</p>
                                    </div>
                                )}

                                {uploading && (
                                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 rounded-2xl">
                                        <LuLoader className="text-[#F9C02E] animate-spin mb-2" size={32} />
                                        <span className="text-xs text-[#F9C02E] font-bold">جاري الرفع...</span>
                                    </div>
                                )}
                            </label>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] text-gray-500 uppercase block mr-1 font-bold">أو رابط صورة مباشر</label>
                            <input
                                name="image"
                                value={formData.image}
                                onChange={handleChange}
                                type="text"
                                placeholder="https://..."
                                className="w-full bg-[#0D0D0D] border border-white/5 rounded-xl py-3 px-4 text-xs focus:outline-none focus:border-[#F9C02E]/50 text-gray-400"
                            />
                        </div>
                    </div>

                    {/* Pricing & Stock */}
                    <div className="bg-[#141414] border border-white/5 p-6 rounded-3xl space-y-6">
                        <h3 className="flex items-center gap-2 font-bold text-sm">
                            <LuDollarSign className="text-[#F9C02E]" />
                            التسعير والمخزون
                        </h3>

                        <div className="space-y-4">
                            <div>
                                <label className="text-[10px] text-gray-500 uppercase block mb-1.5 mr-1 font-bold">السعر (ريال سعودي)</label>
                                <div className="relative">
                                    <input
                                        name="price"
                                        value={formData.price}
                                        onChange={handleChange}
                                        type="number"
                                        placeholder="750"
                                        className="w-full bg-[#0D0D0D] border border-white/5 rounded-xl py-3 px-4 text-sm focus:outline-none focus:border-[#F9C02E]/50"
                                    />
                                    <span className="absolute left-4 top-3 text-[10px] text-gray-500 font-bold">SAR</span>
                                </div>
                            </div>

                            <div>
                                <label className="text-[10px] text-gray-500 uppercase block mb-1.5 mr-1 font-bold">الفئة</label>
                                <div className="relative">
                                    <select
                                        name="category"
                                        value={formData.category}
                                        onChange={handleChange}
                                        className="w-full bg-[#0D0D0D] border border-white/5 rounded-xl py-3 px-4 text-sm focus:outline-none focus:border-[#F9C02E]/50 appearance-none cursor-pointer"
                                    >
                                        <option>خشبية وشرقية</option>
                                        <option>زهرية</option>
                                        <option>منعشة</option>
                                    </select>
                                    <LuChevronDown className="absolute left-4 top-3.5 text-gray-500 pointer-events-none" size={16} />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="text-[10px] text-gray-500 uppercase block mb-1.5 mr-1 font-bold">الكمية المتوفرة</label>
                                    <input
                                        name="stock"
                                        value={formData.stock}
                                        onChange={handleChange}
                                        type="number"
                                        placeholder="24"
                                        className="w-full bg-[#0D0D0D] border border-white/5 rounded-xl py-3 px-4 text-sm focus:outline-none focus:border-[#F9C02E]/50"
                                    />
                                </div>
                                <div>
                                    <label className="text-[10px] text-gray-500 uppercase block mb-1.5 mr-1 font-bold">رقم الموديل (SKU)</label>
                                    <input
                                        name="sku"
                                        value={formData.sku}
                                        onChange={handleChange}
                                        type="text"
                                        placeholder="AL-0000"
                                        className="w-full bg-[#0D0D0D] border border-white/5 rounded-xl py-3 px-4 text-sm focus:outline-none focus:border-[#F9C02E]/50"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="pt-4 border-t border-white/5">
                            <label className="text-[10px] text-gray-500 uppercase block mb-3 mr-1 font-bold">حالة المنتج</label>
                            <div className="grid grid-cols-2 gap-2 p-1 bg-[#0D0D0D] rounded-xl border border-white/5">
                                <button
                                    type="button"
                                    onClick={() => setStatus('DRAFT')}
                                    className={`py-2 rounded-lg text-xs font-bold transition-all ${status === 'DRAFT' ? 'bg-white/5 text-white' : 'text-gray-500 hover:text-gray-300'}`}
                                >
                                    مسودة
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setStatus('ACTIVE')}
                                    className={`py-2 rounded-lg text-xs font-bold transition-all ${status === 'ACTIVE' ? 'bg-[#F9C02E] text-black' : 'text-gray-500 hover:text-gray-300'}`}
                                >
                                    نشط
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Main Info & Pyramid */}
                <div className="lg:col-span-2 space-y-8">
                    {/* Product Identity */}
                    <div className="bg-[#141414] border border-white/5 p-8 rounded-[2rem] space-y-6">
                        <h3 className="flex items-center gap-2 font-bold text-sm">
                            <LuInfo className="text-[#F9C02E]" />
                            هوية المنتج
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="text-[10px] text-gray-500 uppercase block mb-1.5 mr-1 font-bold">اسم المنتج (بالعربية)</label>
                                <input
                                    name="nameAr"
                                    value={formData.nameAr}
                                    onChange={handleChange}
                                    type="text"
                                    placeholder="مثل: عطر العمود الملكي"
                                    className="w-full bg-[#0D0D0D] border border-white/5 rounded-xl py-3.5 px-4 text-sm focus:outline-none focus:border-[#F9C02E]/50 transition-all font-medium"
                                />
                            </div>
                            <div>
                                <label className="text-[10px] text-gray-500 uppercase block mb-1.5 mr-1 font-bold text-left" dir="ltr">Product Name (English)</label>
                                <input
                                    name="nameEn"
                                    value={formData.nameEn}
                                    onChange={handleChange}
                                    type="text"
                                    placeholder="Example: Royal Oud"
                                    className="w-full bg-[#0D0D0D] border border-white/5 rounded-xl py-3.5 px-4 text-sm focus:outline-none focus:border-[#F9C02E]/50 transition-all font-medium text-left" dir="ltr"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="text-[10px] text-gray-500 uppercase block mb-1.5 mr-1 font-bold">وصف العطر (بالعربية)</label>
                            <textarea
                                name="descriptionAr"
                                value={formData.descriptionAr}
                                onChange={handleChange}
                                rows={6}
                                placeholder="اكتب قصة هذا العطر ومكوناته الفريدة..."
                                className="w-full bg-[#0D0D0D] border border-white/5 rounded-2xl py-4 px-4 text-sm focus:outline-none focus:border-[#F9C02E]/50 transition-all resize-none leading-relaxed"
                            ></textarea>
                        </div>
                    </div>

                    {/* Olfactive Pyramid */}
                    <div className="bg-[#141414] border border-white/5 p-8 rounded-[2rem] space-y-8">
                        <h3 className="flex items-center gap-2 font-bold text-sm">
                            <LuDroplets className="text-[#F9C02E]" />
                            الهرم العطري (نوتات العطر)
                        </h3>

                        <div className="space-y-6">
                            {/* Top Notes */}
                            <div className="group">
                                <div className="flex items-center justify-between mb-3">
                                    <label className="flex items-center gap-2 text-xs font-bold text-gray-400 group-focus-within:text-[#F9C02E] transition-colors">
                                        <LuMountain size={16} />
                                        المكونات العليا (Top Notes)
                                    </label>
                                </div>
                                <input
                                    name="topNotes"
                                    value={formData.topNotes}
                                    onChange={handleChange}
                                    type="text"
                                    placeholder="مثل: البرغموت، الليمون، الفلفل الوردي"
                                    className="w-full bg-[#0D0D0D] border border-white/5 rounded-xl py-4 px-5 text-sm focus:outline-none focus:border-[#F9C02E]/50 transition-all"
                                />
                            </div>

                            {/* Heart Notes */}
                            <div className="group">
                                <div className="flex items-center justify-between mb-3">
                                    <label className="flex items-center gap-2 text-xs font-bold text-gray-400 group-focus-within:text-[#F9C02E] transition-colors">
                                        <LuHeart size={16} />
                                        قلب العطر (Heart Notes)
                                    </label>
                                </div>
                                <input
                                    name="heartNotes"
                                    value={formData.heartNotes}
                                    onChange={handleChange}
                                    type="text"
                                    placeholder="مثل: الياسمين، الورد، الباتشولي"
                                    className="w-full bg-[#0D0D0D] border border-white/5 rounded-xl py-4 px-5 text-sm focus:outline-none focus:border-[#F9C02E]/50 transition-all"
                                />
                            </div>

                            {/* Base Notes */}
                            <div className="group">
                                <div className="flex items-center justify-between mb-3">
                                    <label className="flex items-center gap-2 text-xs font-bold text-gray-400 group-focus-within:text-[#F9C02E] transition-colors">
                                        <LuDroplets size={16} />
                                        قاعدة العطر (Base Notes)
                                    </label>
                                </div>
                                <input
                                    name="baseNotes"
                                    value={formData.baseNotes}
                                    onChange={handleChange}
                                    type="text"
                                    placeholder="مثل: خشب العود، المسك، العنبر"
                                    className="w-full bg-[#0D0D0D] border border-white/5 rounded-xl py-4 px-5 text-sm focus:outline-none focus:border-[#F9C02E]/50 transition-all"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Form Actions (Bottom) */}
                    <div className="flex justify-end gap-3 pt-4">
                        <Link href="/admin/products" className="px-10 py-3 rounded-xl text-gray-400 font-bold hover:bg-white/5 transition-all text-sm">إلغاء</Link>
                        <button
                            type="submit"
                            disabled={loading}
                            className="px-12 py-4 bg-[#F9C02E] text-black rounded-xl text-sm font-bold shadow-xl shadow-[#F9C02E]/25 hover:scale-[1.03] transition-all active:scale-95 disabled:opacity-50"
                        >
                            {loading ? "جاري الحفظ..." : "حفظ التغييرات"}
                        </button>
                    </div>
                </div>
            </div>
        </form>
    )
}
