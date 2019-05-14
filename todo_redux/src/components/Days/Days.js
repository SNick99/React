import React from "react";
import { Link, Route } from "react-router-dom";
import { connect } from "react-redux";
import "./Days.css";

import { CLICK_DATE } from "../../redux/actions/types";

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
    {days.map((item, i) => (
      <Link key={i + "sss"} to={item}>
        <button onClick={() => props.ClickDate(item)}>{item}</button>
      </Link>
    ))}
  </div>
);

function mapStateToProps(state) {
  return {
    date: state.app.ClickDate,
  };
}

function myDispatch(dispatch) {
  return {
    ClickDate: data =>
      dispatch({
        type: CLICK_DATE,
        payload: { ClickDate: data },
      }),
  };
}

export default connect(
  mapStateToProps,
  myDispatch
)(Days);
