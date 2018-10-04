const commentsReducer = (state = [], action) => {
  switch (action.type) {
    case expression:
      return
    default:
      return state;
  }
}

const repliesReducer = (state = [], action) => {
  switch (action.type) {
    case expression:
      return
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
