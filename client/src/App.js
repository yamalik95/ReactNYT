import React, { Component } from 'react';
import QueryForm from './components/QueryForm';

class App extends Component {

  state = {
    articles: [],
    saved: []
  };

  moveToSaved = (value) => {
    const savedIndex = this.state.articles.indexOf(value);
    this.state.articles.splice(savedIndex, 1);

    const newSaved = this.state.saved.concat([value]);

    this.setState({
      saved: newSaved
    });
  };

  moveToArticles = (value) => {
    const completedIndex = this.state.completed.indexOf(value);
    this.state.completed.splice(completedIndex, 1);

    const newTodos = this.state.todos.concat([value]);

    this.setState({
      todos: newTodos
    });
  };

  // completedItem = (todoItem, checkedState) => {
  //   if (checkedState) {
  //     this.moveToCompleted(todoItem);
  //   } else {
  //     this.moveToTodos(todoItem);
  //   }
  // };

  // clearCompletedItems =
  //   (event) => {
  //     event.preventDefault();
  //     this.setState({ completed: [] });
  //   };

  // showClearLink =
  //   () => {
  //     if (this.state.completed.length > 0) {
  //       return <div>
  //         <a href="#" onClick={this.clearCompletedItems}>Clear Completed Items</a>
  //       </div>
  //     }
  //   };

  // showTodoList =
  //   () => (
  //     this.state.todos.length > 0
  //       ? <TodoList todos={this.state.todos} checked={false} completeItem={this.completedItem} />
  //       : <h4 class="test">There is nothing to do! Go outside and do something productive.</h4>
  //   );

  render() {
    return (
      <div className="App">
        <QueryForm  />
      </div>
    );
  }
}

export default App;
