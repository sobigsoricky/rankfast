import Image from "next/image";
import React from "react";

const Team = () => {
  return (
    <div className="container bg-white mx-auto lg:px-[120px] px-2 py-[146px]">
      <h2 className="uppercase mt-1 mb-10 text-black text-6xl  font-[impact] leading-[70px]">
        Our team of
        <br /> <span className="text-[#E72C4B]"> Experts</span>
      </h2>

      <div className="flex  gap-2 flex-wrap lg:flex-nowrap w-full">
        <div className="relative w-full md:basis-2/4 lg:w-full/4 h-[400px]">
          <Image src="https://iili.io/HXw5piF.png" alt="" fill className="object-cover"/>
          <div className="absolute z-10 bottom-0 p-4 w-full h-full flex flex-col justify-end items-start bg-gradient-to-t from-[#000000CC]  ">
           
            <h2 className="text-2xl  font-[impact] text-white my-1">
            Member name
            </h2>
            <p className="text-[#E72C4B]">A.K.A  FLASH</p>
            <p className="text-white font-semibold">Can code as fast as flash runs!!</p>
          </div>
        </div>

        <div className="relative w-full md:basis-2/4 lg:w-full/4 h-[400px]">
          <Image src="https://iili.io/HXw5piF.png" alt="" fill className="object-cover"/>
          <div className="absolute z-10 bottom-0 p-4 w-full h-full flex flex-col justify-end items-start bg-gradient-to-t from-[#0000007d]  ">
           
            <h2 className="text-2xl  font-[impact] text-white my-1">
            Member name
            </h2>
            <p className="text-[#E72C4B]">A.K.A  FLASH</p>
            <p className="text-white font-semibold">Can code as fast as flash runs!!</p>
          </div>
        </div>

        <div className="relative w-full md:basis-2/4 lg:w-full/4 h-[400px]">
          <Image src="https://iili.io/HXw5piF.png" alt="" fill className="object-cover"/>
          <div className="absolute z-10 bottom-0 p-4 w-full h-full flex flex-col justify-end items-start bg-gradient-to-t from-[#000000CC]  ">
           
            <h2 className="text-2xl  font-[impact] text-white my-1">
            Member name
            </h2>
            <p className="text-[#E72C4B]">A.K.A  FLASH</p>
            <p className="text-white font-semibold">Can code as fast as flash runs!!</p>
          </div>
        </div>

        <div className="relative w-full md:basis-2/4 lg:w-full/4 h-[400px]">
          <Image src="https://iili.io/HXw5piF.png" alt="" fill className="object-cover"/>
          <div className="absolute z-10 bottom-0 p-4 w-full h-full flex flex-col justify-end items-start bg-gradient-to-t from-[#000000CC]  ">
           
            <h2 className="text-2xl  font-[impact] text-white my-1">
            Member name
            </h2>
            <p className="text-[#E72C4B]">A.K.A  FLASH</p>
            <p className="text-white font-semibold">Can code as fast as flash runs!!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
