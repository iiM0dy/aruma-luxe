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
    LuEye,
    LuLoader
} from 'react-icons/lu'

export default function EditProductPage() {
    const router = useRouter()
    const params = useParams()
    const id = params.id

    const [loading, setLoading] = useState(true)
    const [saving, setSaving] = useState(false)
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

    useEffect(() => {
        if (id) {
            // We don't have a single GET endpoint yet, but we can fetch all and filter or add an endpoint
            // For now, let's assume we can fetch it if we had a GET /api/products/[id]
            // I'll add the individual GET to the API route next
            fetch(`/api/products`)
                .then(res => res.json())
                .then(data => {
                    const product = data.find((p: any) => p.id === parseInt(id as string))
                    if (product) {
                        setFormData({
                            nameAr: product.nameAr,
                            nameEn: product.nameEn,
                            descriptionAr: product.descriptionAr,
                            descriptionEn: product.descriptionEn || '',
                            price: product.price.toString(),
                            category: product.category,
                            stock: product.stock.toString(),
                            sku: product.sku,
                            image: product.image,
                            topNotes: product.topNotes || '',
                            heartNotes: product.heartNotes || '',
                            baseNotes: product.baseNotes || '',
                        })
                        setStatus(product.status)
                    }
                    setLoading(false)
                })
        }
    }, [id])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setSaving(true)

        try {
            const res = await fetch(`/api/products/${id}`, {
                method: 'PUT', // or PATCH
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...formData, status })
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
        <div className="h-screen flex items-center justify-center text-white" dir="rtl">
            <LuLoader className="animate-spin text-[#F9C02E]" size={40} />
        </div>
    )

    return (
        <form onSubmit={handleSubmit} className="max-w-6xl mx-auto space-y-8" dir="rtl">
            {/* Header Similar to New Page */}
            <div className="flex justify-between items-end">
                <div>
                    <nav className="flex items-center gap-2 text-[10px] text-gray-500 uppercase tracking-widest mb-2 font-bold">
                        <Link href="/admin">لوحة القيادة</Link>
                        <LuPlus size={10} />
                        <Link href="/admin/products">المنتجات</Link>
                        <LuPlus size={10} />
                        <span className="text-gray-300">تعديل المنتج</span>
                    </nav>
                    <h1 className="text-4xl font-bold tracking-tight">تعديل المنتج: {formData.nameAr}</h1>
                </div>

                <div className="flex gap-4">
                    <button
                        type="submit"
                        disabled={saving || uploading}
                        className="px-8 py-3 bg-[#F9C02E] text-black rounded-xl text-sm font-bold shadow-lg shadow-[#F9C02E]/20 hover:scale-[1.02] transition-all flex items-center gap-2 disabled:opacity-50"
                    >
                        {(saving || uploading) && <LuLoader className="animate-spin" size={18} />}
                        حفظ التغييرات
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Same form content as new/page.tsx (simplified for reuse illustration) */}
                <div className="lg:col-span-1 space-y-8">
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
                                className={`flex flex-col items-center justify-center aspect-4/5 w-full rounded-2xl border-2 border-dashed border-white/10 bg-[#0D0D0D] cursor-pointer hover:border-[#F9C02E]/40 hover:bg-white/5 transition-all overflow-hidden relative ${uploading ? 'opacity-50 pointer-events-none' : ''}`}
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

                    <div className="bg-[#141414] border border-white/5 p-6 rounded-3xl space-y-4">
                        <h3 className="font-bold text-sm">التسعير والمخزون</h3>
                        <input name="price" value={formData.price} onChange={handleChange} type="number" className="w-full bg-[#0D0D0D] border border-white/5 rounded-xl py-3 px-4 text-sm" placeholder="السعر" />
                        <input name="stock" value={formData.stock} onChange={handleChange} type="number" className="w-full bg-[#0D0D0D] border border-white/5 rounded-xl py-3 px-4 text-sm" placeholder="الكمية" />
                    </div>
                </div>

                <div className="lg:col-span-2 space-y-8">
                    <div className="bg-[#141414] border border-white/5 p-8 rounded-[2rem] space-y-6">
                        <h3 className="font-bold text-sm">هوية المنتج</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <input name="nameAr" value={formData.nameAr} onChange={handleChange} placeholder="الاسم بالعربي" className="bg-[#0D0D0D] border border-white/5 rounded-xl py-3 px-4 text-sm" />
                            <input name="nameEn" value={formData.nameEn} onChange={handleChange} placeholder="Name in English" dir="ltr" className="bg-[#0D0D0D] border border-white/5 rounded-xl py-3 px-4 text-sm text-left" />
                        </div>
                        <textarea name="descriptionAr" value={formData.descriptionAr} onChange={handleChange} rows={6} className="w-full bg-[#0D0D0D] border border-white/5 rounded-2xl py-4 px-4 text-sm" placeholder="الوصف"></textarea>
                    </div>

                    <div className="flex justify-end gap-3 pt-4">
                        <Link href="/admin/products" className="px-10 py-3 rounded-xl text-gray-400 font-bold hover:bg-white/5 transition-all text-sm">إلغاء</Link>
                        <button type="submit" disabled={saving} className="px-12 py-4 bg-[#F9C02E] text-black rounded-xl text-sm font-bold shadow-xl shadow-[#F9C02E]/25 hover:scale-[1.03] transition-all">
                            {saving ? "جاري الحفظ..." : "حفظ التغييرات"}
                        </button>
                    </div>
                </div>
            </div>
        </form>
    )
}
