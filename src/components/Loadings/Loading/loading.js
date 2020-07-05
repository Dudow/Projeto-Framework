import React from 'react';
import { RiLoader2Line } from "react-icons/ri";

import './loading.css'

function Load() {
  return (
    <div className="loadiv">
        <div className="load">LOADING</div>
        <RiLoader2Line className="load-icon"/>
    </div>
  )
}

export default Load;
