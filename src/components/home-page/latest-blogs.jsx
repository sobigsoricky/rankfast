import React, { useEffect } from "react";
import Slider from "react-slick";
import BlogCard from "../blog/blog-card";

const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "20px",
  slidesToShow: 2,
  slidesToScroll: 1,
  speed: 500,
  swipeToSlide: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
      },
    },
  ],
};
const LatestBlogs = ({ data }) => {

  
  return (
    <div>
      <div className="container bg-white mx-auto lg:px-[120px] px-2  py-24">
        <h3 className="text-lg font-bold text-black">Check out</h3>
        <h2 className="uppercase mt-1 text-black text-4xl md:text-6xl font- md:leading-[70px] font-[Impact] mb-10">
          Recent Articles
        </h2>

        <Slider {...settings} className="w-full">
          {data?.map((data, i) => (
            <div key={i} className="px-2 h-full">
              <BlogCard data={data} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default LatestBlogs;
