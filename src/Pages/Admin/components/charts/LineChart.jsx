import React from "react";
import ReactApexChart from "react-apexcharts";

class LineChart extends React.Component {
     constructor(props) {
          super(props);

          this.state = {
               series: [
                    {
                         name: "Desktops",
                         data: [
                              ...this.props.data.map(
                                   (item) => item.total_order_amount
                              ),
                         ],
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
                              colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
                              opacity: 0.5,
                         },
                    },
                    xaxis: {
                         categories: [
                              ...this.props.data.map((item) => item.month),
                         ],
                    },
               },
          };
     }

     render() {
          return (
               <div>
                    <ReactApexChart
                         options={this.state.options}
                         series={this.state.series}
                         type="line"
                         height={350}
                    />
               </div>
          );
     }
}

export default LineChart;
