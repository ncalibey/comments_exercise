import React from 'react';
import Comment from './Comment';
import PropTypes from 'prop-types';

class ParentComment extends React.Component {
  static contextTypes = {
    store: PropTypes.object
  };

  getRepliesForComment = () => {
    const { id } = this.props.comment;
    const { store } = this.context;
    return store.getState().replies.filter((r) => r.comment_id === id);
  };

  handleShowMoreClick = () => {
    const { store } = this.context;
    const { id } = this.props.comment;

    global.fetch(`/api/comment_replies?comment_id=${id}`)
      .then(response => response.json())
      .then(replies => {
        store.dispatch({type: 'REPLIES_FETCHED', replies});
      });
  };

  render() {
    const { comment } = this.props;
    const replies = this.getRepliesForComment();

    return (
      <div className="parent-comment">
        <Comment
          id={comment.id}
          author={comment.author}
          body={comment.body}
          postedAt={comment.postedAt}
        />
        <div className="replies">
          {
            replies.map((reply) => <Comment key={reply.id} {...reply} />)
          }
          {
            comment.replies_count > replies.length &&
            <a
              className="show-more"
              onClick={this.handleShowMoreClick}
            >
              Show More Replies ({comment.replies_count - replies.length})
            </a>
          }
        </div>
      </div>
    );
  }
}

export default ParentComment;
