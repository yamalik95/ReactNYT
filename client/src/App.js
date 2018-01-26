import React, { Component } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import axios from 'axios';

class App extends Component {

  state = {
    todos: [],
    completed: []
  };

  getArticles = (url = '') => {
    axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=b9f91d369ff59547cd47b931d8cbc56b:0:74623931&q=freewill")
    .then(function(res) {
      console.log(res);
    });
  };

  updateList = (value) => {
    const newTodos = this.state.todos.concat([value]);

    this.setState({ todos: newTodos });
  };

  moveToCompleted = (value) => {
    const completedIndex = this.state.todos.indexOf(value);
    this.state.todos.splice(completedIndex, 1);

    const newCompleted = this.state.completed.concat([value]);

    this.setState({
      completed: newCompleted
    });
  };

  moveToTodos = (value) => {
    const completedIndex = this.state.completed.indexOf(value);
    this.state.completed.splice(completedIndex, 1);

    const newTodos = this.state.todos.concat([value]);

    this.setState({
      todos: newTodos
    });
  };

  completedItem = (todoItem, checkedState) => {
    if (checkedState) {
      this.moveToCompleted(todoItem);
    } else {
      this.moveToTodos(todoItem);
    }
  };

  clearCompletedItems =
    (event) => {
      event.preventDefault();
      this.setState({ completed: [] });
    };

  showClearLink =
    () => {
      if (this.state.completed.length > 0) {
        return <div>
          <a href="#" onClick={this.clearCompletedItems}>Clear Completed Items</a>
        </div>
      }
    };

  showTodoList =
    () => (
      this.state.todos.length > 0
        ? <TodoList todos={this.state.todos} checked={false} completeItem={this.completedItem} />
        : <h4 class="test">There is nothing to do! Go outside and do something productive.</h4>
    );

  render() {
    this.getArticles()
    return (
      <div className="App">
        <TodoForm updateList={this.updateList} />
        {this.showTodoList()}

        <h3>Completed Items:</h3>
        {this.showClearLink()}
        <TodoList todos={this.state.completed} checked={true} completeItem={this.completedItem} />
      </div>
    );
  }
}

export default App;
