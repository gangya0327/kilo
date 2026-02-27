// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

import ReactDOM from 'react-dom/client'
import './index.css'

const name = 'React19'
const jsx = <div style={{color: 'red'}}>
  <div>hello {name}</div>
</div>

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(jsx)