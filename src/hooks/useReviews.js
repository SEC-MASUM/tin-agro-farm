import { useEffect, useState } from "react";

const useReviews = () => {
  const [reviews, setReviews] = useState([]);

    // console.log(reviews);
  useEffect(() => {
    fetch("reviewData.json")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        console.log(data);
      });
    //
  }, []);
  return [reviews, setReviews];
};

export default useReviews;
