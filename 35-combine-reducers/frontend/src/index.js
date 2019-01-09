import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { Provider } from 'react-redux'

import store from './store'


ReactDOM.render(<Provider store={store}>
  <App />
</Provider> , document.getElementById('root'));


// import { createStore, applyMiddleware, combineReducers } from 'redux'
// import thunk from 'redux-thunk'
// import hobbitReducer from './reducers/hobbitReducer'
// import hogReducer from './reducers/hogReducer'
//
// const rootReducer = combineReducers({ hobbitInfo: hobbitReducer, hogs: hogReducer })
//
// // const store = createStore(hobbitReducer)
// // const store = createStore(hobbitReducer, applyMiddleware(thunk))
// const store = createStore(rootReducer, applyMiddleware(thunk))
