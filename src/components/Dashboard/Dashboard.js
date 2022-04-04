import React from "react";
import MyAreaChart from "../MyAreaChart/MyAreaChart";
import MyBarChart from "../MyBarChart/MyBarChart";
import MyLineChart from "../MyLineChart/MyLineChart";
import MyPieChart from "../MyPieChart/MyPieChart";

const Dashboard = () => {
  return (
    <div>
      <h1>This is Dashboard</h1>
      <MyLineChart></MyLineChart>
      <MyAreaChart></MyAreaChart>
      <MyBarChart></MyBarChart>
      <MyPieChart></MyPieChart>
    </div>
  );
};

export default Dashboard;
