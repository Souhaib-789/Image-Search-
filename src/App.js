import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import './App.css';
import Result from "./result";

function App() {
  const [img,setimg]=useState('')
   console.log(img)
  
  
  return (
    <>
    <div className="container contact-form">
      <div className="col-md-6 prime">
      <h1 className="h1">S <small className="e">e</small> <small className="a">a</small> <small className="r">r</small> <small className="c">c</small> <small className="e">h</small></h1 >
        <div className="form-group">
          <input type="text" onChange={(e)=>{setimg(e.target.value)}} name="txtName" value={img} className="form-control" placeholder="Search anything"  />
        </div>
      </div>
      </div>
     { img === '' ? null : <Result name={img} />} 
    </>
  );
}

export default App;
