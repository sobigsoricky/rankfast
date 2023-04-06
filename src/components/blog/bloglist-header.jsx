import Image from 'next/image'
import React from 'react'

const BloglistHeader = () => {
  return (
    <div>
         <div className="relative bg-[#212121]">
        <div className="absolute w-full h-full flex flex-wrap justify-center object-contain   overflow-hidden">
          {/* <Image src="https://iili.io/HXjtmGf.md.webp" fill /> */}
        </div>
        <div className="relative  lg:px-[120px] px-2 mx-auto container py-[200px] ">
          <p className="text-2xl font-semibold text-[#fff] block">
            {" "}
            Latest News and Updates
          </p>
          <h1 className="text-4xl lg:text-9xl font-[impact] text-[#E72C4B]">Our Blogs</h1>
        </div>
      </div>
    </div>
  )
}

export default BloglistHeader