import Image from "next/image";
import React from "react";

const ContactUsHeader = () => {
  return (
    <div>
      <div className="relative">
        <div className="absolute w-full h-full flex flex-wrap justify-center object-contain   overflow-hidden">
          <Image src="https://iili.io/HXjtmGf.md.webp" fill />
        </div>
        <div className="relative z-50 lg:px-[120px] px-2 mx-auto container py-[200px] flex justify-between md:flex-row flex-col gap-4">
          <div>
            <h1 className="text-2xl font-semibold text-[#fff] block">
              {" "}
              Contact us
            </h1>
            <h3 className="text-8xl font-bold text-white uppercase">Seo is king</h3>

            <button className="w-full md:w-auto inline-block py-4 md:px-28 text-center bg-[#212121] mt-8 font-medium text-white">Book a meeting</button>

            <p className="mt-8 text-[#00000099] font-semibold">Write to us at  <span className="block font-bold text-black text-lg">contactcoursenator@gmail.com</span></p>
          </div>
          <div className="bg-white p-11">
            <form action="" className="space-y-4">
             
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="font-semibold mb-2" htmlFor="email">
                  Name
                  </label>
                  <input
                    className="w-full border  border-[#00000033] p-3 text-sm"
                    placeholder="Email address"
                    type="text"
                    id="name"
                  />
                </div>
                <div>
                  <label className="font-semibold mb-2" htmlFor="phone">
                  E-mail
                  </label>
                  <input
                    className="w-full  border  border-[#00000033] p-3 text-sm"
                    placeholder="Phone Number"
                    type="email"
                    id="email"
                  />
                </div>
              </div>
              <div>
                <label className="font-semibold mb-2" htmlFor="name">
                Enter your website link
                </label>
                <input
                  className="w-full border  border-[#00000033] p-3 text-sm"
                  placeholder="Name"
                  type="text"
                  id="website"
                />
              </div>
            
              <div className="mt-4">
                <button
                  type="submit"
                  className="inline-block w-full  bg-[#212121] px-5 py-3 font-medium text-white "
                >
                  Send 
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactUsHeader;
