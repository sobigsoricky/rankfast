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
  scales,
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
  const [isMobile, setIsMobile] = useState(null)
  console.log(isMobile);
  const [data, setData] = useState({
    labels,
    datasets: [
      {
        label: "Organic traffic",
        data: [182, 145, 119, 137, 186, 143, 161, 500, 100],
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
        data: [121, 143, 146, 129, 160, 175, 117],
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
            data: [215, 250, 282, 292, 325, 356, 468, 500, 100],
            borderColor: "#E72C4B",
            backgroundColor: "#E72C4B",
          },
          {
            label: "Leads",
            data: [210, 227, 255, 305, 320, 343, 476],
            borderColor: "#1164BB",
            backgroundColor: "#1164BB",
          },
          {
            label: "Growth",
            data: [201, 218, 230, 287, 343, 363, 490],
            borderColor: "#F5841F",
            backgroundColor: "#F5841F",
          },
        ],
      });
    }

    if (isChecked == false) {
      setData({
        labels,
        datasets: [
          {
            label: "Organic traffic",
            data: [182, 145, 119, 137, 186, 143, 161, 400, 500, 100],
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
            data: [121, 143, 146, 129, 160, 175, 117],
            borderColor: "#F5841F",
            backgroundColor: "#F5841F",
          },
        ],
      });
    }
  }, [isChecked]);

  useEffect(() => {
    
     window?.innerWidth <= 700 ? setIsMobile(true):setIsMobile(false)
  }, [])
  

  return (
    <div className="bg-white container mx-auto lg:px-[120px]  py-10">
      <h2 className="font-[impact] text-5xl md:text-7xl px-2">
        See how we make <span className="text-[#E72C4B]">the difference</span>
      </h2>
      <div className="md:p-4 p-2  border border-[#00000033] mt-6 w-full md:w-auto">
        <div className="w-full flex  items-center justify-between md:flex-col md:items-end border-b border-[#ECECEC] mb-4 pb-6 gap-2">
          <p className="font-semibold md:font-normal">Turn on Rankfast</p>
          <div className="relative inline-block w-28  align-middle select-none transition duration-200 ease-in right-0">
            <input
              type="checkbox"
              name="toggle"
              id="toggle"
              className={`toggle-checkbox absolute block w-14 h-14 rounded-full  border-4 appearance-none cursor-pointer  ${
                isChecked
                  ? "bg-green-400  right-0  duration-500"
                  : "bg-red-400 right-[calc(100%_-_56px)]  duration-500"
              }`}
              checked={isChecked}
              onChange={() => seonatorOn()}
            />
            <label
              htmlFor="toggle"
              className="toggle-label block overflow-hidden h-14 rounded-full bg-gray-300 cursor-pointer"
            />
          </div>
        </div>
        <div>

       {isMobile?(
        <Line
          height={350}
          options={options}
          data={data}
        />
       ):(
        <Line
        options={options}
        data={data}
      />
      
        
        )}
        
         </div>
      </div>
    </div>
  );
};

export default SeonatorTurnon;
