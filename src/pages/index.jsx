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
      <OuterLayout>
        <Hero />
        <RecentProject />
        <Services />
        <AuditReportForm />
        <SeonatorTurnon/>
        <RevenueGenrated />
        <Testimonials />
        <Team />
        <BookMeating />
      </OuterLayout>
    </>
  );
}
