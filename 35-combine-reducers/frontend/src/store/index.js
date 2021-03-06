import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import hobbitReducer from './reducers/hobbitReducer'
import hogReducer from './reducers/hogReducer'

const rootReducer = combineReducers({ hobbitInfo: hobbitReducer, hogs: hogReducer })

// const store = createStore(hobbitReducer)
// const store = createStore(hobbitReducer, applyMiddleware(thunk))
const store = createStore(rootReducer, applyMiddleware(thunk))

export default store

export * from './actions/hobbitActions'
export * from './actions/hogActions'
