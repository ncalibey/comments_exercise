import React, { Component } from 'react'
import Comment from './Comment.js'

class ReplyList extends Component {
  handleClick = (e) => {
    e.preventDefault();

    const commentId = this.props.replies[0].comment_id;

    this.props.showReplies(commentId);
  }

  render() {
    const replies = this.props.replies.map(reply => (
      <Comment
        key={reply.id}
        { ...reply}
      />
    ))
    const invisible = this.props.replies.length === this.props.repliesCount ? 'invisible' : '';
    
    return (
      <div className="replies">
        {replies}
        <a href="#"
           className={`show_more ${invisible}`}
           onClick={this.handleClick}
        >
          Show More Replies ({this.props.repliesCount - 1})
        </a>
      </div>
    );
  }
}

export default ReplyList
