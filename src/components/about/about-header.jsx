import Link from 'next/link'
import React from 'react'

const AboutHeader = () => {
  return (
    <div
    className="bg-[#212121]  
  pt-[280px] pb-[180px] "
  >
    <div className="flex flex-col lg:flex-row justify-between container mx-auto lg:px-[120px] px-2 ">
      <div className="">
      
        <h1 className="font-[impact] text-4xl md:text-8xl text-white font-light  uppercase">
        About uS
        </h1>
      </div>
    
    </div>

    <div className="mt-16 flex flex-wrap gap-6 container mx-auto lg:px-[120px] px-2 ">
      <Link href="/contact-us" className="border-2 border-[#E72C4B] bg-[#E72C4B] w-full md:w-auto text-center md:px-24 py-5  font-medium text-white">
        Contact us
      </Link>
      <Link href="/contact-us#book-meating" className="border-2 border-white w-full  md:w-auto text-center md:px-24 py-5  font-medium text-white">
        View Results
      </Link>
    </div>
  </div>
  )
}

export default AboutHeader