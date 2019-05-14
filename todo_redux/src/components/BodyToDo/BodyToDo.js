import React from "react";
import Todo from "../todo/todo";
import { connect } from "react-redux";

const BodyToDo = props => (
  <section className="todo-list">
    {props.todoText[props.ClickDate].map((todo, index) => {
      return (
        <Todo
          key={["key", index].join("_")}
          classCheck={todo.classCheck}
          classText={todo.classText}
          todoTitle={todo.title}
          changeToDoTitle={props.changeToDoTitle}
          onChangeInput1={props.onChangeInput1}
          ToDoArray={todo.checkChange}
          InputValue1={props.InputValue1}
          i={index}
          day={props.todoText.date}
        />
      );
    })}
  </section>
);

function mapStateToProps(state) {
  return {
    todoText: state.app.todoText,
    ClickDate: state.app.ClickDate,
  };
}

export default connect(
  mapStateToProps,
  {}
)(BodyToDo);
