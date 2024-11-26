

"use client"

import Callfor from '@/Components/Common/Callfor'
import Footer from '@/Components/Common/Footer'
import Header from '@/Components/Common/Header'
import Coursebanner from '@/Components/Course/Coursebanner'
import Section from '@/Components/Course/Section'
import Section1 from '@/Components/Course/Section1'
import Section2 from '@/Components/Course/Section2'
import Section4 from '@/Components/Course/Section4'
import Faq from '@/Components/Home/Faq'
import React from 'react'

const page = () => {
  return (
    <div>
      <Header />
      <Coursebanner />
      <Section />
      <Callfor />
      <Section1 />
      <Section2 />
      <Faq />
      <Section4 />
      <Footer />
    </div>
  )
}

export default page