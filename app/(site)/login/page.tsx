"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const LoginPage = () => {
    const router = useRouter()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setError('')

        try {
            const result = await signIn('credentials', {
                username,
                password,
                redirect: false,
            })

            if (result?.error) {
                setError('اسم المستخدم أو كلمة المرور غير صحيحة')
            } else {
                router.push('/admin')
            }
        } catch (err) {
            setError('حدث خطأ ما، يرجى المحاولة لاحقاً')
        } finally {
            setLoading(false)
        }
    }

    return (
        <main className="relative min-h-screen w-full flex items-center justify-center p-6 overflow-hidden bg-[#0D0D0D]">
            {/* Ambient Background Overlay */}
            <div className="absolute inset-0 z-0">
                <div className='h-screen w-full bg-[#12110D]'>
                </div>
            </div>

            {/* Login Card Container */}
            <div className="relative z-10 w-full max-w-[460px] animate-in fade-in zoom-in duration-700">
                {/* Branding Above Card */}
                <div className="flex flex-col items-center mb-10 text-center">
                    <h1 className="text-3xl font-bold tracking-[0.2em] text-white mb-2">AROMA LUXE</h1>
                    <div className="h-px w-12 bg-[#F9C02E]/50 mb-3" />
                    <p className="text-[#F9C02E] text-sm font-medium tracking-widest uppercase opacity-80">عطور فاخرة</p>
                </div>

                {/* Glassmorphism Card */}
                <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]">
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-white mb-2">تسجيل الدخول</h2>
                        <p className="text-white/50 text-sm">مرحباً بك مجدداً في عالم الفخامة</p>
                    </div>

                    {error && (
                        <div className="mb-6 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-xs text-center font-bold">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-xs font-semibold text-white/70 uppercase tracking-wider px-1">اسم المستخدم</label>
                            <input
                                className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-4 text-white placeholder:text-white/20 focus:outline-none focus:border-[#F9C02E]/50 focus:bg-white/8 transition-all"
                                placeholder="أدخل اسم المستخدم"
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <div className="flex justify-between items-center px-1">
                                <label className="text-xs font-semibold text-white/70 uppercase tracking-wider">كلمة المرور</label>
                            </div>
                            <input
                                className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-4 text-white placeholder:text-white/20 focus:outline-none focus:border-[#F9C02E]/50 focus:bg-white/8 transition-all"
                                placeholder="••••••••"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        <button
                            className="w-full cursor-pointer group relative overflow-hidden bg-[#F9C02E] text-black font-bold py-4 rounded-xl shadow-[0_10px_20px_-5px_rgba(244,192,37,0.3)] hover:scale-[1.02] active:scale-95 transition-all duration-300 disabled:opacity-50"
                            type="submit"
                            disabled={loading}
                        >
                            <span className="relative z-10">{loading ? 'جاري التحقق...' : 'دخول للوحة التحكم'}</span>
                        </button>
                    </form>

                    <div className="mt-8 pt-8 border-t border-white/5 text-center">
                        <Link href="/" className="text-xs text-white/30 hover:text-[#F9C02E] transition-colors inline-flex items-center gap-2">
                            العودة للرئيسية
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default LoginPage
