import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/reduxStore';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';


const rerender = (state) => {

  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <Provider store = {store}>
      <App />
      </Provider>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
  
}

rerender(store.getState())

store.subscribe(() =>{
  rerender(store.getState())
})