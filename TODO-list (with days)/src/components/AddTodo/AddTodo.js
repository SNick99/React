import React from "react";
import { connect } from "react-redux";
import { OPEN_ADD_TODO } from "../../redux/actions/types";

class AddTodo extends React.Component {
  render() {
    return (
      <div className="AddTodo" onClick={this.props.addTodoOpen.onADD}>
        <button>
          <i className={this.props.addTodoOpen.ADD_I} />
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    addTodoOpen: state.addTodoOpen,
  };
}

function myDispatch(dispatch) {
  return {
    onADD: () =>
      dispatch({
        type: OPEN_ADD_TODO,
      }),
  };
}

export default connect(
  mapStateToProps,
  { myDispatch }
)(AddTodo);
