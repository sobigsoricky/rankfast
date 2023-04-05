import React from "react";

const SingleblogContent = ({ content, title, img, auther, date }) => {
  return (
    <>
      <div className="w-full max-w-4xl mx-auto  py-4 relative">
        <div className="absolute bottom-[calc(100%_+_20px)] z-50">
          <h1 className="text-4xl lg:text-6xl font-[impact] text-white break-words">
            {title}
          </h1>
          <div className="flex gap-5 md:gap-14 mt-6 flex-wrap text-white">
            <span className="flex gap-4 items-center font-semibold text-lg">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 0C9.06087 0 10.0783 0.421427 10.8284 1.17157C11.5786 1.92172 12 2.93913 12 4C12 5.06087 11.5786 6.07828 10.8284 6.82843C10.0783 7.57857 9.06087 8 8 8C6.93913 8 5.92172 7.57857 5.17157 6.82843C4.42143 6.07828 4 5.06087 4 4C4 2.93913 4.42143 1.92172 5.17157 1.17157C5.92172 0.421427 6.93913 0 8 0ZM8 10C12.42 10 16 11.79 16 14V16H0V14C0 11.79 3.58 10 8 10Z"
                  fill="white"
                />
              </svg>
              <p>{auther}</p>
            </span>

            <span className="flex gap-4 items-center font-semibold text-lg">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.99 0C4.47 0 0 4.48 0 10C0 15.52 4.47 20 9.99 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 9.99 0ZM13.29 14.71L9 10.41V5H11V9.59L14.71 13.3L13.29 14.71Z"
                  fill="white"
                />
              </svg>

              <p>{date.slice(0, -9)}</p>
            </span>
          </div>
        </div>
        <div
          className="bg-white blog-content text-[#555555] "
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
      <style>{`
        .blog-content h2{
          font-family: impact;
          font-size: 20px;
          font-weight:300;
          padding-top: 20px
        }

        .blog-content img{
          padding-top: 20px
        }
      `}</style>
    </>
  );
};

export default SingleblogContent;
