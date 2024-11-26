'use client'

import React from 'react'
import BlogList from "@/Components/BlogList";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import { ToastContainer } from "react-toastify";

const page = () => {
  return (
    <div><ToastContainer theme="dark"/>
    <Header/>
    <BlogList/>
    <Footer/></div>
  )
}

export default page