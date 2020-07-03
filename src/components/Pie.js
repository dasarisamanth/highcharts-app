import React, { Component } from "react";

import Highcharts from "highcharts";
import HighChartsReact from "highcharts-react-official";

class Pie extends Component {
  render() {
    console.log(this.props.data);
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
          data: this.props.data,
        },
      ],
    };
    return (
      <div className=" col-md-6 mb-4 p-4">
        <HighChartsReact options={options} highcharts={Highcharts} />
      </div>
    );
  }
}

export default Pie;
