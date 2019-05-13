import React from "react";

const InputButton = props => {
  return (
    <div className="InputTodo">
      <div className="Input_block">
        <input
          id="ValueInput"
          type="text"
          placeholder="Введите текст"
          value={props.InputValue}
          onChange={props.onChangeInput}
        />
        <button onClick={props.onAddTodo}>Добавить</button>
      </div>
    </div>
  );
};

export default InputButton;
