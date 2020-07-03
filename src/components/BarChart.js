import React, { Component } from "react";
import Highcharts from "highcharts/highcharts";
import HighChartsReact from "highcharts-react-official";

import { cost } from "../components/helper";
class BarChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      srData: [],
      cat: [],
    };
  }

  componentDidMount() {
    let Data = this.props.data.map((item) => {
      console.log(this.props.data);
      return {
        sr_type: item.sr_type,
        labour_cost: item.labour_cost_$,
        extended_cost: item.extended_cost_$,
      };
    });
    this.setState({ srData: [...this.state.srData, ...Data] }, () => {
      let cat = new Set(this.state.srData.map((item) => item.sr_type));
      this.setState({ cat: [...this.state.cat, ...cat] });
    });
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.data !== this.props.data) {
      let Data = this.props.data.map((item) => {
        console.log(this.props.data);
        return {
          sr_type: item.sr_type,
          labour_cost: item.labour_cost_$,
          extended_cost: item.extended_cost_$,
        };
      });
      this.setState({ srData: Data });
    }
  }
  extended_cost = (data, costType) => {
    return cost(data, costType);
  };
  labour_cost = (data, costType) => {
    return cost(data, costType);
  };

  render() {
    const { cat, srData } = this.state;
    console.log(srData);
    console.log(this.labour_cost(srData, "labour_cost"));

    const options = {
      chart: {
        type: "column",
      },
      title: {
        text: "Cost By Service Type",
      },
      xAxis: {
        categories: cat,
      },
      yAxis: {
        min: 0,
        title: {
          text: "Sum of Extended_Cost & Labour_Cost",
        },
        stackLabels: {
          enabled: true,
          style: {
            fontWeight: "bold",
            color:
              // theme
              (Highcharts.defaultOptions.title.style &&
                Highcharts.defaultOptions.title.style.color) ||
              "gray",
          },
        },
      },
      legend: {
        align: "right",
        x: -30,
        verticalAlign: "top",
        y: 25,
        floating: true,
        backgroundColor:
          Highcharts.defaultOptions.legend.backgroundColor || "whitesmoke",
        borderColor: "#CCC",
        borderWidth: 1,
        shadow: false,
      },
      tooltip: {
        headerFormat: "<b>{point.x}</b><br/>",
        pointFormat: "{series.name}: {point.y}<br/>Total: {point.stackTotal}",
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0,
        },
      },
      series: [
        {
          name: "Extended Cost $",
          data: this.extended_cost(srData, "extended_cost"),
        },
        {
          name: "Labour Cost $",
          data: this.labour_cost(srData, "labour_cost"),
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

export default BarChart;
