import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import state, { subscribe, updateFilterText } from './redux/state'
import store from './redux/store';


const rerender = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App store={store} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

rerender()

store.subscribe(rerender)