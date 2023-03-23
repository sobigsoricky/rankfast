import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {

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
    <div className="bg-[#111111] mt-40">
      <div className="container mx-auto lg:px-[120px] px-2 pt-11 flex flex-col lg:flex-row justify-between items-start gap-4">
        <div className="flex flex-col gap-2">
          <Image src="https://iili.io/HXwg83F.png" width={180} height={100} />
          <Image src="https://iili.io/HhP6gb2.md.png" width={180} height={100} className="bg-white"/>
        </div>
        <>
          <div className="flex flex-col items-stretch">
            <h2 className="text-3xl font-bold text-white mb-4">About us</h2>
            <ul className="flex flex-col gap-4 pl-5">
              <Link href="/">
              <li className="text-white list-disc">Home</li>
              </Link>
              <Link href="/our-process">
              <li className="text-white list-disc">Our Process</li>
              </Link>
              <Link href={"https://www.coursenator.com/"} target="_blank">
              <li className="text-white list-disc">Coursenator</li>
              </Link>
              <Link href="/portfolio">
              <li className="text-white list-disc">Portfolio</li>
              </Link>
              {/* <li className="text-white list-disc">Ed-tech</li>
              <li className="text-white list-disc">Blog</li> */}
            </ul>
          </div>
        </>
        <>
          <div className="flex flex-col items-stretch">
            <h2 className="text-3xl font-bold text-white mb-4">
              What we offer
            </h2>
            <ul className="flex flex-col gap-4 pl-5">
              <li className="text-white list-disc"> Link building strategies</li>
              <li className="text-white list-disc">Keyword research</li>
              <li className="text-white list-disc">Content management</li>
              <li className="text-white list-disc"> Conversion rate optimization</li>
            </ul>
          </div>
        </>

        <div className="w-full lg:w-[45%]  md:mt-[-80px] ">
          <div className="relative w-full">
            <div className=" absolute w-full h-full flex flex-wrap justify-center object-fill   overflow-hidden ">
              <Image
                src="https://iili.io/HXjtmGf.md.webp"
                fill
                className="object-fill"
              />
            </div>
            <div className="relative z-40 py-20 px-8">
              <h2 className="text-3xl font-bold text-white">Contact us</h2>
              <div className="mt-6 flex items-start gap-8">
                <ul className="flex flex-col gap-6">
                  <li className="flex text-white items-center gap-2">
                    <svg
                      width="20"
                      height="16"
                      viewBox="0 0 20 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 2C20 0.9 19.1 0 18 0H2C0.9 0 0 0.9 0 2V14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2ZM18 2L10 7L2 2H18ZM18 14H2V4L10 9L18 4V14Z"
                        fill="white"
                      />
                    </svg>
                    pranay@coursenator.com
                  </li>
                  <li className="flex text-white items-center gap-2">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16 9C16 7.05 15.3207 5.39567 13.962 4.037C12.604 2.679 10.95 2 9 2V0C10.25 0 11.421 0.237333 12.513 0.712C13.6043 1.18733 14.5543 1.829 15.363 2.637C16.171 3.44567 16.8127 4.39567 17.288 5.487C17.7627 6.579 18 7.75 18 9H16ZM12 9C12 8.16667 11.7083 7.45833 11.125 6.875C10.5417 6.29167 9.83333 6 9 6V4C10.3833 4 11.5627 4.48733 12.538 5.462C13.5127 6.43733 14 7.61667 14 9H12ZM16.95 18C14.8 18 12.7043 17.5207 10.663 16.562C8.621 15.604 6.81267 14.3373 5.238 12.762C3.66267 11.1873 2.396 9.379 1.438 7.337C0.479334 5.29567 0 3.2 0 1.05C0 0.75 0.0999999 0.5 0.3 0.3C0.5 0.0999999 0.75 0 1.05 0H5.1C5.33333 0 5.54167 0.0749999 5.725 0.225C5.90833 0.375 6.01667 0.566667 6.05 0.8L6.7 4.3C6.73333 4.53333 6.72933 4.74567 6.688 4.937C6.646 5.129 6.55 5.3 6.4 5.45L3.975 7.9C4.675 9.1 5.55433 10.225 6.613 11.275C7.671 12.325 8.83333 13.2333 10.1 14L12.45 11.65C12.6 11.5 12.796 11.3873 13.038 11.312C13.2793 11.2373 13.5167 11.2167 13.75 11.25L17.2 11.95C17.4333 12 17.625 12.1123 17.775 12.287C17.925 12.4623 18 12.6667 18 12.9V16.95C18 17.25 17.9 17.5 17.7 17.7C17.5 17.9 17.25 18 16.95 18ZM3.025 6L4.675 4.35L4.25 2H2.025C2.10833 2.68333 2.225 3.35833 2.375 4.025C2.525 4.69167 2.74167 5.35 3.025 6ZM11.975 14.95C12.625 15.2333 13.2877 15.4583 13.963 15.625C14.6377 15.7917 15.3167 15.9 16 15.95V13.75L13.65 13.275L11.975 14.95Z"
                        fill="white"
                      />
                    </svg>
                    +91 9958448730
                  </li>
                  <li className="flex text-white items-center gap-2">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 9C6.28333 9 6.521 8.904 6.713 8.712C6.90433 8.52067 7 8.28333 7 8C7 7.71667 6.90433 7.479 6.713 7.287C6.521 7.09567 6.28333 7 6 7C5.71667 7 5.479 7.09567 5.287 7.287C5.09567 7.479 5 7.71667 5 8C5 8.28333 5.09567 8.52067 5.287 8.712C5.479 8.904 5.71667 9 6 9ZM10 9C10.2833 9 10.521 8.904 10.713 8.712C10.9043 8.52067 11 8.28333 11 8C11 7.71667 10.9043 7.479 10.713 7.287C10.521 7.09567 10.2833 7 10 7C9.71667 7 9.47933 7.09567 9.288 7.287C9.096 7.479 9 7.71667 9 8C9 8.28333 9.096 8.52067 9.288 8.712C9.47933 8.904 9.71667 9 10 9ZM14 9C14.2833 9 14.5207 8.904 14.712 8.712C14.904 8.52067 15 8.28333 15 8C15 7.71667 14.904 7.479 14.712 7.287C14.5207 7.09567 14.2833 7 14 7C13.7167 7 13.4793 7.09567 13.288 7.287C13.096 7.479 13 7.71667 13 8C13 8.28333 13.096 8.52067 13.288 8.712C13.4793 8.904 13.7167 9 14 9ZM0 20V2C0 1.45 0.196 0.979 0.588 0.587C0.979333 0.195667 1.45 0 2 0H18C18.55 0 19.021 0.195667 19.413 0.587C19.8043 0.979 20 1.45 20 2V14C20 14.55 19.8043 15.021 19.413 15.413C19.021 15.8043 18.55 16 18 16H4L0 20ZM2 15.175L3.175 14H18V2H2V15.175ZM2 2V15.175V2Z"
                        fill="white"
                      />
                    </svg>
                    +91 9958448730
                  </li>
                </ul>

                <div className="flex items-center gap-11">
                  <Link href="https://www.linkedin.com/company/courseo/mycompany/" target={"_blank"}>
                  
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.2 0H1.8C0.8 0 0 0.8 0 1.7V22.2C0 23.1 0.8 23.9 1.8 23.9H22.2C23.2 23.9 24 23.1 24 22.2V1.7C24 0.8 23.2 0 22.2 0ZM7.1 20.4H3.6V9H7.1V20.4ZM5.4 7.4C4.3 7.4 3.3 6.5 3.3 5.3C3.3 4.1 4.2 3.2 5.4 3.2C6.5 3.2 7.5 4.1 7.5 5.3C7.5 6.5 6.5 7.4 5.4 7.4ZM20.5 20.3H17V14.7C17 13.4 17 11.6 15.1 11.6C13.2 11.6 13 13.1 13 14.5V20.2H9.5V9H12.8V10.5H12.9C13.4 9.6 14.6 8.6 16.3 8.6C19.9 8.6 20.6 11 20.6 14.1V20.3H20.5Z"
                      fill="white"
                    />
                  </svg>
                  </Link>
                  {/* <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.67 0H1.33C0.978071 0.00261668 0.641298 0.143581 0.39244 0.39244C0.143581 0.641298 0.00261668 0.978071 0 1.33V22.67C0.00261668 23.0219 0.143581 23.3587 0.39244 23.6076C0.641298 23.8564 0.978071 23.9974 1.33 24H12.82V14.72H9.7V11.09H12.82V8.42C12.82 5.32 14.71 3.63 17.49 3.63C18.42 3.63 19.35 3.63 20.28 3.77V7H18.37C16.86 7 16.57 7.72 16.57 8.77V11.08H20.17L19.7 14.71H16.57V24H22.67C23.0219 23.9974 23.3587 23.8564 23.6076 23.6076C23.8564 23.3587 23.9974 23.0219 24 22.67V1.33C23.9974 0.978071 23.8564 0.641298 23.6076 0.39244C23.3587 0.143581 23.0219 0.00261668 22.67 0Z"
                      fill="white"
                    />
                  </svg> */}
                </div>
              </div>
              <div className="mt-12">
                <form onSubmit={e => submitForm(e)} className="flex flex-col gap-5 ">
                  <div className=" flex flex-col w-full gap-3">
                    <input
                      type="text"
                      className="text-[#ffffff] bg-transparent border border-[#ffffff] py-2 px-8 w-full "
                      placeholder="Enter you email"
                    />
                    <input
                      type="text"
                      className="text-[#ffffff] bg-transparent border border-[#ffffff] py-2 px-8 w-full"
                      placeholder="Enter your website URL"
                    />
                  </div>
                  <button className="bg-white hover:bg-[#E72C4B] hover:text-white duration-500  px-28 py-6 flex w-full h-full justify-center items-center relative overflow-hidden group">
                    <span className="text-lg font-semibold text-white absolute left-[-200%] group-hover:left-0 w-full duration-500">
                      Send
                    </span>
                    <svg
                      width="28"
                      height="44"
                      viewBox="0 0 28 44"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className=" right-0 group-hover:right-[-200%] relative duration-500 w-full"
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
        </div>
      </div>
    </div>
  );
};

export default Footer;
