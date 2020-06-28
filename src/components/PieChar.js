import React, { Component } from "react";
import { data } from "../maintainence_data";
import Highcharts from "highcharts";

import PieChart from "highcharts-react-official";
import {Link} from 'react-router-dom';
let Data = data.map((item) => {
  return {
    ser_des: item.service_req_description,
    time: item.duration_mins,
  };
});
let chartData = Data.map((item) => {
  return { name: item.ser_des, y: item.time };
});
const options = {
  chart: {
    type: "pie",
  },
  title: {
    text: "Repair Time In Minutes By Service Description",
  },
  tooltip: {
    pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
  },
  accessibility: {
    point: {
      valueSuffix: "%",
    },
  },
  series: [
    { name: "Repair Time In mins", colorByPoint: true, data: chartData },
  ],
};
class PieChar extends Component {
  render() {
    console.log(chartData);
    return (
      <div className="p-4">
        {" "}
        <PieChart options={options} highcharts={Highcharts} />
        <Link  className='btn btn-light mt-2'to='/'>Back</Link>
      </div>
    );
  }
}

export default PieChar;
