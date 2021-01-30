import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state, { updateFilterText } from './redux/state'

ReactDOM.render(
  <React.StrictMode>
    <App state={state} 
    updateFilterText = {updateFilterText}/>
  </React.StrictMode>,
  document.getElementById('root')
);
