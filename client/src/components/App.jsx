import React, { Component } from 'react';
import Comments from './Comments';
import NewCommentForm from './NewCommentForm';
import PropTypes from 'prop-types';

class App extends Component {
  static contextTypes = {
    store: PropTypes.object
  };

  componentDidMount() {
    const { store } = this.context;
    this.unsubscribe = store.subscribe(() => {
      this.forceUpdate();
    });

    global.fetch('/api/comments')
      .then(response => response.json())
      .then(comments => store.dispatch({type: 'COMMENTS_FETCHED', comments}));
  }

  render() {
    const {store} = this.context;
    const comments = store.getState().comments;
    return (
      <div>
        <Comments
          comments={comments}
        />
        <NewCommentForm
        />
      </div>
    );
  }
}

export default App;
