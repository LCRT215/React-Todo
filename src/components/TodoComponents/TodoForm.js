import React from "react";

const TodoForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <input
        type="text"
        value={props.value}
        name="todo"
        onChange={props.handleClear}
        placeholder="..todo"
      />
      {/* <input
        type="date"
        value={Date.now()}
        name="date"
        onChange={props.handleChange}
      />
      <input
        type="text"
        value={props.completed}
        name="completed"
        onChange={props.handleChange}
      /> */}

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
