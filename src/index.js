import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import {createStore,applyMiddleware} from 'redux';
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import CommonReducer from "./Reducer/CommonReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import App from "./App"
import * as serviceWorker from './serviceWorker';
const middlewares = [thunk];
if (process.env.NODE_ENV === `development`) {
    const { logger } = require(`redux-logger`);
    middlewares.push(logger);
}

const composeEnhancers = composeWithDevTools({});
    function configureStore() {
      return createStore(CommonReducer, composeEnhancers(applyMiddleware(...middlewares)));
    }
const store = configureStore();
ReactDOM.render(
  <Provider store={store}>
     <App/>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
