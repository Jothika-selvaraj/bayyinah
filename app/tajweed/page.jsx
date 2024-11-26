import Footer from '@/Components/Common/Footer'
import Header from '@/Components/Common/Header'
import Section1 from '@/Components/Tajweed/Section1'
import Section2 from '@/Components/Tajweed/Section2'
import Section3 from '@/Components/Tajweed/Section3'
import React from 'react'

const page = () => {
  return (
    <div>
        <Header />
        <Section1 />
        <Section2 />
        <Section3 />
        <Footer />
    </div>
  )
}

export default page