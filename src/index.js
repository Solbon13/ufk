import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state, { filteringTheList } from './redux/state'

ReactDOM.render(
  <React.StrictMode>
    <App newsData={state.newsData} filteringTheList = {filteringTheList}/>
  </React.StrictMode>,
  document.getElementById('root')
);
