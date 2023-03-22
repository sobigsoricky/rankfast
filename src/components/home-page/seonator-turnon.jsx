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
      position: "bottom",
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
        data: [98, 97, 89, 87, 83, 75, 70],
        borderColor: "#E72C4B",
        backgroundColor: "#E72C4B",
      },
      {
        label: "Leads",
        data: [99, 97, 93, 88, 85, 78, 73],
        borderColor: "#1164BB",
        backgroundColor: "#1164BB",
      },
      {
        label: "Growth",
        data:[100, 96, 90, 86, 84, 77, 73],
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
            data: [102, 110, 124, 139, 159, 177, 196],
            borderColor: "#E72C4B",
            backgroundColor: "#E72C4B",
          },
          {
            label: "Leads",
            data: [117, 117, 118, 150, 160, 168, 194],
            borderColor: "#1164BB",
            backgroundColor: "#1164BB",
          },
          {
            label: "Growth",
            data: [118, 119, 121, 154, 165, 168, 191],
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
            data: [98, 97, 89, 87, 83, 75, 70],
            borderColor: "#E72C4B",
            backgroundColor: "#E72C4B",
          },
          {
            label: "Leads",
            data: [99, 97, 93, 88, 85, 78, 73],
            borderColor: "#1164BB",
            backgroundColor: "#1164BB",
          },
          {
            label: "Growth",
            data:[100, 96, 90, 86, 84, 77, 73],
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
        <div className="w-full flex flex-col items-end">
          <p>Turn on Rankfast</p>
          <div className="relative inline-block w-20  align-middle select-none transition duration-200 ease-in right-0">
            <input
              type="checkbox"
              name="toggle"
              id="toggle"
              className={`toggle-checkbox absolute block w-10 h-10 rounded-full  border-4 appearance-none cursor-pointer  ${
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
