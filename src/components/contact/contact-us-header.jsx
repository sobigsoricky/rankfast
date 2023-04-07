import Image from "next/image";
import Link from "next/link";
import React from "react";

const ContactUsHeader = () => {
  const submitForm = (event) => {
    console.log(event);
    event.preventDefault();
    fetch("https://formsubmit.co/ajax/pranay@coursenator.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: event.target[0].value,
        email: event.target[1].value,
        website: event.target[2].value,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        alert("form submitted");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <div className="relative bg-[#212121]">
        <div className="absolute w-full h-full flex flex-wrap justify-center object-contain   overflow-hidden">
          {/* <Image src="https://iili.io/HXjtmGf.md.webp" fill /> */}
        </div>
        <div className="relative z-50 lg:px-[120px]  mx-auto container pt-[200px] md:py-[200px] flex justify-between md:flex-row flex-col gap-4">
          <div className="px-2">
            <h1 className="text-2xl font-semibold text-[#fff] block ">
              {" "}
              Contact us
            </h1>
            <h3 className="text-4xl font-[impact] lg:text-8xl  text-[#e72c4b] uppercase">
              Seo is king
            </h3>

            <Link href="#book-meating" className="text-center w-full md:w-auto border-2 border-white md:px-24 py-5  font-medium text-white mt-8 inline-block">
              Book a meeting
            </Link>

            <p className="mt-8 text-[#e72c4b] font-semibold">
              Write to us at{" "}
              <span className="block font-bold text-white  text-lg">
                contactcoursenator@gmail.com
              </span>
            </p>
          </div>
          <div className="bg-white py-11 px-2 md:p-11 ">
            <form onSubmit={(e) => submitForm(e)} className="space-y-4 ">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="font-semibold mb-2 inline-block" htmlFor="email">
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
                  <label className="font-semibold mb-2 inline-block" htmlFor="phone">
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
                <label className="font-semibold mb-2 inline-block " htmlFor="name">
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
