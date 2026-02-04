import React from 'react'
import BannerSection from './HomePage/BannerSection'
import CategoriesSection from './HomePage/CategoriesSection'
import WhyUsSection from './HomePage/WhyUsSection'
import CustomersReviews from './HomePage/CustomersReviews'
import ContactContainer from './HomePage/ContactContainer'

const HomePage = () => {
  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      <BannerSection
        title="Aroma Luxe"
        description="عطور فاخرة بلمسة شرقية تدوم طويلاً"
        image="/images/hero-bg.png"
      />
      <CategoriesSection />
      <WhyUsSection />
      <CustomersReviews />
      <ContactContainer />
    </main>
  )
}

export default HomePage