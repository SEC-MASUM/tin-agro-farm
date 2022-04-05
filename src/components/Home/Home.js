import React from "react";
import { useNavigate } from "react-router-dom";
import figImage from "../../Assets/images/fig-2.jpg";
import useReviews from "../../hooks/useReviews";
import Review from "../Review/Review";

const Home = ({ setShow }) => {
  setShow(true);
  const [reviews] = useReviews();
  let navigate = useNavigate();
  console.log(reviews);

  return (
    <div className="max-w-7xl mx-auto my-10">
      <div className="grid grid-cols-3 gap-4  mx-5 ">
        <div className="col-span-2 flex flex-col items-start justify-center ">
          <h1 className="font-sans font-bold text-7xl text-left text-fuchsia-700">
            Tin Fruit
          </h1>
          <h1 className="font-sans font-bold text-7xl text-left text-green-500">
            For a better Life
          </h1>
          <p className="text-left text-justify font-normal text-xl mr-16 my-5">
            Tin Fruits and Vegetables work as a non-perishable and safe
            alternative for fresh or frozen fruits and vegetables. Tin fruits
            and vegetables are vital sources of nutrients because they are
            tinned soon after harvest ensuing minimal loss of nutrients and high
            in quality.
          </p>
          <button className="bg-purple-200 rounded-md px-6 py-4 mt-5 ml-8 font-semibold text-xl text-fuchsia-900 shadow-md shadow-purple-500">
            Live Demo
          </button>
        </div>
        <div className="flex justify-center ">
          <img
            className="object-contain rounded-md shadow-lg shadow-sky-400"
            src={figImage}
            alt=""
          />
        </div>
      </div>

      {/* Review Section in Home page */}
      <div className="my-28">
        <h1 className="font-bold text-6xl text-slate-700 mb-20">
          What Our <span className="text-green-500"> Customers Are Saying</span>
        </h1>
        <div className="grid grid-cols-3 gap-8">
          {reviews.slice(3).map((review) => (
            <Review key={review.id} review={review}></Review>
          ))}
        </div>

        <button
          onClick={() => navigate("/reviews")}
          className="bg-green-200 rounded-md px-6 py-4 mt-5 font-semibold text-xl text-slate-700 shadow-md shadow-green-500"
        >
          See All Reviews
        </button>
      </div>
    </div>
  );
};

export default Home;
