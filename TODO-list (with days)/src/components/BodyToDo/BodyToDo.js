import React from "react";
import Todo from "../todo/todo";

const BodyToDo = props => (
  <section className="todo-list">
    {props.todoText.map((todo, index) => {
      return (
        <Todo
          key={["key", index].join("_")}
          handleClick={props.handleClick}
          classCheck={todo.classCheck}
          classText={todo.classText}
          todoTitle={todo.title}
          onDelete={props.onDelete}
          changeToDoTitle={props.changeToDoTitle}
          onChangeInput1={props.onChangeInput1}
          handleChange={props.handleChange}
          ToDoArray={todo.checkChange}
          InputValue1={props.InputValue1}
          i={index}
          day={props.todoText[0].date}
        />
      );
    })}
  </section>
);

export default BodyToDo;
