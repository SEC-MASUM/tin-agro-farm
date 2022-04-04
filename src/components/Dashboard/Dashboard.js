import React from "react";
import MyAreaChart from "../MyAreaChart/MyAreaChart";
import MyBarChart from "../MyBarChart/MyBarChart";
import MyLineChart from "../MyLineChart/MyLineChart";
import MyPieChart from "../MyPieChart/MyPieChart";

const Dashboard = ({ setShow }) => {
  setShow(true);
  return (
    <div className="max-w-7xl mx-auto mx-10">
      <div className="grid grid-cols-2 gap-y-16 my-8">
        <MyLineChart></MyLineChart>
        <MyAreaChart></MyAreaChart>
        <MyBarChart></MyBarChart>
        <MyPieChart></MyPieChart>
      </div>
    </div>
  );
};

export default Dashboard;
