import React from "react";
import TodoForm from "./components/TodoComponents/TodoForm";
import Todo from "./components/TodoComponents/Todo";
import TodoList from "./components/TodoComponents/TodoList";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: [],
      task: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.setState({
      todos: [
        ...this.state.todos,
        {
          task: this.state.task,
          id: Date.now(),
          completed: false
        }
      ],
      task: ""
    });
  };

  render() {
    return (
      <div>
        <h1>Todo List: MVP</h1>
        <TodoList todos={this.state.todos} />
        <TodoForm
          task={this.state.task}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          I
        />
      </div>
    );
  }
}

export default App;
