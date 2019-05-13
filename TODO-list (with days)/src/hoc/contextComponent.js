import React from "react";
import { contextData } from "../components/App";

const contextComponent = data => {
  return Component => {
    return (
      <contextData.Consumer>
        {value => <Component {...value} />}
      </contextData.Consumer>
    );
  };
};

export default contextComponent;
