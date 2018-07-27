import React from 'react';
import moment from 'moment';

const Comment = (props) => (
  <div className="comment">
    <hr />
    <div className="image">
      <img src="/images/no-user-image.gif" alt=""/>
    </div>
    <div className="header">
      <h3 className="author">{props.author}</h3>
      <span>{moment(props.postedAt).fromNow()}</span>
    </div>
    <p>{props.body}</p>
  </div>
);

export default Comment;
