import React from "react";

//All of the props here are methods that are defined on App.js
//This file is everything on the form
const TodoForm = props => {
  return (
    <form className="form" onSubmit={props.handleSubmit}>
      <input
        type="text"
        name="todo"
        value={props.value}
        placeholder="..todo"
        onChange={props.handleTodoChange}
      />

      <button className="btn" onClick={props.handleSubmit}>
        Add Todo
      </button>
      <button className="btn" onClick={props.handleClear}>
        Clear Completed
      </button>
    </form>
  );
};

export default TodoForm;
