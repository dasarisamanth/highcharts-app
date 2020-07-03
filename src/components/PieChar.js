import React, { Component } from "react";

import Highcharts from "highcharts";

import PieChart from "highcharts-react-official";

class PieChar extends Component {
  render() {
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
        {
          name: "Repair Time In mins",
          colorByPoint: true,
          data: this.props.data,
        },
      ],
    };
    return (
      <div className=" col-md-6 mb-4 p-4">
        {" "}
        <PieChart options={options} highcharts={Highcharts} />
      </div>
    );
  }
}

export default PieChar;
