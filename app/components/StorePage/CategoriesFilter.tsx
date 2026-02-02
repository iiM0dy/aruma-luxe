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
        <div className="flex gap-4 mb-10 overflow-x-auto pb-2 scrollbar-hide">
            {/* All */}
            <button
                onClick={() => handleClick()}
                className={`px-6 py-2.5 cursor-pointer rounded-full font-bold text-sm whitespace-nowrap transition-all
          ${!activeCategoryId
                        ? "bg-[#F4C025] text-black"
                        : "bg-card-bg text-white border border-white/10 hover:border-primary/50"
                    }`}
            >
                All
            </button>

            {categories.map((category) => (
                <button
                    key={category.id}
                    onClick={() => handleClick(category.id)}
                    className={`px-6 py-2.5 rounded-full cursor-pointer text-sm whitespace-nowrap transition-all
            ${activeCategoryId === category.id
                            ? "bg-primary text-background-dark font-bold"
                            : "bg-card-bg text-white border border-white/10 hover:border-primary/50"
                        }`}
                >
                    {category.name}
                </button>
            ))}
        </div>
    );
};

export default CategoriesFilter;
