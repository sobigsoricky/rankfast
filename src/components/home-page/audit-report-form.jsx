import React from "react";

const AuditReportForm = () => {
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
      
        email: event.target[0].value,
        website: event.target[1].value,
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
    <>
      <div className=" container mx-auto lg:px-[120px] ">
        <div className="bg-[#212121] p-4 lg:py-14 lg:px-11 flex md:flex-row flex-col gap-4">
          <div className="text-white md:w-1/2">
            <h3 className="text-4xl md:text-5xl font-[impact]">
              REQUEST A FREE AUDIT REPORT
            </h3>
            <p className="text-white md:text-[#E72C4B] text-sm font-semibold mt-4">
              REPORT WILL BE SENT IN AN HOUR!
            </p>
          </div>

          <div className="md:w-1/2 mt-6 md:mt-0">
            <form
              onSubmit={(e) => submitForm(e)}
              className="flex gap-5 md:flex-row flex-col"
            >
              <div className="flex flex-col  w-full gap-3">
                <input
                  type="text"
                  className="text-[#EEEEEE] bg-transparent border border-[#FFFFFF33] py-2 px-8 w-full "
                  placeholder="Enter you email"
                />
                <input
                  type="text"
                  className="text-[#EEEEEE] bg-transparent border border-[#FFFFFF33] py-2 px-8 w-full"
                  placeholder="Enter your website URL"
                />
              </div>
              <button
                type="submit"
                className="bg-white hover:bg-[#E72C4B] hover:text-white duration-500  flex justify-center py-8  items-center  group px-28 md:py-2 relative overflow-hidden mt-6 md:mt-0"
              >
                <span className="text-lg font-semibold text-white absolute left-[-200%] group-hover:left-0 w-full duration-500 py-6 ">
                  Send
                </span>
                <svg
                  width="28"
                  height="44"
                  viewBox="0 0 28 44"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className=" right-0 group-hover:right-[-200%] absolute duration-500 w-full"
                >
                  <path
                    d="M5.68332 43.5L0.666656 38.4833L17.15 22L0.666656 5.51667L5.68332 0.5L27.1833 22L5.68332 43.5Z"
                    fill="black"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
      <style jsx>{``}</style>
    </>
  );
};

export default AuditReportForm;
