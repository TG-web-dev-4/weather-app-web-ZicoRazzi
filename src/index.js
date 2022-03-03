import React from 'react';
import ReactDOM from 'react-dom';
import { HushRouter as Router } from 'react-router-dom';
import App from './App';
import GlobalStyles from './styles/GlobalStyles';
import Typography from './styles/Typography';

ReactDOM.render(
  <Router>
    <GlobalStyles />
    <Typography />
    <App />
  </Router>,
  document.getElementById('root')
);
