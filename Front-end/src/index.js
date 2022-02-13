/*
 * @Author: D_bxg
 * @Date: 2022-01-22 10:38:57
 * @LastEditors: D_bxg
 * @LastEditTime: 2022-01-29 12:22:03
 * @Description: file content
 * @FilePath: \applicatione:\Code\Project\Graduation-Project\Front-end\src\index.js
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss'
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
