import React, { Component } from "react";

class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      userInput: "",
      items: localStorage.getItem("TodoList")
        ? localStorage.getItem("TodoList").split(",")
        : [],
    };
  }

  onChange(event) {
    this.setState({
      userInput: event.target.value,
    });
  }

  addTodo(event) {
    event.preventDefault();
    let input = this.state.userInput.trim();
    console.log(input);
    if (input != null && input !== "") {
      this.setState(
        {
          items: [...this.state.items, input],
          userInput: "",
        },
        () => {
          localStorage.setItem("TodoList", this.state.items);
        }
      );

      console.log(localStorage);
    }
  }

  removeTodo(item) {
    const arr = this.state.items;
    const index = arr.indexOf(item);
    arr.splice(index, 1);

    this.setState(
      {
        items: arr,
      },
      () => {
        localStorage.setItem("TodoList", this.state.items);
      }
    );
    // localStorage.setItem('TodoList', this.state.items)
  }

  renderTodo() {
    console.log(this.state.items);
    return this.state.items?.map((item) => {
      return (
        <div key={item}>
          {item}{" "}
          <button onClick={this.removeTodo.bind(this, item)}> Done </button>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <h1 align="center">TodoList</h1>
        <form className="form-row align-items-center">
          <input
            value={this.state.userInput}
            type="text"
            placeholder="Write your thingy"
            onChange={this.onChange.bind(this)}
            className="form-control mb-2"
          />
          <button onClick={this.addTodo.bind(this)}>Add</button>
        </form>
        <div className="list-group">{this.renderTodo()}</div>
      </div>
    );
  }
}

export default TodoList;
