import BlogGrid from "@/components/blog/blog-grid";
import BloglistHeader from "@/components/blog/bloglist-header";
import OuterLayout from "@/components/layouts/outer-layout";
import Head from "next/head";
import React from "react";

const Index = ({ posts }) => {

  return (
    <>
   <Head>
    <title>RankFast Blog - Latest Digital Marketing Insights and Strategies</title>
    <meta name="description" content="Stay up-to-date with the latest digital marketing trends and strategies through the RankFast blog. Our expert team shares valuable insights and tips to help you achieve success in SEO, PPC, social media marketing, and more. Visit us today and learn how to rank fast!"></meta>

    
   </Head>
    <OuterLayout>
      <BloglistHeader />
      <div className="-mt-40 relative z-40">
        <BlogGrid posts={posts} />
      </div>
    </OuterLayout>
    </>
  );
};

export default Index;

export async function getServerSideProps({ req, res }) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=86400'
  )

  const res1 = await fetch(process.env.WPGRAPHQL_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
      {
        posts {
          
          nodes {
            title
            slug
            date
            author {
              node {
                name
                avatar {
                  url
                }
              }
            }
            excerpt
            featuredImage {
              node {
                sourceUrl
              }
            }
          }
        }
      }
          `,
    }),
  });

  const json = await res1.json();

  const { nodes } = json?.data?.posts;

  return {
    props: {
        // nodes
      // page,
      posts: nodes,
      // hasNextPage: pageInfo.hasNextPage,
    //   json,
    },
  };
}
