import React, { useEffect, useState } from "react";
import useReviews from "../../hooks/useReviews";
import Review from "../Review/Review";

const Reviews = ({ setShow }) => {
  setShow(true);
  const [reviews] = useReviews();
  return (
    <div className="max-w-7xl mx-auto my-5">
      <h1 className="font-bold text-6xl text-slate-700 mb-16">
        What Our <span className="text-green-500"> Customers Are Saying</span>
      </h1>
      <div className="grid grid-cols-3 gap-8">
        {reviews.map((review) => (
          <Review key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
