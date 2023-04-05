import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  const settings = {
    speed: 10000,
		autoplay: true,
		autoplaySpeed: 0,
		cssEase: 'linear',
    slidesToShow: 3,
  	slidesToScroll: 1,
    infinite: true,
    swipeToSlide: true,
  	arrows:false,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
      
         
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
         
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div>
      <div
        className="bg-gradient-to-b from-[#E72C4B] to-[#212121]  
      pt-20 md:pt-[140px]  pb-[25px]"
      >
        <div className="flex flex-col lg:flex-row justify-between container mx-auto lg:px-[120px] px-2 ">
          <div className="pt-10 md:pt-20 ">
            <h1 className="text-lg md:text-2xl text-white font-semibold">
              Welcome to Rankfast - Your SEO Partner
            </h1>
            <h2 className="text-[44px] leading-none md:text-7xl text-white  uppercase mt-5 md:mt-5  font-[Impact]">
              Innovate Transform and{" "}
              <span className="text-[#212121]">Rankfast Forward</span>
            </h2>
          </div>
          <div className="hidden lg:block relative w-full h-full  max-w-[508px] max-h-[700px]">
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
            Rank Now
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
        <div className="container mx-auto lg:px-[120px] px-2  flex-col md:flex-row gap-10">
          <h3 className="font-semibold text-white md:absolute">Results</h3>
<div className="md:ml-32">

 
          <Slider  {...settings} >
            <div className="text-white  font-light ">
              45+ SATISFIED CLIENTS
            </div>
            <div className="text-white  font-light">
              6,000,000+ ORGANIC TRAFFIC
            </div>
            <div className="text-white  font-light">
              2 million + REVENUE GENRATED
            </div>
            <div className="text-white  font-light">
              800% Average increase in website traffic
            </div>
          </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
