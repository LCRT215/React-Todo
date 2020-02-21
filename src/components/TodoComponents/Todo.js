import React from "react";
import "./Todo.css";

const Todo = props => {
  return (
    <p
      style={props.todo.completed ? { textDecoration: "line-through" } : null}
      onClick={() => props.handleToggleComplete(props.todo.id)}
    >
      {props.todo.task}
    </p>
  );
};

export default Todo;
