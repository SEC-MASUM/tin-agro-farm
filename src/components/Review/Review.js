import React from "react";
import { AiFillStar } from "react-icons/ai";

const Review = ({ review }) => {
  const { author, posted_date, image, rating, text } = review;
  return (
    <div>
      <div className="max-w-md min-h-[400px] py-4 px-8 bg-white shadow-md shadow-gray-300 rounded-lg my-8">
        <div className="flex justify-center md:justify-start -mt-16">
          <img
            className="w-20 h-20 object-cover rounded-full border-2 border-white shadow-sm shadow-slate-500"
            src={image}
            alt="profile"
          />
        </div>
        <div>
          <h2 className="text-slate-700 text-3xl font-bold text-left mt-5">
            {author}
          </h2>
          <div className="flex justify-between my-5 text-xl">
            <h3 className="text-green-500  font-semibold uppercase text-left ">
              {posted_date}
            </h3>
            <h3 className="text-amber-400 flex items-center gap-2">
              {rating} <AiFillStar />
            </h3>
          </div>
          <p className="mt-2 text-gray-600 text-left font-medium text-lg text-justify">
            {text}
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default Review;
