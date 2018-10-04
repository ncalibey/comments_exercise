const commentsReducer = (state = [], action) => {
  switch (action.type) {
    case 'COMMENTS_FETCHED':
      return action.comments.map((c) => {
        const { replies, ...comment_without_replies } = c;
        return comment_without_replies;
      });

    case 'NEW_COMMENT_ADDED':
      const { replies, ...comment_without_replies } = action.comment;
      return state.concat(comment_without_replies);
    default:
      return state;
  }
}

const repliesReducer = (state = [], action) => {
  switch (action.type) {
    case 'COMMENTS_FETCHED':
      return action.comments.reduce((acc, c) => {
        return acc.concat(c.replies);
      }, []);
    case 'REPLIES_FETCHED':
      return state.concat(action.replies);
    default:
      return state;
  }
}

export const rootReducer = (state = {}, action) => {
  return {
    comments: commentsReducer(state.comments, action),
    replies: repliesReducer(state.replies, action)
  };
}
