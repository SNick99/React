import React from "react";
import { connect } from "react-redux";
import { OPEN_ADD_TODO } from "../../redux/actions/types";

class AddTodo extends React.Component {
  showFunc = () => {
    const obj = {
      ADD_Todo: !this.props.app.ADD_Todo,
      ADD_I: "",
    };
    if (obj.ADD_Todo) {
      obj.ADD_I = "far fa-window-close";
    } else {
      obj.ADD_I = "far fa-plus-square";
    }
    return this.props.onADD(obj);
  };

  render() {
    const { ADD_I } = this.props.app;
    return (
      <div className="AddTodo" onClick={() => this.showFunc()}>
        <button>
          <i className={ADD_I} />
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    app: state.app,
  };
}

function myDispatch(dispatch) {
  return {
    onADD: data =>
      dispatch({
        type: OPEN_ADD_TODO,
        payload: data,
      }),
  };
}

export default connect(
  mapStateToProps,
  myDispatch
)(AddTodo);
