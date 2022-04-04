import React from "react";
import {AiFillStar} from "react-icons/ai"

const Review = ({ review }) => {
  const { author, posted_date, image, rating, text } = review;
  return (
    <div>
      <div class="max-w-md py-4 px-8 bg-white shadow-lg shadow-sky-300 rounded-lg my-20">
        <div class="flex justify-center md:justify-start -mt-16">
          <img
            class="w-20 h-20 object-cover rounded-full border-2 border-fuchsia-700 shadow-md shadow-purple-500"
            src={image}
            alt="profile"
          />
        </div>
        <div>
          <h2 class="text-slate-700 text-3xl font-bold text-left mt-5">
            {author}
          </h2>
          <div className="flex justify-between my-5 text-xl">
            <h3 class="text-green-500  font-semibold uppercase text-left ">
              {posted_date}
            </h3>
            <h3 className="text-amber-400 flex items-center gap-2">
              {rating} <AiFillStar />
            </h3>
          </div>
          <p class="mt-2 text-gray-600 text-left font-medium text-lg text-justify">{text}</p>
        </div>
        {/* <div class="flex justify-end mt-4">
          <a href="#" class="text-xl font-medium text-indigo-500">
            John Doe
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default Review;
