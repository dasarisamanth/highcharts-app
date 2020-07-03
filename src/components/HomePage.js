import React, { Component } from "react";
import { data } from "../maintainence_data";
import { pieData, pieData1 as pieCharData } from "./helper";
import BarChart from "./BarChart";
import LineChart from "./LineChart";
import Pie from "./Pie";
import PieChar from "./PieChar";
import Table from "./Table";
const turbines = Array.from(
  new Set(data.map((item) => item.turbine_name))
).sort();
const options = turbines.map((turbine, index) => (
  <option key={index} value={turbine}>
    {turbine}
  </option>
));

class Homepage extends Component {
  state = {
    turbine: "All",
  };
  handleChange = (e) => {
    this.setState({ turbine: e.target.value });
  };
  render() {
    const { turbine } = this.state;

    const turbineData =
      turbine !== "All"
        ? data.filter((item) => item.turbine_name === turbine)
        : data;
    const pieData1 =
      turbine !== "All"
        ? pieData(data.filter((item) => item.turbine_name === turbine))
        : pieData(data);
    const pieData2 =
      turbine !== "All"
        ? pieCharData(data.filter((item) => item.turbine_name === turbine))
        : pieCharData(data);
    console.log(turbineData);
    return (
      <div className='container' >
        <div className="d-flex justify-content-start">
          <select onChange={this.handleChange} value={this.state.turbine}>
            <option defaultChecked>All</option>
            {options}
          </select>
        </div>

        <div className="container  row mb-3">
          <BarChart data={turbineData} />
          <LineChart data={turbineData} />
          <Pie data={pieData1} />
          <PieChar data={pieData2} />
          <Table/>
        </div>
        
      </div>
    );
  }
}

export default Homepage;
