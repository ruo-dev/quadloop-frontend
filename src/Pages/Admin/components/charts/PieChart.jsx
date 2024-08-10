import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";

const PieChart = ({ data }) => {
     const [series, setSeries] = useState([54, 45, 46, 47, 48, 49, 50]);
     const [options, setOptions] = useState({
          chart: {
               type: "donut",
          },
          labels: [
               "Sunday",
               "Monday",
               "Tuesday",
               "Wednesday",
               "Thursday",
               "Friday",
               "Saturday",
          ],
          responsive: [
               {
                    breakpoint: 480,
                    options: {
                         chart: {
                              width: 200,
                         },
                         legend: {
                              position: "bottom",
                         },
                    },
               },
          ],
     });

     useEffect(() => {
          setSeries([...data.map((item) => item.order_count)]);
          setOptions({
               chart: {
                    type: "donut",
               },
               labels: [...data.map((item) => item.day)],
               responsive: [
                    {
                         breakpoint: 480,
                         options: {
                              chart: {
                                   width: 200,
                              },
                              legend: {
                                   position: "bottom",
                              },
                         },
                    },
               ],
          });
     }, [data]);

     return (
          <div>
               <ReactApexChart options={options} series={series} type="donut" />
          </div>
     );
};

export default PieChart;
