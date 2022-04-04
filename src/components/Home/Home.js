import React from "react";
import figImage from "../../Assets/images/fig-2.jpg";

const Home = () => {
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad illum
            suscipit nobis perferendis harum, pariatur omnis quisquam ipsa at
            quaerat quod voluptatum reiciendis quia hic enim dolor aut sint
            quibusdam eius placeat dolorem dignissimos minima consequuntur
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
      {/* Review Section i Home page */}
      <div className="my-28">
        <h1 className="font-bold text-6xl text-slate-700 mb-20">
          What Our <span className="text-green-500"> Customers Are Saying</span>
        </h1>
        {
          // for(let i =0; i<3; i++){

          // }
        }
        <button className="bg-green-200 rounded-md px-6 py-4 mt-5 font-semibold text-xl text-slate-700 shadow-md shadow-green-500">
          See More
        </button>
      </div>
    </div>
  );
};

export default Home;
