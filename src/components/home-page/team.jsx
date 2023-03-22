import Image from "next/image";
import React from "react";
import Glider from "react-glider";
import "glider-js/glider.min.css";
const members = [
  {
    img:"https://iili.io/HhQLDvt.md.jpg",
    name: "Pranav Bajaj",
    designation: "Founder and SEO Specialist",
  },
  {
    img:"https://iili.io/HhZVk8P.md.jpg",
    name: "Pranay Mishra",
    designation: "Co-Founder and SEO Specialist",
  },
  {
    img:"https://iili.io/HhZhAwF.md.jpg",
    name: "Subhabrata Roy ",
    designation: "SEO Director",
  },
  {
    name: "Tripti Pahwa",
    designation: "LinkBuilding Queen",
  },
  {
    name: " Preeti Tiwari",
    designation: "SEO Analyst",
  },
  {
    name: "Ajitesh Mishra",
    designation: "Technical SEO Specialist ",
  },
  {
    name: " Abhijay Rajput",
    designation: "Conversion Rate Optimizer",
  },
  {
    name: "Kunal Goel",
    designation: "SEO Tool Builder",
  },
 
];

const Team = () => {
  return (
    <div className="container bg-white mx-auto lg:px-[120px] px-2 py-[146px]">
      <h2 className="uppercase mt-1 mb-10 text-black text-6xl  font-[impact] leading-[70px]">
        Our team of
        <br /> <span className="text-[#E72C4B]"> Experts</span>
      </h2>

      <Glider
        responsive={[
          {
            breakpoint: 864,
            settings: {
              slidesToShow: 3,
            },
          },
        ]}
        draggable
        slidesToShow={1.5}
        slidesToScroll={1}
        rewind
        className="w-full "
      >
        {members?.map((member, i) => (
          <div
            key={i}
            className="relative mr-4  overflow-hidden"
          >
            <Image
              src={member.img}
              alt=""
              height={300}
              width={300}
              className="w-full object-center object-contain"
            />
            <div className="absolute z-10 bottom-0 p-4 w-full h-full flex flex-col justify-end items-start bg-gradient-to-t from-[#000000CC]   ">
              <h2 className="text-xl  font-[impact] text-white my-1">
                {member.name}
              </h2>
              <p className="text-sm font-bold text-[#E72C4B] break-words">{member.designation}</p>
              {/* <p className="text-white font-semibold">
                Can code as fast as flash runs!!
              </p> */}
            </div>
          </div>
        ))}
      </Glider>
    </div>
  );
};

export default Team;
