import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import reducer from "./app/store";
// import { configureStore } from '@reduxjs/toolkit';
// const store= createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider> */}
    <App />
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
