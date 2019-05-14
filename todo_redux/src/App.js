import React from "react";
import { Switch, Link, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import "./App.css";
import Todo from "./components/todo/todo";
import AddTodo from "./components/AddTodo/AddTodo";
import InputTodo from "./components/AddTodo/InputTodo";
import Days from "./components/Days/Days";
import BodyToDo from "./components/BodyToDo/BodyToDo";
import moment from "moment";

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      CurrentDate: moment().format("dddd"),

      todoText: {
        Monday: [],
        Sunday: [],
        Tuesday: [],
        Wednesday: [],
        Thursday: [],
        Friday: [],
        Saturday: [],
      },

      ADD_Todo: false,
      ADD_I: "far fa-plus-square",
      InputValue: "",
      InputValue1: "",
      date: moment().format("dddd"),
      CurrentDate: moment().format("dddd"),
      check: true,
      key: 1,
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

    if (arr[day][id].active) {
      arr[day][id].active = false;
      arr[day][id].classCheck = "far fa-square";
      arr[day][id].classText = "todo-title";
      this.setState({
        todoText: arr,
      });
    } else {
      arr[day][id].active = true;
      arr[day][id].classCheck = "far fa-check-square";
      arr[day][id].classText = "todo-title-check";

      this.setState({
        todoText: arr,
      });
    }
  }

  componentWillMount() {
    document.onkeydown = e => {
      if (e.keyCode == 116) {
        this.setState({
          key: 116,
        });
      }
    };
  }

  //Delete ToDo task
  onDelete(id, day) {
    const arr = this.state.todoText;
    arr[day].splice(id, 1);

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
    const todos = this.state.todoText;
    if (this.state.InputValue !== "") {
      todos[this.state.CurrentDate] = {
        title: this.state.InputValue,
        active: false,
        classCheck: "far fa-square",
        classText: "todo-title",
        date: this.state.CurrentDate,
        checkChange: false,
      };
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

  changeToDoTitle(id, day) {
    const MyArr = this.state.todoText;
    let arr = MyArr[day].map((item, ind) => {
      if (id === ind) {
        item.title = this.state.InputValue1;
        return item;
      } else {
        return item;
      }
    });
    MyArr[day] = arr;
    this.setState({
      todoText: MyArr,
    });
  }

  handleChange(id, day) {
    const myArr = this.state.todoText;
    const arr = this.state.todoText[day].map((item, ind) => {
      if (id === ind && item.checkChange === false) {
        item.checkChange = true;
        return item;
      } else {
        item.checkChange = false;
        return item;
      }
    });
    myArr[day] = arr;
    console.log(day);
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
            path={"/"}
            exact
            render={() => {
              return <Redirect to={"/" + moment().format("dddd")} />;
            }}
          />

          {/* {days.map((item,i) => { //роуты работают а BodyToDO не отображает, хотя данные верные
          return (
            <Route
            key={`key${i}`}
              path={`${item}`}
              redner={props => (
                <BodyToDo
                  todoText={this.state.todoText[`${item}`]}
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
          );
        })} */}

          <Route
            path={"/Monday"}
            render={props => (
              <BodyToDo
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
            path={"/Sunday"}
            render={props => (
              <BodyToDo
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
        {this.state.key == 116 ? (
          <Route
            path={"/"}
            render={() => {
              return <Redirect to={"/" + moment().format("dddd")} />;
            }}
          />
        ) : null}

        <div className="block-add">
          <InputTodo />

          <AddTodo />
        </div>
      </main>
    );
  }
}
function mapStateToProps(state) {
  return {
    app: state.app,
  };
}
export default connect(
  mapStateToProps,
  {}
)(App);
