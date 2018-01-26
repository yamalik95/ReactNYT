import React, { Component } from 'react';
import TodoForm from './components/TodoForm';
// import TodoList from './components/TodoList';
import axios from 'axios';

class App extends Component {

  state = {
    articles: [],
    saved: []
  };

  updateArticles = (fullQuery) => {
    const parsedQuery = []

    for (var i = 0; i < 5; i++) {
      var importantInfoObj = {webURL: fullQuery[i].web_url, date: fullQuery[i].pub_date, title: fullQuery[i].headline.main}
      parsedQuery.concat(importantInfoObj)
    }
    console.log(parsedQuery)
    // this.setState({ articles: parsedQuery });
  };

  getArticles = (url = '') => {
    axios.get(url).then((res) => {
      let parsedQuery = []
      for (var i = 0; i < 5; i++) {
        let importantInfoObj = {webURL: res.data.response.docs[i].web_url, date: res.data.response.docs[i].pub_date, title: res.data.response.docs[i].headline.main}
        parsedQuery[i] = importantInfoObj
        console.log(parsedQuery)
      }
      this.setState({ articles: parsedQuery })
    });
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
    this.getArticles("https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=b9f91d369ff59547cd47b931d8cbc56b:0:74623931&q=freedom")
    return (
      <div className="App">
        <TodoForm  />
      </div>
    );
  }
}

export default App;
