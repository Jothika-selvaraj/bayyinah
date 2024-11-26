import Footer from '@/Components/Common/Footer'
import Header from '@/Components/Common/Header'
import ContactBanner from '@/Components/Contact/ContactBanner'
import Section1 from '@/Components/Contact/Section1'
import Section2 from '@/Components/Contact/Section2'
import React from 'react'


const page = () => {
  return (
    <div>
        
        <Header />
        <ContactBanner />
        <Section1 />
        <Section2 />
        <Footer />
    </div>
  )
}

export default page