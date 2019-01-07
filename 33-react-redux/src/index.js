import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//CreateStore is a JavaScript Function
import {createStore} from 'redux'
import reducer from './redux/reducer'
//React Component
import {Provider} from 'react-redux'

const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));
