import React from "react";
import { Pie, PieChart, Tooltip } from "recharts";
import useChart from "../../hooks/useChart";

const MyPieChart = () => {
  const [chartData] = useChart();
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <h1 className=" font-bold text-xl text-fuchsia-700 mb-7">
          Investment VS Revenue
        </h1>
        <PieChart width={400} height={300}>
          <Pie
            data={chartData}
            dataKey="investment"
            cx="50%"
            cy="50%"
            outerRadius={60}
            fill="#b380ff"
          />
          <Pie
            data={chartData}
            dataKey="revenue"
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={90}
            fill="#32CD32"
            label
          />
        </PieChart>
      </div>
    </div>
  );
};

export default MyPieChart;
