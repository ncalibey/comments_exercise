import React, { Component } from 'react';
import comments from '../lib/comments';
import ParentComment from './ParentComment';

class Comments extends Component {
  state = {
    comments
  };

  render() {
    const parentComments = this.state.comments.map((c) => <ParentComment key={c.id} {...c}/>);
    return (
      <div className="comments">
        <h2>Comments ({this.state.comments.length})</h2>
        { parentComments }
      </div>
    );
  }
}

export default Comments;
