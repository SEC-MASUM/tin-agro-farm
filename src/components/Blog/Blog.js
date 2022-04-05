import React from "react";

const Blog = ({ blog }) => {
  const { title, description, image } = blog;
  console.log(blog);
  return (
    <div className="flex flex-col  max-w-7xl mx-auto my-10 w-3/5 shadow-md">
      <div className="">
        <img className="w-full aspect-video" src={image} alt="" />
      </div>
      <div className="  bg-slate-100 p-5 ">
        <h2 className="font-semibold text-2xl text-slate-700 text-left mb-3">
          {title}
        </h2>
        <p className="font-normal text-lg text-left">{description}</p>
      </div>
    </div>
  );
};

export default Blog;
