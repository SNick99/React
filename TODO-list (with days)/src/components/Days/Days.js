import React from "react";
import { Link, Route } from "react-router-dom";
import "./Days.css";

let Days = props => (
  <div className="days">
    <Link to={`Sunday`}>
      <button>Sunday</button>
    </Link>
    <Link to={`Monday`}>
      <button>Monday</button>
    </Link>
    <Link to={`Tuesday`}>
      <button>Tuesday</button>
    </Link>
    <Link to={`Wednesday`}>
      <button>Wednesday</button>
    </Link>
    <Link to={`Thursday`}>
      <button>Thursday</button>
    </Link>
    <Link to={`Friday`}>
      <button>Friday</button>
    </Link>
    <Link to={`Saturday`}>
      <button>Saturday</button>
    </Link>
  </div>
);

export default Days;
