import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state, { subscribe, updateFilterText } from './redux/state'

const rerender = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} 
      updateFilterText = {updateFilterText}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

rerender()

subscribe(rerender)