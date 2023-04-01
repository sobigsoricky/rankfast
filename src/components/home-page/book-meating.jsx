import React from "react";
import { InlineWidget } from "react-calendly";
const BookMeating = ({ color }) => {
  return (
    <div id="book-meating" className={`${color == "white" ? "bg-white" : "bg-[#212121]"}`}>
      <div className="container mx-auto lg:px-[120px] px-2 py-20 flex md:justify-center items-center gap-20 flex-wrap">
        <div>
          <p
            className={`${
              color == "white" ? "text-black" : "text-white"
            } text-lg font-semibold `}
          >
            REPORT WILL BE SENT IN AN HOUR!
          </p>
          <hr className="my-2" />
          <h2 className={` text-5xl md:text-7xl  text-[#E72C4B] uppercase  font-[impact]`}>
            Book meeting
          </h2>
        </div>
        <div className="w-full lg:w-[45%] border">
          <InlineWidget url="https://calendly.com/rankfaster/seo" />
        </div>
      </div>
    </div>
  );
};

export default BookMeating;
