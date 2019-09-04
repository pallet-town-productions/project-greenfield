import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import configureStore from './store';
import ConnectedApp from './components/app';
import * as serviceWorker from './serviceWorker';

require('dotenv').config();

ReactDOM.render(
  <Provider store={configureStore()}>
    <Router>
      <ConnectedApp>
        <Route path="/:product" component={ConnectedApp} />
      </ConnectedApp>
    </Router>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
