import React from "react";

import BarChart from "./BarChart";
import LineChart from "./LineChart";
import Pie from "./Pie";
import PieChar from "./PieChar";
import Table from "./Table";
import Navbar from "./Navbar";
import { Switch, Route } from "react-router-dom";
import HomePage from "./HomePage";

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
