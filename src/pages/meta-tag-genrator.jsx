import React, { useEffect, useState } from "react"
import cheerio from "cheerio"
import OuterLayout from "@/components/layouts/outer-layout"

const MetaTagGenrator = () => {
  const [url, setURL] = useState("")
  const [metatag, setMetatag] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const getMetaTag = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    const res = await fetch(`/api/meta-genrator-api?url=${url}`)
    const data = await res.json()

    // const data = await res
    if (data && data.choices && data.choices[0]) {
      setMetatag(JSON.parse(data.choices[0].text))
    } else {
      console.log("Data not formatted as expected:", data)
    }
    setIsLoading(false)
  }

  return (
    <OuterLayout>
      <div
        className='bg-[#212121]  
  pt-[140px]  pb-60'
      >
        <div className='flex flex-col lg:flex-row justify-between container mx-auto lg:px-[120px] px-2 '>
          <div className='pt-[80px] '>
            <h1 className='font-[impact] text-4xl md:text-8xl text-white font-light  uppercase'>
              Meta description and title genrator
            </h1>
          </div>
        </div>

        <div className='mt-16 flex flex-col md:flex-row flex-wrap  container mx-auto lg:px-[120px] px-2 '>
          <label
            htmlFor='sitemap-url'
            className='block w-full text-white font-semibold text-lg'
          >
            webpage url
          </label>
          <div className='flex  w-full flex-col md:flex-row gap-4 mt-2'>
            <input
              placeholder='Webpage URL'
              onChange={(e) => {
                setURL(e.target.value)
              }}
              id='sitemap-url'
              type='text'
              className='w-full bg-transparent border border-[#FFFFFF33] p-4 text-white placeholder:text-white'
            />
            <button
              onClick={(e) => getMetaTag(e)}
              className='py-5 px-20 bg-[#E72C4B] text-white'
            >
              Genrate
            </button>
          </div>
        </div>
      </div>

      <div className=' container mx-auto lg:px-[120px] px-2 -mt-40'>
        <div className='bg-white p-4 rounded-lg'>
          {isLoading ? (
            "Loading...."
          ) : (
            <>
              <p>
                {" "}
                <b>Title</b> - {metatag?.meta_title || metatag?.title}
              </p>
              <p>
                {" "}
                <b>Description</b> -{" "}
                {metatag?.meta_description || metatag?.description}
              </p>
            </>
          )}
        </div>
      </div>
    </OuterLayout>
  )
}

export default MetaTagGenrator
