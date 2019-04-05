import React from "react";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";

// THIS IS THE PARENT COMPONENT : It will store my states, methods and change handlers that work with the states!

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      //original state defined in class
      todos: [], //Empty array for to-dos
      todo: "" //Empty string for the inputted to-do
    };
  }

  //METHODS
  //This handle is going to clear my selected todos. Needs to be linked to the buttons on the Todo form further down when we render! Prevent default so the page does not refresh (the page refreshing is a big no-no in React).
  handleClear = event => {
    //this method
    event.preventDefault();
    const todos = this.state.todos.filter(todo => !todo.completed);
    this.setState({ todos });
  };

  //This method adds todo to the todo array
  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      todos: [
        ...this.state.todos,
        {
          task: this.state.todo,
          id: Date.now(),
          completed: false
        }
      ],
      task: " "
    });
  };

  toggleTodo = event => {
    //Need you use let here not const. Not sure why...
    let todos = this.state.todos.slice();
    todos = todos.map(todo => {
      if (todo.id === event) {
        todo.completed = !todo.completed;
        return todo;
      } else {
        return todo;
      }
    });
    this.setState({ todos });
  };

  handleTodoChange = event => {
    console.log(event.target.value);
    this.setState({
      todo: event.target.value
    });
  };
  // clearCompletedTodos = event => {
  //   event.preventDefault();
  //   let todos = this.state.todos.filter(todo => !todo.completed);
  //   //Making a todo variable and filtering through the
  //   this.setState({ todos });
  // };

  //This is where we call all of our methods so they can be active on the page
  render() {
    return (
      <div className="container">
        <h1>Todo List: MVP</h1>
        <TodoList
          handleToggleComplete={this.toggleTodoComplete}
          todos={this.state.todos}
        />

        <TodoForm
          value={this.state.todo}
          handleClear={this.handleClear}
          handleSubmit={this.handleSubmit}
          handleTodoChange={this.handleTodoChange}
        />
      </div>
    );
  }
}

export default App;
