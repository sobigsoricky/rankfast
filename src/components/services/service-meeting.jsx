import React from "react"
import { InlineWidget } from "react-calendly"
const ServiceMeeting = ({ color }) => {
  return (
    <div
      id='book-meating'
      className={`${color == "white" ? "bg-black" : "bg-[#212121]"} `}
    >
      <div className='container mx-auto flex-col md:flex-row lg:px-[120px] px-2 py-20 flex md:justify-center items-center gap-20 '>
        <div>
          <p
            className={`${
              color == "white" ? "text-black" : "text-white"
            } text-lg font-semibold `}
          >
            {/* REPORT WILL BE SENT IN AN HOUR! */}
          </p>
          {/* <hr className="my-2" /> */}
          <h2
            className={` text-5xl md:text-7xl  text-white uppercase  font-[impact]`}
          >
            Build your Brand
            <br /> Now!
          </h2>
        </div>
        <div className='w-full lg:w-[45%] border'>
          <InlineWidget url='https://calendly.com/rankfaster/seo' />
        </div>
      </div>
    </div>
  )
}

export default ServiceMeeting
