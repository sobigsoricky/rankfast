import React from 'react'

const EdtechHeader = () => {
  return (
    <div
        className="bg-[#212121]  
      pt-[140px]  pb-16"
      >
        <div className="flex flex-col lg:flex-row justify-between container mx-auto lg:px-[120px] px-2 ">
          <div className="pt-[80px] ">
            <h1 className="text-2xl text-white font-semibold">
            Welcome to Seonator Solutions
            </h1>
            <h2 className="font-[impact] text-5xl md:text-8xl text-white font-light  uppercase">
            What's special we have for our edtech clients?
            </h2>
          </div>
        
        </div>

        <div className="mt-16 flex flex-wrap gap-6 container mx-auto lg:px-[120px] px-2 ">
          <button className="border-2 border-[#E72C4B] bg-[#E72C4B] w-full md:w-auto text-center md:px-24 py-5  font-medium text-white">
            Contact us
          </button>
          <button className="border-2 border-white w-full  md:w-auto text-center md:px-24 py-5  font-medium text-white">
            View Results
          </button>
        </div>
      </div>
  )
}

export default EdtechHeader