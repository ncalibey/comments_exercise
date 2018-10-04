import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

const store = createStore(rootReducer)
​
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
