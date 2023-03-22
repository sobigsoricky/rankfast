import Image from "next/image";
import React from "react";

const RevenueGenrated = () => {
  return (
    <>
      <div className="relative mt-11">
        <div className="absolute w-full h-full flex flex-wrap justify-center object-contain   overflow-hidden">
          <Image src="https://iili.io/HXjtmGf.md.webp" fill />
        </div>
        <div className="relative z-50 lg:px-[120px] px-2 mx-auto container py-[100px]">
          <h3 className="text-5xl lg:text-9xl  font-[impact] text-white">
            $2,345,000{" "}
            
          </h3>
          <span className="text-2xl font-semibold text-[#262626] block">
              Revenue Generated
            </span>
          <p className="text-[#262626] text-lg">And counting..</p>
        </div>
      </div>

      <div className="lg:px-[120px] px-2 mx-auto container flex md:flex-row flex-col flex-wrap bg-white py-11">
        <div className="box py-40 border border-[#00000033] text-center basis-1 md:basis-2/4 lg:basis-1/4">
          <h3 className="text-5xl  font-[impact] ">
            45+ <span className="text-lg block uppercase">satisfied cliens</span>
          </h3>
        </div>

        <div className="box py-40 border border-[#00000033] text-center basis-1 md:basis-2/4 lg:basis-1/4">
          <h3 className="text-5xl  font-[impact] ">
            6,000,000+ <span className="text-lg block uppercase">Natural traffic</span>
          </h3>
        </div>

        <div className="box py-40 border border-[#00000033] text-center basis-1 md:basis-2/4 lg:basis-1/4">
          <h3 className="text-5xl  font-[impact] ">
            2 million + <span className="text-lg block uppercase">revenue genrated</span>
          </h3>
        </div>

        <div className="box py-40 border border-[#00000033] text-center basis-1 md:basis-2/4 lg:basis-1/4">
          <h3 className="text-5xl  font-[impact] ">
           800%  <span className="text-lg block">Average increase in website traffic</span>
          </h3>
        </div>
      </div>
      <style jsx>{`
  .box {
    width: 100%; height: 100%;
    background-size: 100% 200%;
    background-image: linear-gradient(to bottom,  black 50%, white 50%);
    -webkit-transition: background-position 1s;
    -moz-transition: background-position 1s;
    transition: background-position 500ms;
    background-position: 00% -100%;
    overflow:clip
}

.box:hover {
    background-position: 00% 0%;
    color:white;
}
  `}</style>
    </>
  );
};

export default RevenueGenrated;
