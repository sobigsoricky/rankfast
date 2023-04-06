import Link from "next/link";
import React from "react";

const NewBlogCard = ({ data }) => {
  return (
    <>
      <div className=" max-w-sm w-full border bg-white border-[#00000033] flex flex-col justify-between h-full group">
        <div>
          <div>
            <img
              src={
                data?.featuredImage?.node?.sourceUrl ||
                "https://iili.io/HOApbz7.md.png"
              }
              alt=""
              className="w-full  h-[230px] object-cover grayscale-[100%] duration-500 group-hover:grayscale-0"
            />
          </div>
          <div className="px-5 md:px-5">
            <div className=" mt-4 ">
              <h2 className="text-lg md:text-2xl font-[impact] mb-2 duration-500 group-hover:text-[#E72C4B]">
                {data?.title || "Heading"}
              </h2>
              <div
                className="text-sm  text-[#555555] font-medium exerpt-div"
                dangerouslySetInnerHTML={{
                  __html:
                    data?.excerpt.slice(0, 150) ||
                    "we are adept in all matters from drink driving, complex fraud and drug offences, offences against the person, we are adept in all matters from drink driving, complex fraud and drug offences...",
                }}
              />
            </div>

            <div className="flex gap-2  mt-2 flex-wrap justify-between">
              <span className="flex gap-2 items-center font-semibold text-sm ">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 0C9.06087 0 10.0783 0.421427 10.8284 1.17157C11.5786 1.92172 12 2.93913 12 4C12 5.06087 11.5786 6.07828 10.8284 6.82843C10.0783 7.57857 9.06087 8 8 8C6.93913 8 5.92172 7.57857 5.17157 6.82843C4.42143 6.07828 4 5.06087 4 4C4 2.93913 4.42143 1.92172 5.17157 1.17157C5.92172 0.421427 6.93913 0 8 0ZM8 10C12.42 10 16 11.79 16 14V16H0V14C0 11.79 3.58 10 8 10Z"
                    fill="black"
                  />
                </svg>
                <p>{data?.author?.node?.name || "User name"}</p>
              </span>

              <span className="flex gap-2 items-center font-semibold text-sm ">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.99 0C4.47 0 0 4.48 0 10C0 15.52 4.47 20 9.99 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 9.99 0ZM13.29 14.71L9 10.41V5H11V9.59L14.71 13.3L13.29 14.71Z"
                    fill="black"
                  />
                </svg>

                <p>{data?.date?.slice(0, -9) || "02 January 2023"}</p>
              </span>
            </div>
          </div>
        </div>
        <div className="p-5  border-t border-[#00000033] py-5 flex mt-6 ">
            
          <Link
            href={`/blog/${data?.slug}`}
            className=" "
           
          >
            <div className="box flex w-full text-center md:w-auto p-5 gap-10   border border-[#2F2E2F] text-[#2F2E2F] text-sm  font-bold  duration-200  justify-between items-center hover:bg-center">

            
            Read Article
            <svg
              width="27"
              height="22"
              viewBox="0 0 27 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.4948 12.105L4.64856 20.9513C4.35322 21.2397 3.95686 21.4013 3.54419 21.4013C3.13152 21.4013 2.73514 21.2397 2.44027 20.9513L1.00234 19.4746C0.708292 19.1849 0.542789 18.7894 0.542789 18.3767C0.542789 17.964 0.708292 17.5685 1.00234 17.2791L7.268 11.0006L0.989466 4.73496C0.701011 4.44005 0.539377 4.0437 0.539377 3.63103C0.539377 3.21791 0.701021 2.82155 0.989466 2.52667L2.46613 1.05C2.76104 0.761546 3.15738 0.599914 3.57006 0.599914C3.98273 0.599914 4.37911 0.761557 4.67442 1.05L13.4948 9.89625C14.1018 10.5076 14.1018 11.4938 13.4948 12.105Z"
                fill="#191919"
              />
              <path
                d="M25.9999 9.89506L17.1537 1.04881C16.8588 0.760356 16.4624 0.598724 16.0493 0.598724C15.6366 0.598724 15.2402 0.760367 14.9454 1.04881L13.4945 2.52548C13.2004 2.81522 13.0349 3.21072 13.0349 3.62342C13.0349 4.03611 13.2004 4.43161 13.4945 4.72093L19.7471 10.9995L13.4945 17.2651C13.2004 17.5549 13.0349 17.9499 13.0349 18.3631C13.0349 18.7757 13.2004 19.1708 13.4945 19.4606L14.9582 20.9372C15.2531 21.2257 15.6495 21.3873 16.0622 21.3873C16.4748 21.3873 16.8712 21.2257 17.1665 20.9372L26.0128 12.091C26.6151 11.481 26.6091 10.4981 25.9999 9.89506Z"
                fill="#191919"
              />
            </svg>
            </div>
          </Link>
        </div>
      </div>

      <style jsx>
        {`
            .box{
            width: 100%;
            height: 100%;
            background-size: 100% 200%;
            background-image: linear-gradient(to top, white 50%, black 50%);
            -webkit-transition: background-position 1s;
            -moz-transition: background-position 1s;
            transition: background-position 500ms;
            background-position: 00% -100%;
            overflow: clip;
           }
           .box:hover {
            background-position: 00% 0%;
            color:white;
            
          }
          .box:hover path{
            fill:white !important;
          }
        `}
      </style>
    </>
  );
};

export default NewBlogCard;
