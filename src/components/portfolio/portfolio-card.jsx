import Image from "next/image";
import React, { useState } from "react";

const PortfolioCard = ({ company }) => {
  const [showForm, setShowForm] = useState(false);

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
        for:"portfolio request",
        email: event.target[0].value,
       project:company.name
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        alert("form submitted");
        setShowForm(false)
      })
      .catch((error) => console.log(error));
  };
  return (
    <>
      <div
        onClick={(e) => setShowForm(true)}
        className="cursor-pointer w-[400px] border border-[#00000033] "
      >
        <Image
          src={company.img}
          width={400}
          height={200}
          className="h-[200px] bg-[#212121] object-scale-down"
        />
        <div className="p-4">
          <h3 className="text-2xl font-bold mb-2">{company.name}</h3>

          <p className="mt-4">{company.details}</p>
          {/* <div className="flex flex-wrap gap-2">
            <span className="text-[#00BC29] bg-[#00BC2933] p-1 text-sm">
            12X Natural traffic
            </span>
            <span className="text-[#00BC29] bg-[#00BC2933] p-1 text-sm">
            12X Natural traffic
            </span>
            <span className="text-[#00BC29] bg-[#00BC2933] p-1 text-sm">
            12X revenue
            </span>
           
          </div> */}
        </div>
      </div>
      {showForm ? (
        <div
         
          className=" bg-[#00000020] top-0 left-0 min-h-screen min-w-[100vw] fixed flex justify-center items-center"
        >
          <div className="bg-[#00000020] top-0 left-0 min-h-screen min-w-[100vw] fixed flex justify-center items-center"  onClick={(e) => {
            e.stopPropagation();
            setShowForm(false);
          }}/>
          <div className="relative z-50 bg-white p-4 lg:py-16 lg:px-24 mx-2">
            <h3 className="font-[impact] text-6xl lg:text-9xl text-[#212121]">
              Request Full Portfolio
            </h3>
            <p className="text-sm mt-2 lg:text-xl font-semibold text-[#E72C4B]">
              We will give you the access to our full portfolio within 24hours
              after verification
            </p>

            <form onSubmit={e => submitForm(e)} className="flex  w-full flex-col md:flex-row gap-4 mt-10">
              <input
                placeholder="your email"
                id="email"
                type="email"
                className="w-full bg-transparent border border-[#21212133] p-4 text-[#AAAAAA] placeholder:text-[#AAAAAA]  "
              />
              <button
              type="submit"
              
                className="py-5 px-20 bg-[#E72C4B] text-white"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default PortfolioCard;
