import React from "react";
import { Link, Route } from "react-router-dom";
import "./Days.css";

let Days = props => (
  <div className="days">
    {props.days.map(item => (
      <Link to={item}>
        <button>{item}</button>
      </Link>
    ))}
  </div>
);

export default Days;
