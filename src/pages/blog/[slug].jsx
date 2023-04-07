import AutherSidebar from "@/components/blog/single-blog/auther-sidebar";
import SingleblogContent from "@/components/blog/single-blog/singleblog-content";
import SingleblogHeader from "@/components/blog/single-blog/singleblog-header";
import OuterLayout from "@/components/layouts/outer-layout";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

const SingleBlog = ({ post }) => {
  const router = useRouter()
  console.log(router);
  return (
    
    <>
  <Head>
  <meta name="robots" content="index, follow"/>
  <meta name="keywords" content={post?.seo?.metaKeywords}/>
  <meta name="description" content={post?.seo?.metaDesc || `${post?.seo?.title} |Boost your website's visibility and improve your SEO game with RankFast's informative blog. Stay up-to-date with the latest trends and strategies, and discover actionable tips to attract more organic traffic. Join our community of digital marketers and take your online presence to the next level`}/>
  <title>{post?.seo?.title}</title>
  </Head>
    <OuterLayout>
      <SingleblogHeader
        img={
          post?.featuredImage?.node?.sourceUrl ||
          "https://iili.io/HO5KTjj.md.png"
        }
      />
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-start justify-between  md:px-[120px] px-2 gap-5 md:gap-8">
        <div className="md:basis-1/5">
          <AutherSidebar
            decription={post?.author?.node?.description}
            img={post?.author?.node?.avatar?.url}
            name={post?.author?.node?.name}
          />
        </div>
        <article className="md:basis-3/5">
          <SingleblogContent
            content={post?.content}
            title={post?.title}
            auther={post?.author?.node?.name}
            date={post?.date}
          />
        </article>
        <div className="md:basis-1/5">
          <div className="max-w-[200px] w-full"></div>
        </div>
      </div>
    </OuterLayout>
    </>
  );
};

export default SingleBlog;

export async function getServerSideProps(context) {
  context.res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=8640000'
  )
  const { slug } = context.query;
  const res1 = await fetch(process.env.WPGRAPHQL_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
       {
            post(id: "${slug}", idType: SLUG) {
              content
              date
              title
            
              seo {
                title
                metaDesc
                metaKeywords
              }
              author {
                node {
                  name
                  avatar {
                    url
                  }
                }
              }
              featuredImage {
                node {
                  sourceUrl
                }
              }
            }
          }
            `,
    }),
  });

  const json = await res1.json();

  const post = json?.data?.post;

  return {
    props: {
      // nodes
      // page,
      post,
      // hasNextPage: pageInfo.hasNextPage,
      // json,
    },
  };
}
