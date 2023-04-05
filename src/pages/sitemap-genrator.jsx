import OuterLayout from "@/components/layouts/outer-layout";
import React, { useEffect, useState } from "react";
import axios from 'axios';
import cheerio from 'cheerio';
import url from 'url';



const SitemapGenrator = () => {
    const [baseUrl, setBaseUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [visitedUrls, setVisitedUrls] = useState(new Set([url]));
console.log(visitedUrls);
  useEffect(() => {
    crawl(url);
  }, []);

  function crawl(urlToCrawl) {
    // console.log(`Crawling ${urlToCrawl}`);

    axios.get(`https://cors-anywhere-1-production.up.railway.app/${urlToCrawl}`)
      .then(response => {
        // Parse the HTML and extract links
        const $ = cheerio.load(response.data);
        const links = $('a')
          .map((i, link) => $(link).attr('href'))
          .get()
          .filter((link) => link && link.startsWith('/'))
          .map((link) => url.resolve(baseUrl, link));

        // Visit each link if it hasn't been visited before
        links.forEach((link) => {
          if (!visitedUrls.has(link)) {
            setVisitedUrls(new Set([...visitedUrls, link]));
            crawl(link);
          }
        });
      })
      .catch(error => {
        console.error(`Error crawling ${urlToCrawl}: ${error}`);
      });
  }

  return (
    <OuterLayout>
      <div
        className="bg-[#212121]  
  pt-[140px]  pb-60"
      >
        <div className="flex flex-col lg:flex-row justify-between container mx-auto lg:px-[120px] px-2 ">
          <div className="pt-[80px] ">
            <h1 className="font-[impact] text-4xl md:text-8xl text-white font-light  uppercase">
              Sitemap.xml Genrator
            </h1>
          </div>
        </div>

        <div className="mt-16 flex flex-col md:flex-row flex-wrap  container mx-auto lg:px-[120px] px-2 ">
          <label
            htmlFor="url"
            className="block w-full text-white font-semibold text-lg"
          >
            website url
          </label>
          <div className="flex  w-full flex-col md:flex-row gap-4 mt-2">
            <input
              placeholder="URL"
              onChange={(e) => {
                setBaseUrl(e.target.value);
             
              }}
              id="url"
              type="text"
              className="w-full bg-transparent border border-[#FFFFFF33] p-4 text-white placeholder:text-white"
            />
            <button
              onClick={(e) => crawl(baseUrl)}
              className="py-5 px-20 bg-[#E72C4B] text-white"
            >
              Upload
            </button>
          </div>
        </div>
        {`${visitedUrls}`}
      </div>
    </OuterLayout>
  );
};

export default SitemapGenrator;
