import React from 'react';
import ReactDOM from 'react-dom';
import Comments from './components/Comments';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Comments />, document.getElementById('root'));
registerServiceWorker();
