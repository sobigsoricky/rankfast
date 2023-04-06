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
import LatestBlogs from "@/components/home-page/latest-blogs";
import NewBlogCard from "@/components/blog/new-blog-card";

export default function Home({posts}) {
  return (
    <>
    <Head>
      <title>Rankfast - Leading SEO Agency for Customized Online Solutions</title>
      <meta name="description" content="Rankfast is a top SEO agency that provides customized solutions to improve your online presence and search engine rankings. Their services include SEO, content marketing, link building, UI UX design, and more. They are also committed to education, offering free online courses through their search engine Coursenator." />
      <meta name="keywords" content="SEO agency, online presence, search engine optimization, content marketing, link building, UI UX design, education, Coursenator."/>
    </Head>
      <OuterLayout>
        <Hero />
        <NewBlogCard/>
        <RecentProject />
        <Services /> 
        <AuditReportForm />
        <SeonatorTurnon/>
        <RevenueGenrated />
        {/* <Testimonials /> */}
        <BookMeating />
        {/* <LatestBlogs data={posts}/> */}
        <Team />
      </OuterLayout>
    </>
  );
}

// export async function getServerSideProps({ req, res }) {
//   res.setHeader(
//     'Cache-Control',
//     'public, s-maxage=10, stale-while-revalidate=86400'
//   )

//   const res1 = await fetch(process.env.WPGRAPHQL_URL, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       query: `
//       {
//         posts {
          
//           nodes {
//             title
//             slug
//             date
//             author {
//               node {
//                 name
//                 avatar {
//                   url
//                 }
//               }
//             }
//             excerpt
//             featuredImage {
//               node {
//                 sourceUrl
//               }
//             }
//           }
//         }
//       }
//           `,
//     }),
//   });

//   const json = await res1.json();

//   const { nodes } = json?.data?.posts;

//   return {
//     props: {
//         // nodes
//       // page,
//       posts: nodes,
//       // hasNextPage: pageInfo.hasNextPage,
//     //   json,
//     },
//   };
// }
