import Image from "next/image";
import React from "react";
import Glider from "react-glider";
import "glider-js/glider.min.css";
import Slider from "react-slick";
const testimonials = [
  {
    designation:"Founder of Think and Learn Smarter",
    person: "Connell Kennelly",
    text: `Rankfast helped my E-learning business improve search engine rankings by conducting keyword research, optimizing meta tags and content, and building backlinks from high-authority sites. Their services have greatly improved my search engine visibility and increased website traffic, leads, and sales. I highly recommend them for anyone looking to improve their search engine visibility`
  },
  {
    person: "Vatsal Shukla",
    designation:"Founder and CTO of Netive",
    text: "I highly recommend this exceptional SEO agency for their customized strategy, dedication, and knowledge. Thanks to their efforts, my website's search engine ranking has significantly improved, resulting in more leads and increased traffic. The team was professional, communicative, and committed to my success throughout the process. I am thrilled with the results and would recommend this agency to anyone looking to improve their online presence and grow their business. Thank you for your hard work and expertise!"
  },
  // {
  //   person: "Jane Smith",
  //   text: "I was impressed by the level of professionalism and dedication shown by this SEO agency. They went above and beyond to ensure that my website was optimized for search engines and that I was able to reach my target audience. Their team was always available to answer my questions and provide updates on the progress of the campaign. Thanks to their efforts, my website is now ranking on the first page of Google, and I have seen a significant increase in leads and sales. I highly recommend this agency to anyone looking for top-notch SEO services."
  // },
  // {
  //   person: "Mark Johnson",
  //   text: "I had the pleasure of working with this SEO agency on a recent project, and I couldn't be happier with the results. Their team of experts provided me with valuable insights and recommendations on how to improve my website's SEO. They took the time to understand my business and my goals, and they developed a comprehensive strategy tailored to my needs. Thanks to their efforts, my website is now ranking higher on search engines, and I have seen a significant increase in organic traffic. I highly recommend this agency to anyone looking to improve their online presence."
  // },
  // {
  //   person: "Samantha Brown",
  //   text: "If you're looking for a reliable and effective SEO agency, look no further than this team of experts. Their professionalism and dedication to delivering results are truly exceptional. They provided me with a comprehensive SEO strategy that was tailored to my business, and they were always available to answer my questions and provide updates on the progress of the campaign. Thanks to their efforts, my website is now ranking higher on search engines, and I have seen a significant increase in traffic and revenue. I would highly recommend this agency to anyone looking for top-notch SEO services."
  // }
];

