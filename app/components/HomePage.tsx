import React from 'react'
import BannerSection from './HomePage/BannerSection'
import CategoriesSection from './HomePage/CategoriesSection'
import FeaturedProducts from './HomePage/FeaturedProducts'
import CustomersReviews from './HomePage/CustomersReviews'
import ContactContainer from './HomePage/ContactContainer'

const HomePage = () => {
  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      <BannerSection
        title="Aruma Luxe"
        description="عطور فاخرة بلمسة شرقية تدوم طويلاً"
        image="/images/hero-bg.png"
      />
      <CategoriesSection />
      <FeaturedProducts />
      <CustomersReviews />
      <ContactContainer />
    </main>
  )
}

export default HomePage