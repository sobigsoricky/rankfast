import OuterLayout from "@/components/layouts/outer-layout";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { CSVLink, CSVDownload } from "react-csv";
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

const SitemapUrlExtractor = () => {
  const [urls, setUrls] = useState([]);
  const [sitemap, setSitemap] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchSitemap = async (url) => {
    setLoading(true);
    await fetch('/api/extract-sitemap', {
      method: "POST",
      body: JSON.stringify({ url: sitemap })
    }).then(response => response.text()).then(data => {
      if (data !== undefined && data !== null && data !== "") {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(data, 'text/xml');

        const jsonData = [];
        const rows = xmlDoc.getElementsByTagName('loc');

        for (let i = 0; i < rows.length; i++) {
          const row = rows[i];
          const rowData = {};

          console.log(row)
          const column1Element = row.innerHTML;
          rowData.column1 = column1Element ? column1Element : '';

          console.log(rowData)
          jsonData.push(rowData);
        }

        const worksheet = XLSX.utils.json_to_sheet(jsonData);

        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet 1');

        const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
        const excelBlob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });

        saveAs(excelBlob, 'data.xlsx');
      }
    })
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
                setSitemap(e.target.value);
                setUrls([["urls"]]);
              }}
              id="sitemap-url"
              type="text"
              className="w-full bg-transparent border border-[#FFFFFF33] p-4 text-white placeholder:text-white"
            />
            <button
              onClick={(e) => fetchSitemap(sitemap)}
              className="py-5 px-20 bg-[#E72C4B] text-white"
            >
              Upload
            </button>
          </div>
        </div>
      </div>

      {urls.length >= 2 ? (
        <div className=" container mx-auto lg:px-[120px] px-2 -mt-40">
          {loading ? "loading..." : ""}
          <div className="bg-white p-4 rounded-lg">
            <div className="flex flex-wrap w-full justify-between items-center border-b border-[#00000014] py-4">
              <h3 className="font-bold text-lg text-[#212121]">Profile URL</h3>
              <CSVLink
                filename={`sitemap-url.csv`}
                data={urls}
                className="py-3 px-5 bg-[#212121] text-white font-bold rounded-lg"
              >
                Download CSV File{" "}
              </CSVLink>
            </div>
            {urls?.map((url, i) => (
              <>
                {i >= 2 ? (
                  <div className="overflow-x-scroll md:overflow-hidden flex flex-wrap items-center gap-5 w-full border-b border-[#00000014] py-4">
                    <Link key={i} href={`${url}`} target={"_blank"} className="block">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.16667 15.5C1.70833 15.5 1.31583 15.3369 0.989167 15.0108C0.663055 14.6842 0.5 14.2917 0.5 13.8333V2.16667C0.5 1.70833 0.663055 1.31583 0.989167 0.989167C1.31583 0.663055 1.70833 0.5 2.16667 0.5H7.16667C7.40278 0.5 7.60083 0.579722 7.76083 0.739167C7.92028 0.899167 8 1.09722 8 1.33333C8 1.56944 7.92028 1.76722 7.76083 1.92667C7.60083 2.08667 7.40278 2.16667 7.16667 2.16667H2.16667V13.8333H13.8333V8.83333C13.8333 8.59722 13.9133 8.39917 14.0733 8.23917C14.2328 8.07972 14.4306 8 14.6667 8C14.9028 8 15.1006 8.07972 15.26 8.23917C15.42 8.39917 15.5 8.59722 15.5 8.83333V13.8333C15.5 14.2917 15.3369 14.6842 15.0108 15.0108C14.6842 15.3369 14.2917 15.5 13.8333 15.5H2.16667ZM5.5 10.5C5.34722 10.3472 5.27083 10.1528 5.27083 9.91667C5.27083 9.68056 5.34722 9.48611 5.5 9.33333L12.6667 2.16667H10.5C10.2639 2.16667 10.0661 2.08667 9.90667 1.92667C9.74667 1.76722 9.66667 1.56944 9.66667 1.33333C9.66667 1.09722 9.74667 0.899167 9.90667 0.739167C10.0661 0.579722 10.2639 0.5 10.5 0.5H14.6667C14.9028 0.5 15.1006 0.579722 15.26 0.739167C15.42 0.899167 15.5 1.09722 15.5 1.33333V5.5C15.5 5.73611 15.42 5.93389 15.26 6.09333C15.1006 6.25333 14.9028 6.33333 14.6667 6.33333C14.4306 6.33333 14.2328 6.25333 14.0733 6.09333C13.9133 5.93389 13.8333 5.73611 13.8333 5.5V3.33333L6.64583 10.5208C6.49306 10.6736 6.30556 10.75 6.08333 10.75C5.86111 10.75 5.66667 10.6667 5.5 10.5Z"
                          fill="#555555"
                        />
                      </svg>
                    </Link>
                    <button onClick={() => navigator.clipboard.writeText(url)}>
                      <svg
                        width="15"
                        height="18"
                        viewBox="0 0 15 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.5 13.9998C5.04167 13.9998 4.64944 13.8368 4.32333 13.5107C3.99667 13.184 3.83333 12.7915 3.83333 12.3332V2.33317C3.83333 1.87484 3.99667 1.48234 4.32333 1.15567C4.64944 0.829559 5.04167 0.666504 5.5 0.666504H13C13.4583 0.666504 13.8508 0.829559 14.1775 1.15567C14.5036 1.48234 14.6667 1.87484 14.6667 2.33317V12.3332C14.6667 12.7915 14.5036 13.184 14.1775 13.5107C13.8508 13.8368 13.4583 13.9998 13 13.9998H5.5ZM5.5 12.3332H13V2.33317H5.5V12.3332ZM2.16667 17.3332C1.70833 17.3332 1.31583 17.1701 0.989167 16.844C0.663055 16.5173 0.5 16.1248 0.5 15.6665V4.83317C0.5 4.59706 0.58 4.399 0.74 4.239C0.899445 4.07956 1.09722 3.99984 1.33333 3.99984C1.56944 3.99984 1.7675 4.07956 1.9275 4.239C2.08694 4.399 2.16667 4.59706 2.16667 4.83317V15.6665H10.5C10.7361 15.6665 10.9342 15.7465 11.0942 15.9065C11.2536 16.0659 11.3333 16.2637 11.3333 16.4998C11.3333 16.7359 11.2536 16.9337 11.0942 17.0932C10.9342 17.2532 10.7361 17.3332 10.5 17.3332H2.16667Z"
                          fill="#555555"
                        />
                      </svg>
                    </button>
                    <p className="text-xs md:text-base ">
                      {url}
                    </p>
                  </div>
                ) : ""}
              </>
            ))}

          </div>
        </div>
      ) : ''}
    </OuterLayout>
  );
};

export default SitemapUrlExtractor;