const Testimonials = () => {
  return (
    <div className="lg:px-[120px] px-2 container mx-auto py-10">
      <h2 className="text-4xl md:text-6xl font-[impact] text-black mb-8">TESTIMONIALS</h2>

      <Slider
      
        className = "center"
        centerMode = {true}
        // infinite = {true}
     
        slidesToShow={2}
   
        
      >
        {testimonials?.map((testimonial, i) =>(
          <div key={i} className=" border border-[#00000033] group  px-4">
          {/* <div className="relative overflow-clip w-full h-[200px] object-cover">
            <Image
              src="https://iili.io/HXjtmGf.md.webp"
              fill
              className=" group-hover:scale-125 object-cover  duration-500 relative -z-10"
            />
          </div> */}
          <div className="p-4 ">
            <h3 className="text-2xl font-bold mb-2 ">{testimonial.person}</h3>
            <h3 className="text-xl font-[impact] mb-2">{testimonial.designation}</h3>

            {/* <div className="flex flex-wrap gap-2">
              <span className="text-[#00BC29] bg-[#00BC2933] p-1">
                123x Natural Traffic
              </span>
              <span className="text-[#00BC29] bg-[#00BC2933] p-1">
                123x Natural Traffic
              </span>
              <span className="text-[#00BC29] bg-[#00BC2933] p-1">
                123x Natural Traffic
              </span>
              <span className="text-[#00BC29] bg-[#00BC2933] p-1">
                123x Natural Traffic
              </span>
            </div> */}

            <p className="mt-4">
             {testimonial.text}
            </p>
          </div>
        </div>
        ))}
        
        {/* <div className=" border border-[#00000033] group overflow-clip w-[400px] ml-4">
          <div className="relative overflow-clip w-full h-[200px] object-cover">
            <Image
              src="https://iili.io/HXjtmGf.md.webp"
              fill
              className=" group-hover:scale-125 object-cover  duration-500 relative -z-10"
            />
          </div>
          <div className="p-4 ">
            <h3 className="text-2xl font-bold mb-2">NAME</h3>
            <div className="flex flex-wrap gap-2">
              <span className="text-[#00BC29] bg-[#00BC2933] p-1">
                123x Natural Traffic
              </span>
              <span className="text-[#00BC29] bg-[#00BC2933] p-1">
                123x Natural Traffic
              </span>
              <span className="text-[#00BC29] bg-[#00BC2933] p-1">
                123x Natural Traffic
              </span>
              <span className="text-[#00BC29] bg-[#00BC2933] p-1">
                123x Natural Traffic
              </span>
            </div>

            <p className="mt-4">
              Until recently, the prevailing view assumed lorem ipsum was born
              as a nonsense text. “It's not Latin, though it looks like it, and
              it actually says nothing,” Before & After magazine answered a
              curious reader.
            </p>
          </div>
        </div>
        <div className=" border border-[#00000033] group overflow-clip w-[400px] ml-4">
          <div className="relative overflow-clip w-full h-[200px] object-cover">
            <Image
              src="https://iili.io/HXjtmGf.md.webp"
              fill
              className=" group-hover:scale-125 object-cover  duration-500 relative -z-10"
            />
          </div>
          <div className="p-4 ">
            <h3 className="text-2xl font-bold mb-2">NAME</h3>
            <div className="flex flex-wrap gap-2">
              <span className="text-[#00BC29] bg-[#00BC2933] p-1">
                123x Natural Traffic
              </span>
              <span className="text-[#00BC29] bg-[#00BC2933] p-1">
                123x Natural Traffic
              </span>
              <span className="text-[#00BC29] bg-[#00BC2933] p-1">
                123x Natural Traffic
              </span>
              <span className="text-[#00BC29] bg-[#00BC2933] p-1">
                123x Natural Traffic
              </span>
            </div>

            <p className="mt-4">
              Until recently, the prevailing view assumed lorem ipsum was born
              as a nonsense text. “It's not Latin, though it looks like it, and
              it actually says nothing,” Before & After magazine answered a
              curious reader.
            </p>
          </div>
        </div>
        <div className=" border border-[#00000033] group overflow-clip w-[400px] ml-4">
          <div className="relative overflow-clip w-full h-[200px] object-cover">
            <Image
              src="https://iili.io/HXjtmGf.md.webp"
              fill
              className=" group-hover:scale-125 object-cover  duration-500 relative -z-10"
            />
          </div>
          <div className="p-4 ">
            <h3 className="text-2xl font-bold mb-2">NAME</h3>
            <div className="flex flex-wrap gap-2">
              <span className="text-[#00BC29] bg-[#00BC2933] p-1">
                123x Natural Traffic
              </span>
              <span className="text-[#00BC29] bg-[#00BC2933] p-1">
                123x Natural Traffic
              </span>
              <span className="text-[#00BC29] bg-[#00BC2933] p-1">
                123x Natural Traffic
              </span>
              <span className="text-[#00BC29] bg-[#00BC2933] p-1">
                123x Natural Traffic
              </span>
            </div>

            <p className="mt-4">
              Until recently, the prevailing view assumed lorem ipsum was born
              as a nonsense text. “It's not Latin, though it looks like it, and
              it actually says nothing,” Before & After magazine answered a
              curious reader.
            </p>
          </div>
        </div>
        <div className=" border border-[#00000033] group overflow-clip w-[400px] ml-4">
          <div className="relative overflow-clip w-full h-[200px] object-cover">
            <Image
              src="https://iili.io/HXjtmGf.md.webp"
              fill
              className=" group-hover:scale-125 object-cover  duration-500 relative -z-10"
            />
          </div>
          <div className="p-4 ">
            <h3 className="text-2xl font-bold mb-2">NAME</h3>
            <div className="flex flex-wrap gap-2">
              <span className="text-[#00BC29] bg-[#00BC2933] p-1">
                123x Natural Traffic
              </span>
              <span className="text-[#00BC29] bg-[#00BC2933] p-1">
                123x Natural Traffic
              </span>
              <span className="text-[#00BC29] bg-[#00BC2933] p-1">
                123x Natural Traffic
              </span>
              <span className="text-[#00BC29] bg-[#00BC2933] p-1">
                123x Natural Traffic
              </span>
            </div>

            <p className="mt-4">
              Until recently, the prevailing view assumed lorem ipsum was born
              as a nonsense text. “It's not Latin, though it looks like it, and
              it actually says nothing,” Before & After magazine answered a
              curious reader.
            </p>
          </div>
        </div> */}
      </Slider>
    </div>
  );
};

export default Testimonials;
