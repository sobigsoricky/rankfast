import AboutHeader from '@/components/about/about-header'
import AboutPartner from '@/components/about/about-partner'
import AboutStory from '@/components/about/about-story'
import OuterLayout from '@/components/layouts/outer-layout'
import React from 'react'

const AboutUs = () => {
  return (
    <OuterLayout>
        <AboutHeader/>
        <AboutStory/>
        <AboutPartner/>
    </OuterLayout>
  )
}

export default AboutUs