import React from "react";

const ToDoItem = (props) => {
    const { item, removeTodo, index } = props;
    return (
        <div>
            {item} <button onClick={() => removeTodo(index)}> Done </button>
        </div>
    );
};

export default ToDoItem;
