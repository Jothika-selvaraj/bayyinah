import Footer from '@/Components/Common/Footer'
import Header from '@/Components/Common/Header'
import Pricing from '@/Components/Pricing/Pricing'
import Section from '@/Components/Pricing/Section'
import React from 'react'

const page = () => {
  return (
    <div>
        <Header />
        <Pricing />
        <Section />
      
        <Footer />
    </div>
  )
}

export default page