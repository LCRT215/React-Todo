// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";
import "./Todo.css";

const TodoList = props => {
  return (
    <div>
      {props.todos.map((todos, index) => (
        <Todo
          handleToggleComplete={props.handleToggleComplete}
          key={index}
          todo={todos}
        />
      ))}
    </div>
  );
};

export default TodoList;
