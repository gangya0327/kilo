import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);

// import ReactDOM from 'react-dom/client'

// const person = { firstName: 'Peter', lastName: 'Raven' }

// function formatName(name) {
//   return name.firstName + ' ' + name.lastName
// }
// const show = false

// const name = 'React19'
// const jsx = (<div style={{ color: 'blue' }}>
//   <div>hello {name}</div>
//   <div>{formatName(person)}</div>
//   <div>{show ? '显示' : '隐藏'}</div>
// </div>)

// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(jsx)