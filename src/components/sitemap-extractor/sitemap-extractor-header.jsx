import Link from "next/link";
import React, { useState, useEffect } from "react";
import { CSVLink, CSVDownload } from "react-csv";

const SitemapExtractorHeader = () => {
  const [urls, setUrls] = useState([["urls"]]);
  const [sitemap, setSitemap] = useState("")
 
  const fetchSitemap = (url) => {
  
    fetch(`/api/proxy?url=${url}`)
      .then((response) => response.text())
      .then((data) => {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(data, "text/xml");
        const sitemaps = xmlDoc.getElementsByTagName("sitemap");
        const urls = [];

        for (let i = 0; i < sitemaps.length; i++) {
          const loc = sitemaps[i].getElementsByTagName("loc")[0].childNodes[0].nodeValue;
          fetchSitemap(loc);
        }

        const locs = xmlDoc.getElementsByTagName("loc");
        for (let i = 0; i < locs.length; i++) {
          urls.push( [locs[i].childNodes[0].nodeValue]);
        }

        setUrls(prevUrls => [...prevUrls, ...urls]);
      });
  };
  return (
    <>
   
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
          <input onChange={e => setSitemap(e.target.value)} id="sitemap-url" type="text" className="w-full bg-transparent border border-[#FFFFFF33]" />
          <button onClick={e => fetchSitemap(sitemap)} className="py-5 px-20 bg-[#E72C4B]">Upload</button>
        </div>
      </div>

    
    </div>
    <div className="bg-white p-4 rounded-lg">
        <div>
            <h3>Profile URL</h3>
            <CSVLink data={urls} className="py-3 px-5 bg-[#212121] text-white font-bold">Download </CSVLink>
        </div>
        {urls?.map((url, i) =>(
          <Link key={i} href={url} target={"_blank"}>{url}</Link>
        ))}

      </div>
    </>
  );
};

export default SitemapExtractorHeader;
