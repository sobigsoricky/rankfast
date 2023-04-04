import React from "react";
import BlogCard from "./blog-card";

const BlogGrid = ({ posts }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 container mx-auto md:px-[120px] px-2">
      {posts?.map((data, i) => (
        <div key={i}>
          <BlogCard data={data} />
        </div>
      ))}
    </div>
  );
};

export default BlogGrid;
