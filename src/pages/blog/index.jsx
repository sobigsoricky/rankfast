import BlogGrid from "@/components/blog/blog-grid";
import BloglistHeader from "@/components/blog/bloglist-header";
import OuterLayout from "@/components/layouts/outer-layout";
import React from "react";

const Index = ({ posts }) => {

  return (
    <OuterLayout>
      <BloglistHeader />
      <div className="-mt-40 relative z-40">
        <BlogGrid posts={posts} />
      </div>
    </OuterLayout>
  );
};

export default Index;

export async function getServerSideProps({ context }) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=86400'
  )

  const res = await fetch(process.env.WPGRAPHQL_URL, {
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

  const json = await res.json();

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
