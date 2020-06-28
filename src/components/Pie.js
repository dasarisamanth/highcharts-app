import React, { Component } from "react";
import { data } from "../maintainence_data";
import Highcharts from "highcharts";
import {Link} from 'react-router-dom';

import PieChart from "highcharts-react-official";
let Data = data.map((item) => {
  return {
    ser_des: item.service_req_description,
    cost: item.extended_cost_$ + item.labour_cost_$,
  };
});
let sD = [...new Set(Data.map((item) => item.ser_des))];
let service = sD.map((item) => {
  return Data.filter((ser) => item === ser.ser_des);
});
let repeatedServices = service.filter((item) => item.length > 1);

let rpSC = repeatedServices.map((item) => {
  return {
    ser_des: item[0].ser_des,
    cost: item.reduce((acc, next) => acc + next.cost, 0),
  };
});

let uniqueServices = service.filter((item) => item.length === 1).flat();
let overAllCostByServiceDescription = [...uniqueServices, ...rpSC].map(
  (item) => {
    return { name: item.ser_des, y: item.cost };
  }
);
const options = {
  chart: {
    type: "pie",
  },
  title: {
    text: "Repair Costs By Service Description",
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
    {
      name: "Repair Cost $",
      colorByPoint: true,
      data: overAllCostByServiceDescription,
    },
  ],
};
class Pie extends Component {
  render() {
    return (
      <div className="p-4">
        <PieChart options={options} highcharts={Highcharts} />
        <Link  className='btn btn-light mt-2'to='/'>Back</Link>
      </div>
    );
  }
}

export default Pie;
