import ContactUsHeader from "@/components/contact/contact-us-header";
import BookMeating from "@/components/home-page/book-meating";
import OuterLayout from "@/components/layouts/outer-layout";
import Testimonials from "@/components/testimonials";
import React from "react";

const ContactUs = () => {
  return (
    <OuterLayout>
        <ContactUsHeader/>
      <BookMeating color="white"/>
      <Testimonials />
    </OuterLayout>
  );
};

export default ContactUs;
