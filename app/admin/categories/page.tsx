"use client"

import React, { useEffect, useState } from 'react'
import { LuPlus, LuTrash2, LuLoader, LuLayoutGrid } from 'react-icons/lu'

interface Category {
    id: number;
    name: string;
    createdAt: string;
}

export default function AdminCategoriesPage() {
    const [categories, setCategories] = useState<Category[]>([])
    const [loading, setLoading] = useState(true)
    const [newName, setNewName] = useState('')
    const [creating, setCreating] = useState(false)

    useEffect(() => {
        fetchCategories()
    }, [])

    const fetchCategories = async () => {
        try {
            const res = await fetch('/api/categories')
            const data = await res.json()
            if (Array.isArray(data)) {
                setCategories(data)
            }
        } catch (error) {
            console.error("Failed to fetch categories")
        } finally {
            setLoading(false)
        }
    }

    const handleCreate = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!newName.trim()) return
        setCreating(true)

        try {
            const res = await fetch('/api/categories', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: newName })
            })

            if (res.ok) {
                setNewName('')
                fetchCategories()
            } else {
                alert("فشل في إضافة الفئة")
            }
        } catch (error) {
            alert("حدث خطأ ما")
        } finally {
            setCreating(false)
        }
    }

    const handleDelete = async (id: number) => {
        if (!confirm("هل أنت متأكد من حذف هذه الفئة؟")) return

        try {
            const res = await fetch(`/api/categories/${id}`, { method: 'DELETE' })
            if (res.ok) {
                setCategories(prev => prev.filter(c => c.id !== id))
            } else {
                const data = await res.json()
                alert(data.error || "فشل الحذف")
            }
        } catch (error) {
            alert("فشل الحذف")
        }
    }

    return (
        <div className="space-y-8 lg:space-y-12" dir="rtl">
            <div className="flex flex-col gap-2">
                <h1 className="text-3xl lg:text-5xl font-black tracking-tight">إدارة التصنيفات</h1>
                <p className="text-gray-500 font-medium text-sm lg:text-base">تحكم في أقسام وفئات العطور في متجرك</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                {/* Create Category Form */}
                <div className="lg:col-span-4">
                    <div className="bg-[#141414] border border-white/5 p-8 rounded-[2.5rem] sticky top-8">
                        <h3 className="flex items-center gap-2 font-black text-xs uppercase tracking-widest text-[#F9C02E] mb-6">
                            <LuPlus size={18} />
                            إضافة فئة جديدة
                        </h3>
                        <form onSubmit={handleCreate} className="space-y-5">
                            <div className="space-y-2">
                                <label className="text-[10px] text-gray-500 uppercase block font-black pr-1 tracking-widest">اسم الفئة <span className="text-[#F9C02E]">*</span></label>
                                <input
                                    type="text"
                                    value={newName}
                                    onChange={(e) => setNewName(e.target.value)}
                                    placeholder="مثل: عطور زيتية، بخور..."
                                    className="w-full bg-[#0D0D0D] border border-white/5 rounded-2xl py-4 px-6 text-sm font-bold focus:outline-none focus:border-[#F9C02E]/50 focus:bg-[#F9C02E]/5 transition-all"
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={creating || !newName.trim()}
                                className="w-full py-4 bg-[#F9C02E] text-black rounded-2xl text-xs font-black shadow-xl shadow-[#F9C02E]/20 hover:scale-[1.03] transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                            >
                                {creating ? <LuLoader className="animate-spin" size={18} /> : <LuPlus size={18} />}
                                إضافة للمتجر
                            </button>
                        </form>
                    </div>
                </div>

                {/* Categories List */}
                <div className="lg:col-span-8">
                    <div className="bg-[#141414] border border-white/5 rounded-[2.5rem] overflow-hidden min-h-[400px]">
                        {loading ? (
                            <div className="flex flex-col items-center justify-center h-[400px] text-gray-500 gap-4">
                                <LuLoader size={40} className="animate-spin text-[#F9C02E]" />
                                <p className="text-[10px] font-black uppercase tracking-widest">جاري التحميل...</p>
                            </div>
                        ) : categories.length === 0 ? (
                            <div className="flex flex-col items-center justify-center h-[400px] text-gray-500 gap-6">
                                <LuLayoutGrid size={48} className="opacity-10" />
                                <p className="text-sm font-bold">لا توجد تصنيفات حالياً</p>
                            </div>
                        ) : (
                            <div className="divide-y divide-white/5">
                                {categories.map((category) => (
                                    <div key={category.id} className="p-6 lg:p-8 flex items-center justify-between group hover:bg-white/[0.02] transition-all">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-[#F9C02E] group-hover:bg-[#F9C02E] group-hover:text-black transition-all">
                                                <LuLayoutGrid size={20} />
                                            </div>
                                            <div>
                                                <h4 className="font-black text-lg group-hover:text-[#F9C02E] transition-all">{category.name}</h4>
                                                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-1">
                                                    ID: {category.id} • {new Date(category.createdAt).toLocaleDateString('ar-SA')}
                                                </p>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => handleDelete(category.id)}
                                            className="p-3 bg-red-500/5 hover:bg-red-500/10 text-red-500/30 hover:text-red-500 border border-white/5 hover:border-red-500/30 rounded-xl transition-all"
                                            title="حذف التصنيف"
                                        >
                                            <LuTrash2 size={20} />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
