import React, { useEffect, useState } from "react";
import useReviews from "../../hooks/useReviews";
import Review from "../Review/Review";
// import reviewData from "./reviewData";
const Reviews = () => {
  const [reviews, setReviews] = useReviews();
  // const [reviews, setReviews] = useState([]);
  // //   console.log(reviewData);
  // useEffect(() => {
  //   fetch("reviewData.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setReviews(data);
  //       console.log(data);
  //     });
  //   //
  // }, []);
  return (
    <div className="max-w-7xl mx-auto my-5">
      <div className="grid grid-cols-3 gap-8">
        {reviews.map((review) => (
          <Review key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
