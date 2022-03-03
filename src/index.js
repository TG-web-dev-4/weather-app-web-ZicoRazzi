import React from 'react';
import ReactDOM from 'react-dom';
import { HushRouter } from 'react-router-dom';
import App from './App';
import GlobalStyles from './styles/GlobalStyles';
import Typography from './styles/Typography';

ReactDOM.render(
  <HushRouter>
    <GlobalStyles />
    <Typography />
    <App />
  </HushRouter>,
  document.getElementById('root')
);
