import React, { Component } from 'react';
import Comments from './Comments';

class App extends Component {
  state = {
    comments: [],
  };

  componentDidMount() {
    global.fetch('/api/comments')
      .then(response => response.json())
      .then(comments => this.setState({comments}));
  };

  handleShowMoreClick = (id) => {
    global.fetch(`/api/comment_replies?comment_id=${id}`)
      .then(response => response.json())
      .then(replies => {
        this.setState({
          comments: this.state.comments.map((c) => {
            return c.id === id ? Object.assign({}, c, {replies}) : c;
          })
        });
      });
  };

  render() {
    return (
      <div>
        <Comments
          comments={this.state.comments}
          onShowMoreClick={this.handleShowMoreClick}
        />
      </div>
    );
  }
}

export default App;
