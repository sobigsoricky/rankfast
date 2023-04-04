import Image from "next/image";
import React from "react";

const SingleblogHeader = ({ title, img, auther, date }) => {
  return (
    <div className="relative h-[550px] ">
      <div className="absolute  w-full h-full flex flex-wrap justify-center object-cover   overflow-clip after:w-full after:h-full after:absolute after:bg-[#E72C4B] after:bg-blend-overlay after:bg-opacity-70 ">
        <Image src={img} fill className="object-cover " />
      </div>
     
    </div>
  );
};

export default SingleblogHeader;
