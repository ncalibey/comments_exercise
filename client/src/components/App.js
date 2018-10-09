import React, { Component } from 'react';
import logo from '../logo.svg';
import CommentList from './CommentList.js'
import CommentForm from './CommentForm.js'
import data from '../lib/data.js'

class App extends Component {
  state = { data }

  render() {
    return (
      <div className="App">
        <CommentList data={this.state.data} />
        <CommentForm />
      </div>
    );
  }
}

export default App;
