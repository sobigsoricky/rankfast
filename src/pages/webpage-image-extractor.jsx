import React, { useState } from "react";
import cheerio from "cheerio";
import JSZip from 'jszip';
import FileSaver from 'file-saver';
import OuterLayout from "@/components/layouts/outer-layout";




const WebpageImageExtractor = () => {
  const [url, setUrl] = useState("");
  const [imageUrls, setImageUrls] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getAllImages = (pageUrl) => {
    setIsLoading(true);
    fetch(`https://cors-anywhere-1-production.up.railway.app/${pageUrl}`)
      .then((response) => response.text())
      .then((html) => {
        const $ = cheerio.load(html);
        const urls = [];

        $("img").each((index, element) => {
          const src = $(element).attr("src");
          urls.push(src);
        });

        setImageUrls(urls);
        setIsLoading(false);
      });
  };



  const handleClickDownloadAll = async () => {
    const zip = new JSZip();
   
    for (let i = 0; i < imageUrls.length; i++) {
        const url = imageUrls[i];
        const response = await fetch(`https://cors-anywhere-1-production.up.railway.app/${url}`);
        const blob = await response.blob();
        const filename = url.split('/').pop();
        zip.file(filename, blob);
      }
  
      zip.generateAsync({ type: 'blob' }).then(content => {
        FileSaver.saveAs(content, 'images.zip');
      });
  };
  


  const handleClickDownload = Imgurl => {
    fetch(`https://cors-anywhere-1-production.up.railway.app/${Imgurl}`)
      .then(response => response.blob())
      .then(blob => {
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = url.split('/').pop();
        link.click();
      });
  };
  return (
    <OuterLayout>
      <div
        className="bg-[#212121]  
pt-[140px]  pb-60"
      >
        <div className="flex flex-col lg:flex-row justify-between container mx-auto lg:px-[120px] px-2 ">
          <div className="pt-[80px] ">
            <h1 className="font-[impact] text-4xl md:text-8xl text-white font-light  uppercase">
              XML Sitemap URL Extractor
            </h1>
          </div>
        </div>

        <div className="mt-16 flex flex-col md:flex-row flex-wrap  container mx-auto lg:px-[120px] px-2 ">
          <label
            htmlFor="sitemap-url"
            className="block w-full text-white font-semibold text-lg"
          >
            sitemap-url
          </label>
          <div className="flex  w-full flex-col md:flex-row gap-4 mt-2">
            <input
              placeholder="Sitemap URL"
              onChange={(e) => {
                setUrl(e.target.value);
              }}
              id="sitemap-url"
              type="text"
              className="flex-1 bg-transparent border border-[#FFFFFF33] p-4 text-white placeholder:text-white"
            />
            <button
              onClick={(e) => getAllImages(url)}
              className="py-5 px-20 bg-[#E72C4B] text-white"
            >
              Get All Images
            </button>
          </div>
        </div>
      </div>

      <div className=" container mx-auto lg:px-[120px] px-2 -mt-40">
        <div className="bg-white p-4 rounded-lg">
          <div className="flex flex-wrap w-full justify-between items-center border-b border-[#00000014] py-4">
            <h3 className="font-bold text-lg text-[#212121]">Images</h3>
            <button onClick={e => handleClickDownloadAll()} className="py-3 px-5 bg-[#212121] text-white font-bold rounded-lg">
              Download All
            </button>
          </div>
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between items-center gap-4">
              {imageUrls.map((url, index) => (
                <div key={index} className="flex justify-center w-full items-center border h-full relative">
                <img className="object-center" width={200}  src={url} alt={`Image ${index}`} />
                <button onClick={() => handleClickDownload(url)} className="absolute top-0 right-0 bg-black text-white p-2 text-xs" download>Download</button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </OuterLayout>
  );
};

export default WebpageImageExtractor;
