import React from "react";
import "./App.less";
import "@fortawesome/fontawesome-free";
import Todo from "./todo/todo";
import AddTodo from "./AddTodo/AddTodo";
import InputTodo from "./AddTodo/InputTodo";
import Calendar from "react-calendar";

function formatDate(date) {
  let dd = date.getDate();
  if (dd < 10) dd = "0" + dd;

  let mm = date.getMonth() + 1;
  if (mm < 10) mm = "0" + mm;

  let yy = date.getFullYear() % 100;
  if (yy < 10) yy = "0" + yy;

  return dd + "." + mm + "." + yy;
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todoText: [
        {
          title: "Learn react",
          active: false,
          classCheck: "far fa-square",
          classText: "todo-title",
          date: "05.12.18",
        },
        {
          title: "Learn English",
          active: false,
          classCheck: "far fa-square",
          classText: "todo-title",
          date: "05.12.18",
        },
        {
          title: "Sport",
          active: false,
          classCheck: "far fa-square",
          classText: "todo-title",
          date: "05.12.18",
        },
      ],

      ADD_Todo: false,
      ADD_I: "far fa-plus-square",
      InputValue: "",
      date: new Date(),
      ClickDate: new Date(),
      CurrentDate: formatDate(new Date()),
      ShowCalendar: false,
    };
  }

  onChangeDate(date) {
    let dateCur = formatDate(this.state.ClickDate);
    this.setState({
      date: date,
      CurrentDate: dateCur,
      ShowCalendar: !this.state.ShowCalendar,
    });
  }
  handleClick(id) {
    const todo = this.state.todoText[id];
    const todos = this.state.todoText.concat(); //new array
    if (todo.active) {
      todo.active = false;
      todo.classCheck = "far fa-square";
      todo.classText = "todo-title";
      todos[id] = todo;
      this.setState({
        todoText: todos,
      });
    } else {
      todo.active = true;
      todo.classCheck = "far fa-check-square";
      todo.classText = "todo-title-check";
      todos[id] = todo;
      this.setState({
        todoText: todos,
      });
    }
  }
  onDelete(id) {
    const todos = this.state.todoText.concat(); //new array
    todos.splice(id, 1);
    this.setState({
      todoText: todos,
    });
  }
  onInputTodo() {
    this.setState({
      ADD_Todo: !this.state.ADD_Todo,
    });
    if (this.state.ADD_Todo) {
      this.setState({
        ADD_I: "far fa-plus-square",
        InputValue: "",
      });
    } else {
      this.setState({
        ADD_I: "far fa-window-close",
      });
    }
  }
  onAddTodo() {
    const todos = this.state.todoText.concat(); //new array
    if (this.state.InputValue !== "") {
      todos.push({
        title: this.state.InputValue,
        active: false,
        classCheck: "far fa-square",
        classText: "todo-title",
        date: this.state.CurrentDate,
      });
      this.setState({
        todoText: todos,
      });
    }
  }
  onChangeInput(event) {
    this.setState({
      InputValue: event.target.value,
    });
  }
  onShowCalendar() {
    this.setState({
      ShowCalendar: !this.state.ShowCalendar,
    });
  }

  onClickDay(value) {}

  render() {
    return (
      <main>
        <header>
          <div id="container">
            <div id="left">
              <i
                className="far fa-calendar-alt"
                onClick={() => this.onShowCalendar()}
              />
            </div>
            <div id="center">NOTE</div>
            <div id="right">{formatDate(this.state.ClickDate)}</div>
          </div>
        </header>

        {this.state.ShowCalendar ? ( //if state calendar is true then show
          <Calendar
            onChange={() => this.onChangeDate()}
            value={this.state.date}
            onClickDay={value => this.setState({ ClickDate: value })}
            className="class1"
          /> //else todo-list show
        ) : (
          <section className="todo-list">
            {this.state.todoText.map((todo, index) => {
              return todo.date === this.state.CurrentDate ? (
                <Todo
                  key={index}
                  handleClick={this.handleClick.bind(this, index)}
                  classCheck={todo.classCheck}
                  classText={todo.classText}
                  todoTitle={todo.title}
                  onDelete={() => this.onDelete(index)}
                />
              ) : null;
            })}
          </section>
        )}

        <div className="block-add">
          {this.state.ADD_Todo ? (
            <InputTodo
              onAddTodo={() => this.onAddTodo()}
              onChangeInput={evt => this.onChangeInput(evt)}
            />
          ) : null}
          <AddTodo
            onInputTodo={() => this.onInputTodo()}
            ADD_I={this.state.ADD_I}
          />
        </div>
      </main>
    );
  }
}

export default App;
