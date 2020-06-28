import React from 'react';
import { Link } from 'react-router-dom';

const HomePage=()=>{
    return(
      <div  className='container'>
        <div className="row mt-3  d-flex justify-content-center">
  <div  className="col-md-4 m-2 p-2 ">
    <div id='bar' className="card">
    
      <div className="card-body">
      
      <h5 className="card-title text-white p-4">Cost By Service</h5>
        <Link to='/bar' className="btn btn-light">Go</Link>
      </div>
    </div>
  </div>
  <div className="col-md-4 m-2 p-2 ">
    <div id='line' className="card">
      <div className="card-body">
      <h5 className="card-title text-white p-4">Cumulative Cost</h5>
        <Link to='/line' className="btn btn-light">Go</Link>
      </div>
    </div>
  </div>
  <div className="col-md-4 m-2 p-2">
    <div id='pie' className="card">
      <div className="card-body">
      <h5 className="card-title text-white p-4">Top Repairs By Cost</h5>
        <Link to='/pie' className="btn btn-light">Go</Link>
      </div>
    </div>
  </div>
  <div className="col-md-4 m-2 p-2">
    <div id='pie'className="card">
      <div className="card-body">
        <h5 className="card-title text-white p-4">Top Repairs By Time</h5>
        
        <Link to='/piechart' className="btn btn-light">Go</Link>
      </div>
    </div>
  </div>
  <div id='table' className="card text-center m-2 p-2 col-md-8">
  
  <div className="card-body">
    <h5 className="card-title text-white p-4">Tabular Data Of All Turbines</h5>
   
    <Link to="/table" className="btn btn-light">Go</Link>
  </div>
  
</div>
</div>
</div>
    )
}
export default HomePage;
