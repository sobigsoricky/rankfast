import React from "react";

const SitemapExtractorHeader = () => {
  return (
    <div
      className="bg-[#212121]  
  pt-[140px]  pb-16"
    >
      <div className="flex flex-col lg:flex-row justify-between container mx-auto lg:px-[120px] px-2 ">
        <div className="pt-[80px] ">
          <h1 className="font-[impact] text-5xl md:text-8xl text-white font-light  uppercase">
            XML Sitemap URL Extractor
          </h1>
        </div>
      </div>

      <div className="mt-16 flex flex-wrap  container mx-auto lg:px-[120px] px-2 ">
        <label htmlFor="sitemap-url" className="block w-full text-white font-semibold text-lg">
          sitemap-url
        </label>
        <div className="flex w-full">
          <input id="sitemap-url" type="text" className="w-full bg-transparent border border-[#FFFFFF33]" />
          <button className="py-5 px-20 bg-[#E72C4B]">Upload</button>
        </div>
      </div>

      <div>
        <div>
            <h3>Profile URL</h3>
            <button className="">Download CSV File</button>
        </div>
      </div>
    </div>
  );
};

export default SitemapExtractorHeader;
