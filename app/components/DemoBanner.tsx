"use client";

import React, { useState } from 'react';

const DemoBanner = () => {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    return (
        <div className="relative bg-linear-to-r from-primary/20 via-primary/10 to-purple-500/20 border-b border-primary/30 py-3 px-6">
            <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
                <div className="flex items-center gap-3 flex-1 justify-center md:justify-start">
                    <span className="text-2xl">💼</span>
                    <p className="text-white text-sm md:text-base font-amiri text-center md:text-right">
                        <strong className="font-bold">موقع تجريبي</strong> - مثال على ما يمكنني بناؤه لعلامتك التجارية
                    </p>
                </div>

                <button
                    onClick={() => setIsVisible(false)}
                    className="p-1 hover:bg-white/10 rounded-lg transition-colors shrink-0"
                    aria-label="إغلاق"
                >
                    <span className="material-symbols-outlined text-white/60 hover:text-white text-xl">close</span>
                </button>
            </div>
        </div>
    );
};

export default DemoBanner;
