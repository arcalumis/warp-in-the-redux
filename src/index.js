import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import configureStore, { history } from './configureStore'
import { App } from './App';
import './App.scss'

const store = configureStore({ text : {
  text_one : "Hello",
  text_two: "World!"
} });

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App history={history} /> 
    </Provider>,
    document.getElementById('app')
  );
}

render();