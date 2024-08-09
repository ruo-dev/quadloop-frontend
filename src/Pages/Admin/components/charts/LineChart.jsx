import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";

const LineChart = ({ data }) => {
     const [chartOptions, setChartOptions] = useState({
          series: [
               {
                    name: "Desktops",
                    data: data.map((item) => item.total_order_amount),
               },
          ],
          options: {
               chart: {
                    height: 350,
                    type: "line",
                    zoom: {
                         enabled: false,
                    },
               },
               dataLabels: {
                    enabled: false,
               },
               stroke: {
                    curve: "straight",
               },
               title: {
                    text: "Product Sales by Month",
                    align: "left",
               },
               grid: {
                    row: {
                         colors: ["#f3f3f3", "transparent"],
                         opacity: 0.5,
                    },
               },
               xaxis: {
                    categories: data.map((item) => item.month),
               },
          },
     });

     useEffect(() => {
          setChartOptions((prevOptions) => ({
               ...prevOptions,
               series: [
                    {
                         ...prevOptions.series[0],
                         data: data.map((item) => item.total_order_amount),
                    },
               ],
               options: {
                    ...prevOptions.options,
                    xaxis: {
                         ...prevOptions.options.xaxis,
                         categories: data.map((item) => item.month),
                    },
               },
          }));
     }, [data]);

     return (
          <div>
               <ReactApexChart
                    options={chartOptions.options}
                    series={chartOptions.series}
                    type="line"
                    height={350}
               />
          </div>
     );
};

export default LineChart;
