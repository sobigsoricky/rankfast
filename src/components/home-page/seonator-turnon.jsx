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
        label: "Organic traffic",
        data: [182, 145, 119, 137, 186, 143, 161],
        borderColor: "#E72C4B",
        backgroundColor: "#E72C4B",
      },
      {
        label: "Leads",
        data: [123, 186, 168, 108, 177, 142, 174],
        borderColor: "#1164BB",
        backgroundColor: "#1164BB",
      },
      {
        label: "Growth",
        data:[121, 143, 146, 129, 160, 175, 117],
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
            label: "Organic traffic",
            data: [215, 250, 282, 292, 325, 356, 368],
            borderColor: "#E72C4B",
            backgroundColor: "#E72C4B",
          },
          {
            label: "Leads",
            data: [210, 227, 255, 305, 320, 343, 376],
            borderColor: "#1164BB",
            backgroundColor: "#1164BB",
          },
          {
            label: "Growth",
            data:  [201, 218, 230, 287, 343, 363, 390],
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
            label: "Organic traffic",
            data: [182, 145, 119, 137, 186, 143, 161, 400],
            borderColor: "#E72C4B",
            backgroundColor: "#E72C4B",
          },
          {
            label: "Leads",
            data: [123, 186, 168, 108, 177, 142, 174],
            borderColor: "#1164BB",
            backgroundColor: "#1164BB",
          },
          {
            label: "Growth",
            data:[121, 143, 146, 129, 160, 175, 117],
            borderColor: "#F5841F",
            backgroundColor: "#F5841F",
          },
        ],
      });
    }
  }, [isChecked])
  

  return (
    <div className="bg-white container mx-auto lg:px-[120px] px-2 py-10">
      <h2 className="font-[impact] text-5xl md:text-7xl">
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
