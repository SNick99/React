import React from "react";
import { Link, Route } from "react-router-dom";
import "./Days.css";

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let Days = props => (
  <div className="days">
    {days.map(item => (
      <Link to={item}>
        <button>{item}</button>
      </Link>
    ))}
  </div>
);

export default Days;
