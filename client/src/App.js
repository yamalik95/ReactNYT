import React, { Component } from 'react';
import QueryForm from './components/QueryForm';
import axios from 'axios';

class App extends Component {

  getSaved = () => {
      return axios.get('/api/articles');
  }


  render() {
    return (
      <div className="App">
        <QueryForm getSaved={this.getSaved} />
      </div>
    );
  }

}

export default App;
