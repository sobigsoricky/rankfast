import Image from "next/image";
import React from "react";

const Companies = [
  {
    img:"https://cdn1.byjus.com/byjusweb/img/home/svg/byjus_logo.svg",
    name: "Byju's",
    details:
      "An Indian multinational educational technology company, headquartered in Bangalore, Karnataka, India. It was founded in 2011 by Byju Raveendran and Divya Gokulnath. As of March 2022, Byju's is valued at US$22 billion and the company claims to have over 115 million registered students.",
  },
  {
    img:"https://cdn11.bigcommerce.com/s-rntsv/images/stencil/original/logo_1653105925__29174.original.png",
    name: "Australian Opal Direct",
    details:
      "A brand that specializes in designing and creating custom-made Opal jewelry. With over 30 years of experience in the Opal industry, the brand is committed to providing the best quality Opal gemstones at competitive prices.",
  },
  {
    img:"https://iili.io/HhbKLnj.png",
    name: "Pepper Content",
    details:
      "A technology-driven content creation company that aims to become the world's largest content company by building the technological plumbing that will power all content ever created. They offer a one-of-a-kind full-stack content creation self-serve platform to allow businesses to order content at one go. Pepper Content has over 120,000 creators and has delivered more than one million content projects to 2,500+ customers.",
  },
  {
    img:"https://productscdn.notifyvisitors.com/products/wp-content/uploads/2021/05/02051347/nv-logo-_2_-1.png",
    name: "NotifyVisitors",
    details:
      "A marketing automation software that provides personalized push notifications and messages to customers.",
  },
  {
    img:"https://leadsgorilla.io/founders-special/assets/images/logo.png",
    name: "Leadsgorilla 2.0",
    details:
      "A brand that offers an AI-powered lead finder to help businesses find new clients and close more deals. With Leadsgorilla 2.0, users can find qualified leads in less than a minute by logging in, choosing a business category, keyword, and/or location, and hitting enter. The brand's AI generates reports for prequalified leads and helps users contact and close clients by writing custom business proposals.",
  },
  {
    img:"http://www.bvcouncil.com/assets/images/logo.png",
    name: "BV Council",
    details:
      "A network training institute located in Kolkata that aims to provide world-class training and certification for computer networking. The institute specializes in Cisco Routing & Switching, VOIP, Wireless, Security, Microsoft, and Tally certifications, and offers a mix of theory and practical knowledge to prepare students for successful careers in networking.",
  },
  {
    img:"https://aspert.com.my/wp-content/uploads/2022/03/cropped-aspert-long-word400-removebg-preview-2.png",
    name: "Aspert Innovations Sdn Bhd",
    details:
      "A one-stop business and IT solution consultancy that specializes in comprehensive business solutions, IT services, enterprise resource planning (SAP Business One), and custom-made solutions. Founded in 2011, Aspert has helped businesses increase profitability and improve efficiency through integrated and customized solutions.",
  },
];

const PortfolioGrid = () => {
  return (
    <div className="flex flex-wrap justify-center md:justify-between container mx-auto lg:px-[120px] px-2 gap-8 -mt-20 relative z-50">
      {Companies?.map((company, i) => (
        <div key={i} className="w-[400px] border border-[#00000033]">
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
      ))}
    </div>
  );
};

export default PortfolioGrid;
