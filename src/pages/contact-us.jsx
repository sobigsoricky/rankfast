import ContactUsHeader from "@/components/contact/contact-us-header";
import BookMeating from "@/components/home-page/book-meating";
import OuterLayout from "@/components/layouts/outer-layout";
import Testimonials from "@/components/testimonials";
import Head from "next/head";
import React from "react";

const ContactUs = () => {
  return (
    <>
    <Head>
      <title>Contact Us - Get in Touch with Rankfast's SEO Experts</title>
      <meta name="description" content=" Have a question or want to learn more about Rankfast's SEO services? Contact us today and speak with our team of experienced professionals. We offer customized solutions that can help improve your online presence and search engine rankings." />
      
    </Head>
    <OuterLayout>
        <ContactUsHeader/>
      <BookMeating color="white"/>
      {/* <Testimonials /> */}
    </OuterLayout>
    </>

  );
};

export default ContactUs;
