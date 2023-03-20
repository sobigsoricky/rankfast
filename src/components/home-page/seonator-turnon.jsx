import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};
const labels = ["January", "February", "March", "April", "May", "June", "July"];

const SeonatorTurnon = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [data, setData] = useState({
    labels,
    datasets: [
      {
        label: "Natural traffic",
        data: [10, 20, 40, 60, 100, 120],
        borderColor: "#E72C4B",
        backgroundColor: "#E72C4B",
      },
      {
        label: "Leads",
        data: [0, 20, 30, 70, 90, 110],
        borderColor: "#1164BB",
        backgroundColor: "#1164BB",
      },
      {
        label: "Growth",
        data: [-60, 0, 40, 60, 80, 95],
        borderColor: "#F5841F",
        backgroundColor: "#F5841F",
      },
    ],
  });

  const seonatorOn = () => {
    setIsChecked(!isChecked);
   
  };

  useEffect(() => {
    if (isChecked == true) {
      setData({
        labels,
        datasets: [
          {
            label: "Natural traffic",
            data: [40, 60, 70, 60, 200, 420],
            borderColor: "#E72C4B",
            backgroundColor: "#E72C4B",
          },
          {
            label: "Leads",
            data: [10, 120, 130, 170, 190, 210],
            borderColor: "#1164BB",
            backgroundColor: "#1164BB",
          },
          {
            label: "Growth",
            data: [160, 110, 240, 260, 280, 395],
            borderColor: "#F5841F",
            backgroundColor: "#F5841F",
          },
        ],
      });
    } 
    
    if(isChecked == false) {
      setData({
        labels,
        datasets: [
          {
            label: "Natural traffic",
            data: [10, 20, 40, 60, 100, 120],
            borderColor: "#E72C4B",
            backgroundColor: "#E72C4B",
          },
          {
            label: "Leads",
            data: [0, 20, 30, 70, 90, 110],
            borderColor: "#1164BB",
            backgroundColor: "#1164BB",
          },
          {
            label: "Growth",
            data: [-60, 0, 40, 60, 80, 95],
            borderColor: "#F5841F",
            backgroundColor: "#F5841F",
          },
        ],
      });
    }
  }, [isChecked])
  

  return (
    <div className="bg-white container mx-auto lg:px-[120px] px-2 py-10">
      <h2 className="font-[impact] text-7xl">
        See how we make <span className="text-[#E72C4B]">the difference</span>
      </h2>
      <div className="md:p-10  ">
        <div>
          <p>Turn on Seonator</p>
          <div className="relative inline-block w-20  align-middle select-none transition duration-200 ease-in">
            <input
              type="checkbox"
              name="toggle"
              id="toggle"
              className={`toggle-checkbox absolute block w-10 h-10 rounded-full bg-white border-4 appearance-none cursor-pointer  ${
                isChecked
                  ? "bg-green-400  right-0  duration-500"
                  : "bg-red-400 right-[calc(100%_-_40px)]  duration-500"
              }`}
              checked={isChecked}
              onChange={() => seonatorOn()}
            />
            <label
              htmlFor="toggle"
              className="toggle-label block overflow-hidden h-10 rounded-full bg-gray-300 cursor-pointer"
            />
          </div>
        </div>
        <Line options={options} data={data} />
      </div>
    </div>
  );
};

export default SeonatorTurnon;
