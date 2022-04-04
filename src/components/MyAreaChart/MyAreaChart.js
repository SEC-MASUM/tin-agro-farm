import React, { useEffect, useState } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import useChart from "../../hooks/useChart";

const MyAreaChart = () => {
  const [chartData] = useChart();

  return (
    <div>
      <AreaChart width={500} height={400} data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />

        <Area
          type="monotone"
          dataKey="investment"
          stackId="1"
          stroke="#944dff"
          fill="#b380ff"
        />
        <Area
          type="monotone"
          dataKey="revenue"
          stackId="1"
          stroke="#32CD32"
          fill="#90ee90"
        />
      </AreaChart>
    </div>
  );
};

export default MyAreaChart;
