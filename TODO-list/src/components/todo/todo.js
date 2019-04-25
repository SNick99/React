import React from 'react';


const todo = (props) => {
    return(
        <div className="todo">

            <button className="checkbox" onClick={props.handleClick}>
                <i className={props.classCheck}></i>
            </button>

                <span className={props.classText}>
                    {props.todoTitle}
                </span>

            <button className="delete" onClick={props.onDelete}>
                <i className="fas fa-trash-alt"></i>
            </button>
        </div>
    )
};

export default todo;