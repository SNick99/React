import * as React from "react";
import { connect } from "react-redux";
import {
  ON_DELETE_TODO,
  ON_CHECKBOX,
  ON_CHANGE_TODO,
  CHANGE_INPUT_TODO,
  CHANGE_TODO,
} from "../../redux/actions/types";

const Todo = props => {
  const { todoText, ClickDate, InputValue1 } = props.app;

  const onDelete = () => {
    let tmp = Object.assign({}, todoText);
    tmp[ClickDate].splice(props.i, 1);
    return props.onDelete(tmp);
  };

  const handleClick = () => {
    let tmp = Object.assign({}, todoText);
    if (tmp[ClickDate][props.i].active) {
      tmp[ClickDate][props.i].active = false;
      tmp[ClickDate][props.i].classCheck = "far fa-square";
      tmp[ClickDate][props.i].classText = "todo-title";
      return props.handleClick(tmp);
    } else {
      tmp[ClickDate][props.i].active = true;
      tmp[ClickDate][props.i].classCheck = "far fa-check-square";
      tmp[ClickDate][props.i].classText = "todo-title-check";
      return props.handleClick(tmp);
    }
  };

  const handleChange = () => {
    const arr = todoText[ClickDate].map((item, ind) => {
      if (props.i === ind && item.checkChange === false) {
        item.checkChange = true;
        return item;
      } else {
        item.checkChange = false;
        return item;
      }
    });
    todoText[ClickDate] = arr;
    const tmp = Object.assign({}, todoText);
    return props.handleChange(tmp);
  };

  const changeToDoTitle = () => {
    let arr = todoText[ClickDate].map((item, ind) => {
      if (props.i === ind) {
        item.title = InputValue1;
        return item;
      } else {
        return item;
      }
    });
    todoText[ClickDate] = arr;
    const tmp = Object.assign({}, todoText);
    return props.handleChange(tmp);
  };

  return (
    <div className="todo">
      <button className="checkbox" onClick={() => handleClick()}>
        <i className={props.classCheck} />
      </button>

      <button className="delete" onClick={() => handleChange()}>
        <i className="fas fa-pencil-alt" />
      </button>

      {props.ToDoArray ? (
        <React.Fragment>
          <input
            type="text"
            placeholder="Введите текст"
            value={InputValue1}
            onChange={props.onChange}
          />
          <button className="delete" onClick={() => changeToDoTitle()}>
            <i class="fas fa-check" />
          </button>
        </React.Fragment>
      ) : (
        <span className={props.classText}>{props.todoTitle}</span>
      )}

      <button className="delete" onClick={() => onDelete()}>
        <i className="fas fa-trash-alt" />
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    app: state.app,
  };
}

function myDispatch(dispatch) {
  return {
    onDelete: data =>
      dispatch({
        type: ON_DELETE_TODO,
        payload: data,
      }),
    handleClick: data =>
      dispatch({
        type: ON_CHECKBOX,
        payload: data,
      }),
    handleChange: data =>
      dispatch({
        type: ON_CHANGE_TODO,
        payload: data,
      }),
    onChange: event =>
      dispatch({
        type: CHANGE_INPUT_TODO,
        payload: { InputValue1: event.target.value },
      }),
    changeToDoTitle: data =>
      dispatch({
        type: CHANGE_TODO,
        payload: { InputValue1: data },
      }),
  };
}

export default connect(
  mapStateToProps,
  myDispatch
)(Todo);
