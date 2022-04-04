import React from "react";
import MyAreaChart from "../MyAreaChart/MyAreaChart";
import MyLineChart from "../MyLineChart/MyLineChart";

const Dashboard = () => {
  return (
    <div>
      <h1>This is Dashboard</h1>
      <MyLineChart></MyLineChart>
      <MyAreaChart></MyAreaChart>
    </div>
  );
};

export default Dashboard;
