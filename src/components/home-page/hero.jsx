import React from "react";
import Glider from "react-glider";
import "glider-js/glider.min.css";
import Image from "next/image";
import Link from "next/link";
const Hero = () => {
  return (
    <div>
      <div
        className="bg-gradient-to-b from-[#E72C4B] to-[#212121]  
      pt-[140px]  pb-[25px]"
      >
        <div className="flex flex-col lg:flex-row justify-between container mx-auto lg:px-[120px] px-2 ">
          <div className="pt-[80px] ">
            <h1 className="text-2xl text-white font-semibold">
              Welcome to Rankfast Solutions
            </h1>
            <h2 className="text-6xl md:text-7xl text-white  uppercase  font-[Impact]">
            Innovate Transform and <span className="text-[#E72C4B]">Rankfast Forward</span>
            </h2>
          </div>
          <div className="relative w-full h-full  max-w-[508px] max-h-[700px]">
            <Image
              src="https://iili.io/HXckPTl.md.png"
              alt=""
              width="508"
              height="700"
              className="lg:absolute z-50 "
            />
          </div>
        </div>

        <div className="mt-16 flex flex-wrap  gap-6 container mx-auto lg:px-[120px] px-2 ">
          <Link
            href="/contact-us"
            className="text-center w-full md:w-auto border-2 border-[#E72C4B] bg-[#E72C4B] md:px-24 py-5  font-medium text-white"
          >
            Contact us
          </Link>
          <Link
            href="#rev-gen"
            className="text-center w-full md:w-auto border-2 border-white md:px-24 py-5  font-medium text-white"
          >
            View Results
          </Link>
        </div>
      </div>
      <div className="bg-[#212121] flex items-center w-full gap-8    py-11">
        <div className="container mx-auto lg:px-[120px] px-2 flex flex-col md:flex-row gap-10">
          <h3 className="font-semibold text-white ">Results</h3>

          <Glider
            responsive={[
              {
                breakpoint: 864,
                settings: {
                  slidesToShow: 3.2,
                },
              },
            ]}
            draggable
            slidesToShow={1.5}
            slidesToScroll={1}
            rewind
            className=" justify-between w-full"
          >
            <div className="text-white  font-light">45+ SATISFIED CLIENS</div>
            <div className="text-white  font-light">
              6,000,000+ NATURAL TRAFFIC
            </div>
            <div className="text-white  font-light">
              2 million + REVENUE GENRATED
            </div>
            <div className="text-white  font-light">
              800% Average increase in website traffic
            </div>
          </Glider>
        </div>
      </div>
    </div>
  );
};

export default Hero;
