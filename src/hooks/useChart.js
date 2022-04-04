import { useEffect, useState } from "react";

const useChart = () => {
  const [chartData, setChartData] = useState([]);

  // console.log(reviews);
  useEffect(() => {
    fetch("chartData.json")
      .then((res) => res.json())
      .then((data) => {
        setChartData(data);
        console.log(data);
      });
    //
  }, []);
  return [chartData, setChartData];
};

export default useChart;
