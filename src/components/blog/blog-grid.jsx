import React from "react";
import BlogCard from "./blog-card";
import NewBlogCard from "./new-blog-card";

const BlogGrid = ({ posts }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-10 container mx-auto md:px-[120px] px-2 justify-between">
      {posts?.map((data, i) => (
        <div key={i}>
          {/* <BlogCard data={data} /> */}
          <NewBlogCard data={data}/>
        </div>
      ))}
    </div>
  );
};

export default BlogGrid;
