import React, { Component } from 'react';
import Comments from './Comments';
import NewCommentForm from './NewCommentForm';

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

  handleCommentSubmit = (commentFields) => {
    global.fetch(`/api/comments`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify({comment: commentFields})
    }).then(response => response.json())
      .then(comment => this.setState({comments: this.state.comments.concat(comment)}));
  }

  render() {
    return (
      <div>
        <Comments
          comments={this.state.comments}
          onShowMoreClick={this.handleShowMoreClick}
        />
        <NewCommentForm
          onSubmit={this.handleCommentSubmit}
        />
      </div>
    );
  }
}

export default App;
