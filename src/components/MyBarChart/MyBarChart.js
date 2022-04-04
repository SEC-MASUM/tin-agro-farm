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
    <div>
      <BarChart width={500} height={300} data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="investment" stackId="a" fill="#b380ff" />
        <Bar dataKey="revenue" stackId="a" fill="#90ee90" />
      </BarChart>
    </div>
  );
};

export default MyBarChart;
