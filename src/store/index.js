import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { postReducers } from './reducers/post'

const rootReducer = combineReducers({
  post: postReducers,
})

export default createStore(rootReducer, applyMiddleware(thunk))
