import React from 'react';


const AddTodo = (props) => {
    return(
        <div className="AddTodo" onClick={props.onInputTodo}>
            <button>
                <i className={props.ADD_I}></i>
            </button>
        </div>
    )
};

export default AddTodo;