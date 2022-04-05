import React from "react";
import Blog from "../Blog/Blog";
import blogImage1 from "../../Assets/images/blog-1.jpeg";
import blogImage2 from "../../Assets/images/blog-2.jpeg";
import blogImage3 from "../../Assets/images/blog-3.png";

const Blogs = ({ setShow }) => {
  setShow(true);
  const blogs = [
    {
      id: 1,
      title: "What is Context API?",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo beatae architecto labore voluptatibus eum distinctio dicta perferendis praesentium quis voluptate.",
      image: blogImage1,
    },
    {
      id: 2,
      title: "What is Semantic Tag?",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo beatae architecto labore voluptatibus eum distinctio dicta perferendis praesentium quis voluptate.",
      image: blogImage2,
    },
    {
      id: 3,
      title: "Difference of inline, block and inline block elements",
      description:
        "Inline: Inline element গুলা একটা লাইনে যতটুকু জায়গা দরকার ঠিক ততটুক্ত জায়গা নিয়ে থাকে। এই inline element গুলাতে height and width properties set করে দিলেও element এ কোনো প্রভাব দেখা যায় না।  কিছু default inline elements যেমনঃ <span>, <a>, <img>. Inline-block: Inline-block element গুলা একটা লাইনের ভিতর block আকারে থাকে। অর্থাৎ inline-block element গুলাতে height and width properties set করা যায় এবং এর প্রভাব দেখা যায়।  কিছু inline-block elements যেমনঃ <span> , <strong>, <img>. Block: Block element গুলা নতুন লাইনে শুরু হয় আর পুরা width দখল করে নেয়।  অর্থাৎ block element গুলাতে height and width properties set করা যায় এবং এর প্রভাব দেখা যায়। কিছু default block elements যেমনঃ <div> , <h1>, <p> <li>.",
      image: blogImage3,
    },
  ];
  return (
    <div>
      {blogs.map((blog) => (
        <Blog key={blog.id} blog={blog}></Blog>
      ))}
    </div>
  );
};

export default Blogs;
