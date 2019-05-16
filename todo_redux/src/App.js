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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      key: 1,
    };
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

          <Route path={"/Monday"} render={props => <BodyToDo />} />
          <Route path={"/Sunday"} render={props => <BodyToDo />} />
          <Route path={"/Tuesday"} render={props => <BodyToDo />} />
          <Route path={"/Wednesday"} render={props => <BodyToDo />} />
          <Route path={"/Thursday"} render={props => <BodyToDo />} />
          <Route path={"/Friday"} render={props => <BodyToDo />} />
          <Route path={"/Saturday"} render={props => <BodyToDo />} />
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
