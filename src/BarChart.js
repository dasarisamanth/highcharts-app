import React, { Component } from "react";
import Highcharts from "highcharts/highcharts";
import HighChartsReact from "highcharts-react-official";
import { data } from "./maintainence_data";
import {Link} from 'react-router-dom';
class BarChart extends Component {
  state = {
    srData: [],
    cat: [],
  };
  componentDidMount() {
    let Data = data.map((item) => {
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
  extended_cost = () => {
    let extended_cost = [];
    let sumWarranty = 0;
    let sumOMNonPM = 0;
    let sumOMPM = 0;
    let sumRetroIt = 0;
    let sumCustomerRequest = 0;
    const { srData } = this.state;

    srData.filter((eC) =>
      eC.sr_type === "Warranty"
        ? (sumWarranty = sumWarranty + eC.extended_cost)
        : null
    );
    extended_cost.push(parseFloat(sumWarranty.toFixed(2)));
    srData.filter((eC) =>
      eC.sr_type === "O&M - Non PM"
        ? (sumOMNonPM = sumOMNonPM + eC.extended_cost)
        : null
    );
    extended_cost.push(parseFloat(sumOMNonPM.toFixed(2)));
    srData.filter((eC) =>
      eC.sr_type === "O&M - PM" ? (sumOMPM = sumOMPM + eC.extended_cost) : null
    );
    extended_cost.push(parseFloat(sumOMPM.toFixed(2)));
    srData.filter((eC) =>
      eC.sr_type === "TI/Retrofit"
        ? (sumRetroIt = sumRetroIt + eC.extended_cost)
        : null
    );
    extended_cost.push(parseFloat(sumRetroIt.toFixed(2)));
    srData.filter((eC) =>
      eC.sr_type === "Customer Request"
        ? (sumCustomerRequest = sumCustomerRequest + eC.extended_cost)
        : null
    );
    extended_cost.push(parseFloat(sumCustomerRequest.toFixed(2)));

    return extended_cost;
  };
  labour_cost = () => {
    let labour_cost = [];
    let sumWarranty = 0;
    let sumOMNonPM = 0;
    let sumOMPM = 0;
    let sumRetroIt = 0;
    let sumCustomerRequest = 0;
    const { srData } = this.state;

    srData.filter((eC) =>
      eC.sr_type === "Warranty"
        ? (sumWarranty = sumWarranty + eC.labour_cost)
        : null
    );
    labour_cost.push(parseFloat(sumWarranty.toFixed(2)));
    srData.filter((eC) =>
      eC.sr_type === "O&M - Non PM"
        ? (sumOMNonPM = sumOMNonPM + eC.labour_cost)
        : null
    );
    labour_cost.push(parseFloat(sumOMNonPM.toFixed(2)));
    srData.filter((eC) =>
      eC.sr_type === "O&M - PM" ? (sumOMPM = sumOMPM + eC.labour_cost) : null
    );
    labour_cost.push(parseFloat(sumOMPM.toFixed(2)));
    srData.filter((eC) =>
      eC.sr_type === "TI/Retrofit"
        ? (sumRetroIt = sumRetroIt + eC.labour_cost)
        : null
    );
    labour_cost.push(parseFloat(sumRetroIt.toFixed(2)));
    srData.filter((eC) =>
      eC.sr_type === "Customer Request"
        ? (sumCustomerRequest = sumCustomerRequest + eC.labour_cost)
        : null
    );
    labour_cost.push(parseFloat(sumCustomerRequest.toFixed(2)));

    return labour_cost;
  };
  render() {
    const { cat } = this.state;
    console.log(this.labour_cost());

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
          stacking: "normal",

          dataLabels: {
            enabled: true,
          },
        },
      },
      series: [
        {
          name: "Extended Cost $",
          data: this.labour_cost(),
        },
        {
          name: "Labour Cost $",
          data: this.extended_cost(),
        },
      ],
    };
    return (
      <div className="p-4">
        <HighChartsReact options={options} highcharts={Highcharts} />
        <Link  className='btn btn-light mt-2'to='/'>Back</Link>
      </div>
    );
  }
}

export default BarChart;
