

import ProductsSection from '../components/StorePage/ProductsSection'
import BannerSection from '../components/StorePage/BannerSection'
import { prisma } from '@/lib/db';


const StorePage = async () => {
    const products = await prisma.product.findMany();
    const categories = await prisma.product.findMany({
        select: {
            category: true,
        },
    });
    console.log(products);
    return (
        <div className='max-w-7xl mx-auto px-6 py-12'>
            <BannerSection />
            <div className='flex gap-4 mb-10 overflow-x-auto pb-2 scrollbar-hide'>
                <div className={`px-6 py-2.5 bg-[#F4C025] rounded-full font-bold text-sm whitespace-nowrap cursor-pointer transition-all font-noto`}>
                    All
                </div>
                {categories.map((category) => (
                    <button className={`px-6 text-white cursor-pointer py-2.5 rounded-full bg-card-bg border border-white/10 hover:border-primary/50 transition-colors text-sm whitespace-nowrap`}>
                        {category.category}
                    </button>
                ))}
            </div>
            <ProductsSection products={products} />
        </div>
    )
}

export default StorePage
