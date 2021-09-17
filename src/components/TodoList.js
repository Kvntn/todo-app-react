import React, { useState, useEffect } from "react";
import ToDoItem from "./ToDoItem";

const TodoList = () => {
    const [userInput, setUserInput] = useState("");
    const [items, setItems] = useState(
        localStorage.getItem("TodoList")
            ? localStorage.getItem("TodoList").split(",")
            : []
    );
    console.log(items);
    const addTodo = (e) => {
        e.preventDefault();
        const input = userInput;
        let newItems = [...items, input];
        localStorage.setItem("TodoList", newItems);
        console.log("addTodo", userInput, input, e.target.value);
        setItems(newItems);
        setUserInput("");
        localStorage.setItem("TodoList", items);

        // console.log(localStorage);
    };

    useEffect(() => {
        localStorage.setItem("TodoList", items);
        document.title = `${items.length} tasks remaining`;
    }, [items]);

    const removeTodo = (index) => {
        // e.preventDefault();
        setItems((currItems) => {
            const newValues = currItems.filter((item, idx) => idx !== index);

            return newValues;
        });
    };

    const onChange = (e) => {
        setUserInput(e.target.value);
        // console.log('onChange', userInput)
    };

    return (
        <div>
            <h1 align="center">TodoList</h1>
            <form className="form-row align-items-center">
                <input
                    value={userInput}
                    type="text"
                    placeholder="Write your thingy"
                    onChange={onChange}
                    className="form-control mb-2"
                />
                <button disabled={!userInput} onClick={addTodo}>
                    Add
                </button>
            </form>
            <div className="list-group">
                {items.map((item, index) => (
                    <ToDoItem
                        key={`${index}${item}`}
                        item={item}
                        index={index}
                        removeTodo={removeTodo}
                    />
                ))}
            </div>
        </div>
    );
};

export default TodoList;
