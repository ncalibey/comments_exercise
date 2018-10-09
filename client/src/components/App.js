import React, { Component } from 'react';
import logo from '../logo.svg';
import CommentList from './CommentList.js'
import CommentForm from './CommentForm.js'
import data from '../lib/data.js'

class App extends Component {
  state = { data: [] }

  showReplies = (commentId) => {
    const self = this;

    fetch(`/api/comment_replies?comment_id=${commentId}`)
      .then(function(response) {
        console.log(response);
        return response.json();
      })
      .then(function(replies) {
        const updatedData = self.state.data.map(comment => {
          if (comment.id === commentId) {
            return Object.assign({}, comment, {
              replies: comment.replies.concat(replies)
            });
          } else {
            return comment;
          }
        });

        self.setState({
          data: updatedData,
        });
    });
  }

  componentDidMount() {
    const self = this;

    fetch('/api/comments')
      .then(function(response) {
        return response.json();
      })
      .then(function(comments) {
        self.setState({
          data: comments,
        });
    });
  }

  render() {
    return (
      <div className="App">
        <CommentList
          data={this.state.data}
          showReplies={this.showReplies}
        />
        <CommentForm />
      </div>
    );
  }
}

export default App;
