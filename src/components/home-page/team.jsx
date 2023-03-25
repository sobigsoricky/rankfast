import Image from "next/image";
import React from "react";
import Glider from "react-glider";
import "glider-js/glider.min.css";
import Link from "next/link";
const members = [
  {
    img: "https://iili.io/HhQLDvt.md.jpg",
    name: "Pranav Bajaj",
    designation: "Founder and SEO Specialist",
    linkedIn: "",
  },
  {
    img: "https://iili.io/HhZVk8P.md.jpg",
    name: "Pranay Mishra",
    designation: "Co-Founder and SEO Specialist",
    linkedIn: "",
  },
  {
    img: "https://iili.io/HhZhAwF.md.jpg",
    name: "Subhabrata Roy ",
    designation: "SEO Director",
    linkedIn: "",
  },
  {
    img: "https://iili.io/HwJFXRt.md.jpg",
    name: "Tripti Pahwa",
    designation: "LinkBuilding Queen",
    linkedIn: "",
  },
  {
    img: "https://iili.io/Hwdaque.md.jpg",
    name: " Preeti Tiwari",
    designation: "SEO Analyst",
    linkedIn: "",
  },
  {
    img: "https://iili.io/Hwdk5Zv.md.png",
    name: "Ajitesh Mishra",
    designation: "Technical SEO Specialist ",
    linkedIn: "",
  },
  {
    img: "https://iili.io/HwdRcrP.md.jpg",
    name: " Abhijay Rajput",
    designation: "Conversion Rate Optimizer",
    linkedIn: "",
  },
  {
    img: "https://iili.io/HwdEYCu.md.jpg",
    name: "Kunal Goel",
    designation: "SEO Tool Builder",
    linkedIn: "",
  },
];

const Team = () => {
  return (
    <div className="container bg-white mx-auto lg:px-[120px] px-2 py-[106px]">
      <h2 className="uppercase mt-1 mb-10 text-black text-4xl md:text-6xl  font-[impact] md:leading-[70px]">
        Our team of
        <br /> <span className="text-[#E72C4B]"> Experts</span>
      </h2>

      <div className="w-full flex flex-wrap gap-10 justify-center md:justify-between">
        {members?.map((member, i) => (
          <div key={i} className="relative  mt-10">
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
              <p className="text-lg font-normal text-[#e72c4b] ">
                {member.designation}
              </p>
              <Link href={member.linkedIn} target={"_blank"} className="flex justify-center mt-2">
                  
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.2 0H1.8C0.8 0 0 0.8 0 1.7V22.2C0 23.1 0.8 23.9 1.8 23.9H22.2C23.2 23.9 24 23.1 24 22.2V1.7C24 0.8 23.2 0 22.2 0ZM7.1 20.4H3.6V9H7.1V20.4ZM5.4 7.4C4.3 7.4 3.3 6.5 3.3 5.3C3.3 4.1 4.2 3.2 5.4 3.2C6.5 3.2 7.5 4.1 7.5 5.3C7.5 6.5 6.5 7.4 5.4 7.4ZM20.5 20.3H17V14.7C17 13.4 17 11.6 15.1 11.6C13.2 11.6 13 13.1 13 14.5V20.2H9.5V9H12.8V10.5H12.9C13.4 9.6 14.6 8.6 16.3 8.6C19.9 8.6 20.6 11 20.6 14.1V20.3H20.5Z"
                      fill="#212121"
                    />
                  </svg>
                  </Link>
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
