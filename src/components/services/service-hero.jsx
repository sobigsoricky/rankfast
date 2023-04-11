import React from "react"
import Link from "next/link"

const SocialHero = () => {
  return (
    <div className='flex items-center justify-center min-h-screen bg-[#212121] text-white py-12 px-4 md:px-8'>
      <div>
        <h1 className='text-4xl font-bold mb-4'>Digital Marketing Services</h1>
        <p className='text-lg mb-6'>Build your brand with Rankfast</p>
        <Link href='/contact-us/'>
          <button className='bg-white text-[#E72C4B] font-bold py-2 px-4 rounded'>
            Contact Now
          </button>
        </Link>
      </div>
    </div>
  )
}

export default SocialHero
