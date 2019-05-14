import React from "react";
import { connect } from "react-redux";
import {
  CHANGE_INPUT_ADD_TODO,
  BUTTON_ADD_TODO,
} from "../../redux/actions/types";

const InputTodo = props => {
  const { ADD_Todo, InputValue, ClickDate, todoText, CurrentDate } = props.app;
  const onAddTodo = () => {
    const obj = {
      title: InputValue,
      active: false,
      classCheck: "far fa-square",
      classText: "todo-title",
      date: CurrentDate,
      checkChange: false,
    };
    todoText[ClickDate].push(obj);
    let tmp = Object.assign({}, todoText);
    return props.onAddTodo(tmp);
  };

  return (
    <React.Fragment>
      {ADD_Todo ? (
        <div className="InputTodo">
          <div className="Input_block">
            <input
              id="ValueInput"
              type="text"
              placeholder="Введите текст"
              value={InputValue}
              onChange={props.onChange}
            />
            <button onClick={() => onAddTodo()}>Добавить</button>
          </div>
        </div>
      ) : null}
    </React.Fragment>
  );
};
function mapStateToProps(state) {
  return {
    app: state.app,
  };
}

function myDispatch(dispatch) {
  return {
    onChange: event =>
      dispatch({
        type: CHANGE_INPUT_ADD_TODO,
        payload: { InputValue: event.target.value },
      }),
    onAddTodo: data => {
      dispatch({
        type: BUTTON_ADD_TODO,
        payload: data,
      });
    },
  };
}

export default connect(
  mapStateToProps,
  myDispatch
)(InputTodo);
