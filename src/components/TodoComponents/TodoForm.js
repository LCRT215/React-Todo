import React from "react";

const TodoForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <input
        type="text"
        value={props.task}
        name="task"
        onChange={props.handleChange}
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

      <button onClick={props.handleSubmit}>Add Todo</button>
      <button onClick={props.handleSubmit}>Clear Completed</button>
    </form>
  );
};

export default TodoForm;
