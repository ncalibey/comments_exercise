import React from 'react';
import Comment from './Comment';

const ParentComment = ({comment, onShowMoreClick}) => (
  <div className="parent-comment">
    <Comment
      id={comment.id}
      author={comment.author}
      body={comment.body}
      postedAt={comment.postedAt}
    />
    <div className="replies">
      {
        comment.replies.map((reply) => <Comment key={reply.id} {...reply} />)
      }
      {
        comment.replies_count > comment.replies.length &&
        <a
          className="show-more"
          onClick={(e) => onShowMoreClick(comment.id)}
        >
          Show More Replies ({comment.replies_count - comment.replies.length})
        </a>
      }
    </div>
  </div>
);

export default ParentComment;
