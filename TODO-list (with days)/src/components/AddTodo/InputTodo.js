import React from "react";
import hocContext from "../../hoc/contextComponent";
import InputButton from "./InputButton";
const InputTodo = props => {
  return hocContext()(InputButton);
};

export default InputTodo;
