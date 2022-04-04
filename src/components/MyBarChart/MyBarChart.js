import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import useChart from "../../hooks/useChart";

const MyBarChart = () => {
  const [chartData] = useChart();
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className=" font-bold text-xl text-fuchsia-700 mb-7">
        Investment VS Revenue
      </h1>
      <BarChart width={500} height={300} data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="investment" stackId="a" fill="#b380ff" />
        <Bar dataKey="revenue" stackId="a" fill="#32CD32" />
      </BarChart>
    </div>
  );
};

export default MyBarChart;
