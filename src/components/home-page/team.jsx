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
    img:"https://iili.io/HwJFXRt.md.jpg",
    name: "Tripti Pahwa",
    designation: "LinkBuilding Queen",
  },
  {
    img:"https://iili.io/Hwdaque.md.jpg",
    name: " Preeti Tiwari",
    designation: "SEO Analyst",
  },
  {
    img:"https://iili.io/Hwdk5Zv.md.png",
    name: "Ajitesh Mishra",
    designation: "Technical SEO Specialist ",
  },
  {
    img:"https://iili.io/HwdRcrP.md.jpg",
    name: " Abhijay Rajput",
    designation: "Conversion Rate Optimizer",
  },
  {
    img:"https://iili.io/HwdEYCu.md.jpg",
    name: "Kunal Goel",
    designation: "SEO Tool Builder",
  },
 
];

const Team = () => {
  return (
    <div className="container bg-white mx-auto lg:px-[120px] px-2 py-[106px]">
      <h2 className="uppercase mt-1 mb-10 text-black text-4xl md:text-6xl  font-[impact] md:leading-[70px]">
        Our team of
        <br /> <span className="text-[#E72C4B]"> Experts</span>
      </h2>

      <div
        className="w-full flex flex-wrap gap-10 justify-center md:justify-between"
      >
        {members?.map((member, i) => (
          <div
            key={i}
            className="relative  mt-10"
          >
            <div className="relative w-full h-full max-w-[280px] max-h-[280px]">

            
            <Image
              src={member.img}
              alt=""
              height={280}
              width={280}
              className="rounded-full   h-full object-cover  block"
            />
            </div>
            <div className="text-center mt-4">
              <h2 className="text-xl font-extralight  font-[impact] text-[#212121] ">
                {member.name}
              </h2>
              <p className="text-lg font-light text-[#E72C4B] ">{member.designation}</p>
              {/* <p className="text-white font-semibold">
                Can code as fast as flash runs!!
              </p> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
