import Head from "next/head";
import Image from "next/image";
import Navbar from "@/components/layouts/navbar";
import Hero from "@/components/home-page/hero";
import RecentProject from "@/components/home-page/recent-project";
import Services from "@/components/home-page/services";
import AuditReportForm from "@/components/home-page/audit-report-form";
import RevenueGenrated from "@/components/home-page/revenue-genrated";
import Testimonials from "@/components/testimonials";
import Team from "@/components/home-page/team";
import BookMeating from "@/components/home-page/book-meating";
import Footer from "@/components/layouts/footer";
import OuterLayout from "@/components/layouts/outer-layout";
import SeonatorTurnon from "@/components/home-page/seonator-turnon";

export default function Home() {
  return (
    <>
    <Head>
      <title>Rankfast - Leading SEO Agency for Customized Online Solutions</title>
      <meta name="description" content="Rankfast is a top SEO agency that provides customized solutions to improve your online presence and search engine rankings. Their services include SEO, content marketing, link building, UI UX design, and more. They are also committed to education, offering free online courses through their search engine Coursenator." />
      <meta name="keywords" content="SEO agency, online presence, search engine optimization, content marketing, link building, UI UX design, education, Coursenator."/>
    </Head>
      <OuterLayout>
        <Hero />
        <RecentProject />
        <Services />
        <AuditReportForm />
        <SeonatorTurnon/>
        <RevenueGenrated />
        {/* <Testimonials /> */}
        <Team />
        <BookMeating />
      </OuterLayout>
    </>
  );
}
