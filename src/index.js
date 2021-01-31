import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import state, { subscribe, updateFilterText } from './redux/state'
import store from './redux/reduxStore';


const rerender = (state) => {

  ReactDOM.render(
    <React.StrictMode>
      <App state={state} dispatch={store.dispatch.bind(store)}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
  
}

rerender(store.getState())

store.subscribe(() =>{
  rerender(store.getState())
})