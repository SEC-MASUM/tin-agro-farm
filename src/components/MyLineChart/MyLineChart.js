import React from "react";
import { Legend, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";
import useChart from "../../hooks/useChart";

const MyLineChart = () => {
  const [chartData] = useChart();
//   console.log(chartData);

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className=" font-bold text-xl text-fuchsia-700 mb-7">
        Month Wise Sell
      </h1>
      <LineChart width={500} height={400} data={chartData}>
        <Line type="monotone" dataKey="sell" stroke="#8334d8"></Line>
        <XAxis dataKey={"month"}></XAxis>
        <YAxis></YAxis>
        <Tooltip></Tooltip>
        <Legend />
      </LineChart>
    </div>
  );
};

export default MyLineChart;
