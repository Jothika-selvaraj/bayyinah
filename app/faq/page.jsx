import Footer from '@/Components/Common/Footer'
import Header from '@/Components/Common/Header'
import FaqBanner from '@/Components/Faq/FaqBanner'
import FaqSection from '@/Components/Faq/FaqSection'
import React from 'react'

const page = () => {
  return (
    <div>
        <Header />
        <FaqBanner />
        <FaqSection />
        <Footer />
    </div>
  )
}

export default page