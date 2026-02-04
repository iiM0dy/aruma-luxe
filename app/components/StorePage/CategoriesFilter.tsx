"use client";

import { useRouter, useSearchParams } from "next/navigation";

interface Category {
    id: number;
    name: string;
}

interface Props {
    categories: Category[];
    activeCategoryId?: number;
}

const CategoriesFilter = ({ categories, activeCategoryId }: Props) => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const handleClick = (categoryId?: number) => {
        const params = new URLSearchParams(searchParams.toString());

        if (categoryId) {
            params.set("category", String(categoryId));
        } else {
            params.delete("category");
        }

        router.push(`/store?${params.toString()}`, { scroll: false });
    };

    return (
        <div className="flex gap-4 mb-12 overflow-x-auto pb-4 px-2 scrollbar-premium" dir="rtl">
            {/* All */}
            <button
                onClick={() => handleClick()}
                className={`px-8 py-3.5 cursor-pointer rounded-2xl font-bold text-base whitespace-nowrap transition-all duration-500 font-amiri
                ${!activeCategoryId
                        ? "bg-primary text-background-dark  scale-105"
                        : "bg-white/5 text-white/60 border border-white/10 hover:border-primary/50 hover:bg-white/10"
                    }`}
            >
                جميع المجموعات
            </button>

            {categories.map((category) => (
                <button
                    key={category.id}
                    onClick={() => handleClick(category.id)}
                    className={`px-8 py-3.5 rounded-2xl cursor-pointer text-base whitespace-nowrap transition-all duration-500 font-amiri
                    ${activeCategoryId === category.id
                            ? "bg-primary text-background-dark font-bold scale-105"
                            : "bg-white/5 text-white/60 border border-white/10 hover:border-primary/50 hover:bg-white/10"
                        }`}
                >
                    {category.name}
                </button>
            ))}
        </div>
    );
};

export default CategoriesFilter;
