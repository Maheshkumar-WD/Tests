import React from 'react'
import PricingSection from '../../components/Pages/Pricing/PricingSection/PricingSection'
import AddOnSection from '../../components/Pages/Pricing/addOnSection/AddOnSection'
import TrustSection from '../../components/Pages/Pricing/TrustSection/TrustSection'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'

const Pricing = () => {
  return (
    <>
    <Navbar />
      <PricingSection />
      <AddOnSection />
      <TrustSection />
      <Footer />
    </>
  )
}

export default Pricing