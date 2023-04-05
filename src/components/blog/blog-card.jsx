import Link from "next/link";
import React from "react";

const BlogCard = ({ data }) => {
  console.log(data);
  return (
    <>
      <div className="max-w-3xl w-full border bg-white border-[#00000033] flex flex-col justify-between h-full">
        <div>
          <div>
            <img
              src={data?.featuredImage?.node?.sourceUrl || "https://iili.io/HOApbz7.md.png" }
             
              alt=""
              className="w-full h-[130px] md:h-[250px] object-cover"
            />
          </div>
          <div className="px-5 md:px-14">
            <img
              src={data?.author?.node?.avatar?.url}
              alt=""
              className=" w-[102px] h-[102px] md:w-36 md:h-36 -mt-16"
            />

            <div className="flex gap-5 md:gap-14 mt-6 flex-wrap">
              <span className="flex gap-4 items-center font-semibold text-sm md:text-lg">
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
                <p>{data?.author?.node?.name}</p>
              </span>

              <span className="flex gap-4 items-center font-semibold text-sm md:text-lg">
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

                <p>{data?.date?.slice(0, -9)}</p>
              </span>
            </div>

            <div className=" mt-6 md:mt-8">
              <h2 className="text-lg md:text-4xl font-[impact] mb-5 ">{data?.title}</h2>
              <div
                className="text-sm md:text-lg text-[#555555] font-medium exerpt-div"
                dangerouslySetInnerHTML={{ __html: data?.excerpt }}
              />
            </div>
          </div>
        </div>
        <div className="px-5 md:px-14 border-t border-[#00000033] py-5 flex mt-6">
          <Link
            href={`/blog/${data?.slug}`}
            className=" w-full text-center md:w-auto py-5 md:py-8 md:px-20 border border-[#2F2E2F] text-[#2F2E2F] text-sm md:text-lg font-bold"
          >
            Read Article
          </Link>
        </div>
      </div>

      <style jsx>{`
        .exerpt-div div {
          display: none;
        }
      `}</style>
    </>
  );
};

export default BlogCard;
