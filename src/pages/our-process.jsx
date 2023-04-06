import BookMeating from '@/components/home-page/book-meating'
import RecentProject from '@/components/home-page/recent-project'
import OuterLayout from '@/components/layouts/outer-layout'
import ProcessHeader from '@/components/process/process-header'
import Head from 'next/head'
import React from 'react'

const OurProcess = () => {
  return (
    <>
    <Head>
      <title>Our Process|Rankfast-How We Helps You Achieve Your Online Goals</title>
      <meta name="description" content="At Rankfast, we believe in a collaborative approach to SEO. Our process involves working closely with clients to understand their unique needs and develop customized solutions that help achieve their online goals. Our process includes SEO audits, keyword research, content optimization, link building, and more." />
    </Head>
        <OuterLayout>
<ProcessHeader/>
<RecentProject/>
<br />
<BookMeating/>
        </OuterLayout>
    </>
  )
}

export default OurProcess