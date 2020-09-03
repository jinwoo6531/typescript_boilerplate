import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "react-redux";
import { applyMiddleware, createStore, compose } from 'redux';
import promiseMiddleware from "redux-promise";
import ReduxThunk from "redux-thunk";
import Reducer from "./_reducers/index";



const createStoreWithMiddleware = applyMiddleware(promiseMiddleware,ReduxThunk)(createStore); 

ReactDOM.render(
  <Provider
  store={createStoreWithMiddleware(
    Reducer,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()    
    
  )}
>
  <App />
</Provider>,
    
  
  document.getElementById('root')
);

