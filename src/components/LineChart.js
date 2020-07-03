import React, { Component } from "react";
import Highcharts from "highcharts/highcharts";
import HighChartsReact from "highcharts-react-official";

class LineChart extends Component {
 constructor(props){
   super(props);
   this.state = {
    srData: [],
  };
 }

  componentDidMount() {
    let Data = this.props.data
      .map((item) => {
        return {
          service_date: new Date(item.service_date.split("T")[0]),
          extended_cost: item.extended_cost_$,
          labour_cost: item.labour_cost_$,
        };
      })
      .sort((a, b) => {
        return b.service_date - a.service_date;
      })
      .reverse();
    this.setState({ srData: [...this.state.srData, ...Data] });
  }
  componentDidUpdate(prevProps,prevState){
    if(prevProps.data!==this.props.data){
      let Data = this.props.data
      .map((item) => {
        return {
          service_date: new Date(item.service_date.split("T")[0]),
          extended_cost: item.extended_cost_$,
          labour_cost: item.labour_cost_$,
        };
      })
      .sort((a, b) => {
        return b.service_date - a.service_date;
      })
      .reverse();
    this.setState({ srData: [...Data] });
  }
  }
  extended_cost = () => {
    const { srData } = this.state;
    let sum = 0;
    return srData.map((item) => {
      return [Date.parse(item.service_date), (sum = sum + item.extended_cost)];
    });
  };
  labour_cost = () => {
    const { srData } = this.state;
    let sum = 0;
    return srData.map((item) => {
      return [Date.parse(item.service_date), (sum = sum + item.labour_cost)];
    });
  };
  render() {
    const options = {
      chart: {
        type: "line",
      },
      title: {
        text: "Cumulative Extended_Cost & Labour_Cost ",
      },
      subtitle: {
        text: "Based On Service Dates",
      },
      xAxis: {
        type: "datetime",
        dateTimeLabelFormats: {
          // don't display the dummy year
          month: "%e. %b",
          year: "%b",
        },
        title: {
          text: "Date",
        },
      },
      yAxis: {
        title: {
          text: "Cost In $",
        },
        min: 0,
      },
      tooltip: {
        headerFormat: "<b>{series.name}</b><br>",
        pointFormat: "{point.x:%e. %b}: {point.y:.2f} m",
      },

      plotOptions: {
        series: {
          marker: {
            enabled: false,
          },
        },
      },

      colors: ["#6CF", "#39F", "#06C", "#036", "#000"],

      // Define the data points. All series have a dummy year
      // of 1970/71 in order to be compared on the same x axis. Note
      // that in JavaScript, months start at 0 for January, 1 for February etc.
      series: [
        {
          name: "Extended Cost 2014-2017",
          data: this.extended_cost(),
        },
        {
          name: "Labour Cost 2014-2017",
          data: this.labour_cost(),
        },
      ],

      responsive: {
        rules: [
          {
            condition: {
              maxWidth: 500,
            },
            chartOptions: {
              plotOptions: {
                series: {
                  marker: {
                    radius: 2.5,
                  },
                },
              },
            },
          },
        ],
      },
    };
    return (
      <div className=" col-md-6 mb-4 p-4">
        <HighChartsReact options={options} highcharts={Highcharts} />
        
      </div>
    );
  }
}

export default LineChart;
