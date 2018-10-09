import React, { Component } from 'react'
import ParentComment from './ParentComment.js'

class CommentList extends Component {
  render() {
    const ParentCommentList = this.props.data.map((comment) => {
      return <ParentComment comment={comment} key={comment.id} />
    });
    return (
      <div className="comments">
        <h2>Comments ({this.props.data.length})</h2>
        {ParentCommentList}
      </div>
    );
  }
}

export default CommentList
