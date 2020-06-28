import React from "react";

import BarChart from "../components/BarChart";
import LineChart from "../components/LineChart";
import Pie from "../components/Pie";
import PieChar from "../components/PieChar";
import Table from "../components/Table";
import Navbar from "../components/Navbar";
import { Switch, Route } from "react-router-dom";
import HomePage from "../components/HomePage";

function App() {
  return (
    <div className='App'>
       
       <Navbar />
      <Switch>
     
     
        <Route exact path="/" render={(props) => <HomePage {...props} />} />
        <Route exact path="/bar" render={(props) => <BarChart {...props} />} />
        <Route
          exact
          path="/line"
          render={(props) => <LineChart {...props} />}
        />
        <Route exact path="/pie" render={(props) => <Pie {...props} />} />
        <Route
          exact
          path="/piechart"
          render={(props) => <PieChar {...props} />}
        />
        <Route exact path="/table" render={(props) => <Table {...props} />} />
      </Switch>
      
    </div>
  );
}

export default App;
