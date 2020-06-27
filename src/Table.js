import React, { Component } from 'react';
import './App.css';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { data } from "./maintainence_data";
import {Link} from 'react-router-dom';

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columnDefs: [{
        field: "turbine_name", width: 130
      }, {
        headerName: "Service Req Type", field: "sr_type",width: 150,margin:20
      },
      {
        headerName: "Service Request Description",field: "service_req_description",sortable: true, filter: true,width:300
      }, {
       headerName: "Service Date",field: "service_date",sortable: true, filter: true, width: 150
      }, {
        headerName: "Start Date", field: "start_date",sortable: true, filter: true,width: 120
      },
      {
         headerName: "End Date",field: "end_date",sortable: true, filter: true,width: 120
      },{
         headerName: "Sr No",field: "service_req_number",width: 90
      },{
         headerName: "Duration In Mins",field: "duration_mins",sortable: true, filter: true,width: 120
      },
      {
        headerName: "Labour Cost",field: "labour_cost_$",width: 130
      },{
         headerName: "Extended Cost",field: "extended_cost_$",width: 130
      }],
      rowData: []
    }
  }
 componentDidMount(){
     this.setState({rowData:[...this.state.rowData,...data]})
 }
  render() {
    return (
      <div
        className="ag-theme-alpine p-3"
        style={{
            height: '500px',
            width: '1300px' ,
          
            margin:'20px'
        }}
      >
        <AgGridReact
          columnDefs={this.state.columnDefs}
          rowData={this.state.rowData}>
        </AgGridReact>
        <Link  className='btn btn-light mt-2'to='/'>Back</Link>
      </div>
    );
  }
}

export default Table;