import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

const Root = () => (
  <Provider store={store}>
    <Router>
<h1>esa</h1>
    </Router>
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById('root'));
