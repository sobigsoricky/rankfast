import OuterLayout from '@/components/layouts/outer-layout'
import PortfolioGrid from '@/components/portfolio/portfolio-grid'
import PortfolioHeader from '@/components/portfolio/portfolio-header'
import React from 'react'

const Portfolio = () => {
  return (
    <OuterLayout>
        <PortfolioHeader/>
        <PortfolioGrid/>
    </OuterLayout>
  )
}

export default Portfolio