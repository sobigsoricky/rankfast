import OuterLayout from '@/components/layouts/outer-layout'
import PortfolioGrid from '@/components/portfolio/portfolio-grid'
import PortfolioHeader from '@/components/portfolio/portfolio-header'
import Head from 'next/head'
import React from 'react'

const Portfolio = () => {
  return (
    <>
    <Head>
      <title>Portfolio|Rankfast</title>
      <meta name="description" content=" Check out Rankfast's portfolio and see how our team of SEO experts has helped businesses improve their online presence and achieve higher search engine rankings. Our customized solutions include SEO, content marketing, link building, UI UX design, and more." />
    </Head>
    <OuterLayout>
        <PortfolioHeader/>
        <PortfolioGrid/>
    </OuterLayout>
    </>
  )
}

export default Portfolio