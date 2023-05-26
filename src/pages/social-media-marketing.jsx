import ContactUsHeader from "@/components/contact/contact-us-header"
import BookMeating from "@/components/home-page/book-meating"
import OuterLayout from "@/components/layouts/outer-layout"
import Testimonials from "@/components/testimonials"
import Services from "@/components/services/services-table"
import SocialTextImage from "@/components/social-media/social-text-image"
import SocialHero from "@/components/social-media/social-hero"
import ServiceMeeting from "@/components/services/service-meeting"
import Head from "next/head"
import React from "react"

const Services1 = () => {
  return (
    <>
      <Head>
        <title>Digital Marketing services for Businesses </title>
        <meta
          name='description'
          content='Social media marketing services from the leading social media marketing company. Rankfast is your go-to source for social media marketing.'
        />
      </Head>
      <OuterLayout>
        <SocialHero />
        <SocialTextImage />
        <Services />
        <ServiceMeeting />
        {/* <Testimonials /> */}
      </OuterLayout>
    </>
  )
}

export default Services1
