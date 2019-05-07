import React from "react";
import { Switch, Link, Route, Redirect } from "react-router-dom";
import "./App.less";
import "@fortawesome/fontawesome-free";
import Todo from "./todo/todo";
import AddTodo from "./AddTodo/AddTodo";
import InputTodo from "./AddTodo/InputTodo";
import Days from "./Days/Days";
import BodyToDo from "./BodyToDo/BodyToDo";

function formatDate(date) {
  let dd = date.getDate();
  if (dd < 10) dd = "0" + dd;

  let mm = date.getMonth() + 1;
  if (mm < 10) mm = "0" + mm;

  let yy = date.getFullYear() % 100;
  if (yy < 10) yy = "0" + yy;

  return "20" + yy + "." + mm + "." + dd;
}

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const getNameDay = day => {
  let d = new Date(day);
  let dayName = days[d.getDay()];
  return dayName;
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      CurrentDate: getNameDay(formatDate(new Date())),

      todoText: [
        {
          Monday: [
            {
              title: "Learn react",
              active: false,
              classCheck: "far fa-square",
              classText: "todo-title",
              date: "Monday",
              checkChange: false,
            },
            {
              title: "Learn English",
              active: false,
              classCheck: "far fa-square",
              classText: "todo-title",
              date: "Monday",
              checkChange: false,
            },
            {
              title: "Sport",
              active: false,
              classCheck: "far fa-square",
              classText: "todo-title",
              date: "Monday",
              checkChange: false,
            },
          ],
          Sunday: [
            {
              title: "Sport",
              active: false,
              classCheck: "far fa-square",
              classText: "todo-title",
              date: "Sunday",
              checkChange: false,
            },
          ],
          Tuesday: [],
          Wednesday: [],
          Thursday: [],
          Friday: [],
          Saturday: [],
        },
      ],

      ADD_Todo: false,
      ADD_I: "far fa-plus-square",
      InputValue: "",
      InputValue1: "",
      date: getNameDay(new Date()),
      CurrentDate: getNameDay(formatDate(new Date())),
      check: true,
    };

    this.handleClick = this.handleClick.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onInputTodo = this.onInputTodo.bind(this);
    this.onAddTodo = this.onAddTodo.bind(this);
    this.onChangeInput1 = this.onChangeInput1.bind(this);
    this.onChangeInput = this.onChangeInput.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);

    this.changeToDoTitle = this.changeToDoTitle.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick(id, day) {
    const arr = this.state.todoText;

    if (arr[0][day][id].active) {
      arr[0][day][id].active = false;
      arr[0][day][id].classCheck = "far fa-square";
      arr[0][day][id].classText = "todo-title";
      this.setState({
        todoText: arr,
      });
    } else {
      arr[0][day][id].active = true;
      arr[0][day][id].classCheck = "far fa-check-square";
      arr[0][day][id].classText = "todo-title-check";

      this.setState({
        todoText: arr,
      });
    }
  }

  //Delete ToDo task
  onDelete(id, day) {
    const arr = this.state.todoText;
    arr[0][day].splice(id, 1);

    this.setState({
      todoText: arr,
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
    const todos = this.state.todoText; //new array
    if (this.state.InputValue !== "") {
      todos[0][this.state.CurrentDate].push({
        title: this.state.InputValue,
        active: false,
        classCheck: "far fa-square",
        classText: "todo-title",
        date: this.state.CurrentDate,
        checkChange: false,
      });
      this.setState({
        todoText: todos,
      });
    } else alert("none");
  }
  onChangeInput1(event) {
    console.log(event.target.value);
    this.setState({
      InputValue1: event.target.value,
    });
  }

  onChangeInput(event) {
    console.log(event.target.value);
    this.setState({
      InputValue: event.target.value,
    });
  }

  onChangeDate(date) {
    this.setState({
      CurrentDate: date,
    });
  }

  changeToDoTitle(id) {
    const MyArr = this.state.todoText;
    let arr = MyArr[0][this.state.CurrentDate].map((item, ind) => {
      if (id === ind) {
        item.title = this.state.InputValue1;
        return item;
      } else {
        return item;
      }
    });
    MyArr[0][this.state.CurrentDate] = arr;
    this.setState({
      todoText: MyArr,
    });
  }

  handleChange(id) {
    const myArr = this.state.todoText;
    const arr = this.state.todoText[0][this.state.CurrentDate].map(
      (item, ind) => {
        if (id === ind && item.checkChange === false) {
          item.checkChange = true;
          return item;
        } else {
          item.checkChange = false;
          return item;
        }
      }
    );
    myArr[0][this.state.CurrentDate] = arr;
    console.log(myArr);
    this.setState({
      todoText: myArr,
    });
  }

  render() {
    return (
      <main>
        <header>
          <div id="container">
            <div id="center">NOTE</div>
          </div>
        </header>

        <section>
          <Days changeDate={this.onChangeDate} />
        </section>
        <Switch>
          <Route
            path={"/Sunday"}
            redner={props => (
              <BodyToDo
                todoText={this.state.todoText[0].Sunday}
                CurrentDate={this.state.CurrentDate}
                handleClick={this.handleClick}
                onDelete={this.onDelete}
                url={props.match.url}
                changeToDoTitle={this.changeToDoTitle}
                checkChange={this.state.checkChange}
                onChangeInput1={this.onChangeInput1}
                handleChange={this.handleChange}
                InputValue1={this.state.InputValue1}
              />
            )}
          />
          <Route
            path={"/Monday"}
            render={props => (
              <BodyToDo
                todoText={this.state.todoText[0].Monday}
                CurrentDate={this.state.CurrentDate}
                handleClick={this.handleClick}
                onDelete={this.onDelete}
                url={props.match.url}
                changeToDoTitle={this.changeToDoTitle}
                checkChange={this.state.checkChange}
                onChangeInput1={this.onChangeInput1}
                handleChange={this.handleChange}
                InputValue1={this.state.InputValue1}
              />
            )}
          />

          <Route
            path={"/Tuesday"}
            render={props => (
              <BodyToDo
                todoText={this.state.todoText[0].Tuesday}
                CurrentDate={this.state.CurrentDate}
                handleClick={this.handleClick}
                onDelete={this.onDelete}
                url={props.match.url}
                changeToDoTitle={this.changeToDoTitle}
                checkChange={this.state.checkChange}
                onChangeInput1={this.onChangeInput1}
                handleChange={this.handleChange}
                InputValue1={this.state.InputValue1}
              />
            )}
          />
          <Route
            path={"/Wednesday"}
            render={props => (
              <BodyToDo
                todoText={this.state.todoText[0].Wednesday}
                CurrentDate={this.state.CurrentDate}
                handleClick={this.handleClick}
                onDelete={this.onDelete}
                url={props.match.url}
                changeToDoTitle={this.changeToDoTitle}
                checkChange={this.state.checkChange}
                onChangeInput1={this.onChangeInput1}
                handleChange={this.handleChange}
                InputValue1={this.state.InputValue1}
              />
            )}
          />
          <Route
            path={"/Thursday"}
            render={props => (
              <BodyToDo
                todoText={this.state.todoText[0].Thursday}
                CurrentDate={this.state.CurrentDate}
                handleClick={this.handleClick}
                onDelete={this.onDelete}
                url={props.match.url}
                changeToDoTitle={this.changeToDoTitle}
                checkChange={this.state.checkChange}
                onChangeInput1={this.onChangeInput1}
                handleChange={this.handleChange}
                InputValue1={this.state.InputValue1}
              />
            )}
          />
          <Route
            path={"/Friday"}
            render={props => (
              <BodyToDo
                todoText={this.state.todoText[0].Friday}
                CurrentDate={this.state.CurrentDate}
                handleClick={this.handleClick}
                onDelete={this.onDelete}
                url={props.match.url}
                changeToDoTitle={this.changeToDoTitle}
                checkChange={this.state.checkChange}
                onChangeInput1={this.onChangeInput1}
                handleChange={this.handleChange}
                InputValue1={this.state.InputValue1}
              />
            )}
          />

          <Route
            path={"/Saturday"}
            render={props => (
              <BodyToDo
                todoText={this.state.todoText[0].Saturday}
                CurrentDate={this.state.CurrentDate}
                handleClick={this.handleClick}
                onDelete={this.onDelete}
                url={props.match.url}
                changeToDoTitle={this.changeToDoTitle}
                checkChange={this.state.checkChange}
                onChangeInput1={this.onChangeInput1}
                handleChange={this.handleChange}
                InputValue1={this.state.InputValue1}
              />
            )}
          />
        </Switch>

        {/* {(localStorage.getItem("key") === "1") ? (
          <Redirect to={"/" + getNameDay(formatDate(new Date()))} />
        ) : null}
        {localStorage.setItem("key", "0")} */}

        <div className="block-add">
          {this.state.ADD_Todo ? (
            <InputTodo
              onAddTodo={this.onAddTodo}
              onChangeInput={this.onChangeInput}
              InputValue={this.state.InputValue}
            />
          ) : null}
          <AddTodo onInputTodo={this.onInputTodo} ADD_I={this.state.ADD_I} />
        </div>
      </main>
    );
  }
}

export default App;
