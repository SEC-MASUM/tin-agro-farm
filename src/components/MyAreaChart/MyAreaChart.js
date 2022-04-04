import React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import useChart from "../../hooks/useChart";

const MyAreaChart = () => {
    const [chartData, setChartData] = useChart();

  return (
    <div>
      <AreaChart width={500} height={400} data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey={"revenue"}
          stroke="#8884d8"
          fill="#8884d8"
        />
        <Area
          type="monotone"
          dataKey={"investment" }
          stroke="#8884d8"
          fill="#8884d8"
        />
      </AreaChart>
    </div>
  );
};

export default MyAreaChart;
