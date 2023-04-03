import React from 'react'
import Footer from './footer'
import dynamic from 'next/dynamic'
import Navbar from './navbar'

const OuterLayout = ({ children }) => {
  return (
    <>
    <Navbar/>
    <main>{children}</main>
    <Footer/>
    </>
  )
}

export default OuterLayout