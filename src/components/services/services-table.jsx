import React from "react"
const services = [
  {
    name: "Social Media Marketing",
    description:
      "We create custom strategies and manage content across platforms to boost brand visibility and engage your audience.",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',
  },
  {
    name: "Website Design",
    description:
      "Our designers craft visually appealing, user-friendly wireframes that represent your brand and perform seamlessly on all devices.",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit-3"><path d="M12 20h9"/><path d="M16 4a4 4 0 0 1 4 4v2a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4h6m2-2H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2z"/></svg>',
  },
  {
    name: "Website Development",
    description:
      "Our Skilled developers build robust, scalable websites using the latest technologies, ensuring functionality and performance.",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-link"><path d="M10 13H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5"/><path d="M14 10h5a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-5"/><path d="M7 15h0"/></svg>',
  },
  {
    name: "Content Writing",
    description:
      "Our professional writers deliver high-quality, engaging content tailored to your target audience and brand message.",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file-text"><path d="M13 2L4 11v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-3"/><path d="M13 2v9h9"/><line x1="9" y1="17" x2="15" y2="17"/><line x1="10" y1="13" x2="14" y2="13"/></svg>',
  },

  {
    name: "Content Optimization",
    description:
      "We optimize content for users and search engines, enhancing online visibility, and driving organic traffic.",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map-pin"><path d="M16.5 9.5C16.5 8.39543 15.6046 7.5 14.5 7.5C13.3954 7.5 12.5 8.39543 12.5 9.5C12.5 10.6046 13.3954 11.5 14.5 11.5C15.6046 11.5 16.5 10.6046 16.5 9.5Z"/><path d="M19.8562 8.39844C20.5442 9.01124 21 9.91323 21 10.8589V17.25C21 18.4404 20.4404 19.5 19.6562 19.5H4.34375C3.55956 19.5 3 18.4404 3 17.25V10.8589C3 9.91417 3.45578 9.01199 4.14273 8.39885L11.7857 2.10672C12.3897 1.56019 13.6103 1.56019 14.2143 2.10672L19.8562 8.39844Z"/><line x1="6" y1="12" x2="9" y2="12"/><line x1="14" y1="12" x2="18" y2="12"/></svg>',
  },
  {
    name: "Email Marketing",
    description:
      "We design personalized email campaigns that connect with your audience, build brand loyalty, and drive conversions.",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-settings"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a9 9 0 0 1-1.35 2.86l-1.5-1.5a7 7 0 0 0-2.36-.96l-.28-.03a5 5 0 0 1-5.67-5.67l-.03-.28a7 7 0 0 0-.96-2.36l-1.5-1.5A9 9 0 0 1 8 4.6V3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v1.6a9 9 0 0 1 1 8.64 8.64 0 0 0 2.12 2.12"/></svg>',
  },
]

const Services1 = () => {
  return (
    <>
      <div
        id='services'
        className='container bg-white mx-auto lg:px-[120px] py-20 md:py-[146px]'
      >
        <h2 className='px-2 uppercase mt-1 text-black text-4xl md:text-6xl md:leading-[70px] font-[impact] mb-10'>
          WE BUILD BRANDS <br />{" "}
          <span className='text-[#E72C4B]'> WITH PRECISION</span>
        </h2>
        <div className='grid justify-center md:grid-cols-3 '>
          {services?.map((service, i) => (
            <div
              key={i}
              className={`box border  px-11 py-8 h-full basis-1/3 flex flex-col items-stretch hover:duration-500 group lg:bg-white
               ${i % 2 == 0 ? "bg-[black]" : "bg-white"}`}
            >
              <div
                className='bg-[#E72C4B] max-w-[70px] p-5 rounded-full group-hover:scale-110 duration-500'
                dangerouslySetInnerHTML={{ __html: service.icon }}
              ></div>
              <div>
                <h2
                  className={`text-3xl font-[impact] lg:text-[#212121] md:group-hover:text-white duration-500 my-2 ${
                    i % 2 == 0 ? "text-white" : "text-[#212121]"
                  }`}
                >
                  {service.name}
                </h2>
                <p
                  className={` text-lg md:group-hover:text-white duration-500 lg:text-[#2F2E2F]  ${
                    i % 2 == 0 ? "text-white" : "text-[#2F2E2F]"
                  }`}
                >
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media only screen and (min-width: 900px) {
          .box {
            width: 100%;
            height: 100%;
            background-size: 200% 100%;
            background-image: linear-gradient(to left, white 50%, black 50%);
            -webkit-transition: background-position 1s;
            -moz-transition: background-position 1s;
            transition: background-position 500ms;
            background-position: -100% 0%;
            overflow: clip;
          }

          .box:hover {
            background-position: 00% 0%;
          }
        }
      `}</style>
    </>
  )
}

export default Services1
