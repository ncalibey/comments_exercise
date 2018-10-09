import React, { Component } from 'react'
import Comment from './Comment.js'

class ReplyList extends Component {
  render() {
    return (
      <div className="replies">
        <Comment { ...this.props.replies[0] } />
        <a href="#" className="show_more">Show More Replies ({this.props.repliesCount - 1})</a>
      </div>
    );
  }
}

export default ReplyList
