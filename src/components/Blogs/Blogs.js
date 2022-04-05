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
        "React এ parent components থেকে child components এ ডাটা বা ফাংশন পাঠানোর জন্য props use করা হয়। উপর থেকে নিচের দিকের component গুলাতে props এর মাধ্যমে ডাটা পাঠানোর কাজকে props drilling বলা হয়। এই props drilling টা অনেক সময় অহেতুক অতিরিক্ত খাটুনি ও বিরক্তিকর হয়ে যায়। যার ফলে কোড ম্যানেজ করাটাও কষ্টসাধ্য হয়ে পরে। props drilling এর সমস্যা সমাধানের জন্যই context api এর আবির্ভাব হয়েছে। একটা context create করে যতগুলা componets কে ওই context এর ভিতর wrap করে দেয়া হবে সব components থেকেই context api এর মাধ্যমে যে data pass করা হতে তা access করা যাবে। তাহলে প্রত্যেক parents থেকে child এ ডাটা পাঠানোর কাজ টা বার বার করা লাগছে না। এইভাবে context api আমাদের ডেভেলপারদের কাজ অনেক easy করে দিয়েছে।",
      image: blogImage1,
    },
    {
      id: 2,
      title: "What is Semantic Tag?",
      description:
        "Semantic elements দ্বারা অর্থবোধক কিছু প্রকাশ পায়। যেই অর্থ একজন ডেভেলপার যেমন সহজেই বুঝতে পারে ঠিক তেমনি ব্রাউজারও বুঝে নিতে পারে। Semantic tag use করলে code দেখে পড়তে ও বুঝতে অনেক সুবিধা হয়। আর Search engines এর জন্যও Semanting tag খুবই helpful.",
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
