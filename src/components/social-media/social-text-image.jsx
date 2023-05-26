import React from "react"
import Link from "next/link"

const SocialTextImage = () => {
  return (
    <div className='flex bg-white items-center justify-center h-screen'>
      <div className='w-1/2 p-10'>
        <h1 className='text-4xl font-bold mb-4'>Digital Marketing</h1>
        <p className='text-lg mb-4'>
          Digital marketing , digital marketing, digital marketing
        </p>
      </div>
      <div className='w-1/2'>
        <img
          alt='Right side image'
          className=' bg-slate-500 w-full h-full object-cover'
        />
      </div>
    </div>
  )
}

export default SocialTextImage
