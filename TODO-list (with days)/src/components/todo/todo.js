import * as React from "react";

class Todo extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.handleClick(this.props.i, this.props.day);
  }

  render() {
    const {
      handleChange,
      InputValue1,
      onChangeInput1,
      todoTitle,
      i,
      classCheck,
      ToDoArray,
      changeToDoTitle,
      onDelete,
      classText,
      day,
    } = this.props;

    return (
      <div className="todo">
        <button className="checkbox" onClick={this.handleClick}>
          <i className={classCheck} />
        </button>

        <button className="delete" onClick={() => handleChange(i, day)}>
          <i class="fas fa-pencil-alt" />
        </button>

        {ToDoArray ? (
          <React.Fragment>
            <input
              type="text"
              placeholder="Введите текст"
              value={InputValue1}
              onChange={onChangeInput1}
            />
            <button className="delete" onClick={() => changeToDoTitle(i, day)}>
              <i class="fas fa-check" />
            </button>
          </React.Fragment>
        ) : (
          <span className={classText}>{todoTitle}</span>
        )}

        <button className="delete" onClick={() => onDelete(i, day)}>
          <i className="fas fa-trash-alt" />
        </button>
      </div>
    );
  }
}

export default Todo;
