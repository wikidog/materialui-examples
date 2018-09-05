import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import 'typeface-roboto';

import App from './components/App';
// import MyComponent from './dashboard/Dashboard';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
// ReactDOM.render(<MyComponent />, document.getElementById('root'));
