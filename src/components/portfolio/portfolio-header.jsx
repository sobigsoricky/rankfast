import Image from "next/image";
import React from "react";

const PortfolioHeader = () => {
  return (
    <div>
      <div className="relative">
        <div className="absolute w-full h-full flex flex-wrap justify-center object-contain   overflow-hidden">
          <Image src="https://iili.io/HXjtmGf.md.webp" fill />
        </div>
        <div className="relative z-50 lg:px-[120px] px-2 mx-auto container py-[200px]">
          <p className="text-2xl font-semibold text-[#fff] block">
            {" "}
            Secure your place
          </p>
          <h1 className="text-5xl lg:text-9xl font-[impact] text-white">Our Portfolio</h1>
        </div>
      </div>
    </div>
  );
};

export default PortfolioHeader;
