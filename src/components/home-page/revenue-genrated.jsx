import Image from "next/image";
import React from "react";

const RevenueGenrated = () => {
  return (
    <>
      <div className="relative ">
        <div className="absolute w-full h-full flex flex-wrap justify-center object-contain   overflow-hidden">
          <Image src="https://iili.io/HXjtmGf.md.webp" fill />
        </div>
        <div className="relative z-50 lg:px-[120px] px-2 mx-auto container py-[100px]">
          <h3
            id="rev-gen"
            className="text-5xl lg:text-9xl  font-[impact] text-white"
          >
            $2,345,000{" "}
          </h3>
          <span className="text-2xl mt-5 font-semibold text-white md:text-[#262626] block">
            Revenue Generated
          </span>
          <p className="font-bold text-white md:text-[#262626] text-lg">
            And counting..
          </p>
        </div>
      </div>

      <div className="lg:px-[120px]  mx-auto container grid justify-center grid-cols-1 sm:grid-cols-2 xl:grid-cols-4  bg-white py-20 ">

      <div className="bg-[#212121] text-white md:bg-white md:text-[#212121]  box py-10 lg:py-20   md:border border-[#00000033] text-center ">
          <h3 className="text-5xl  font-[impact] ">
            6,000,000+{" "}
            <span className="text-lg block uppercase">Organic traffic</span>
          </h3>
        </div>
        <div className="box py-10 lg:py-20 border-t md:border border-[#00000033] text-center">
          <h3 className="text-5xl  font-[impact] ">
            45+{" "}
            <span className="text-lg block uppercase">satisfied clients</span>
          </h3>
        </div>

        <div className="bg-[#212121] text-white md:bg-white md:text-[#212121] box py-10 lg:py-20   md:border border-[#00000033] text-center ">
          <h3 className="text-5xl  font-[impact] ">
            800%{" "}
            <span className="text-lg block">
              Average increase in website traffic
            </span>
          </h3>
        </div>

        <div className="box py-10 lg:py-20   md:border border-[#00000033] text-center ">
          <h3 className="text-5xl  font-[impact] ">
            2 million +{" "}
            <span className="text-lg block uppercase">Revenue genrated</span>
          </h3>
        </div>

       
      </div>
      <style jsx>{`
        @media only screen and (min-width: 900px) {
          .box {
            width: 100%;
            height: 100%;
            background-size: 100% 200%;
            background-image: linear-gradient(to bottom, black 50%, white 50%);
            -webkit-transition: background-position 1s;
            -moz-transition: background-position 1s;
            transition: background-position 500ms;
            background-position: 00% -100%;
          }

          .box:hover {
            background-position: 00% 0%;
            color: white;
          }
        }
      `}</style>
    </>
  );
};

export default RevenueGenrated;
