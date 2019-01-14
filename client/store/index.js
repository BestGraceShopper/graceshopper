import { createStore, combineReducers, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

// import {user, product} from './reducers'
import user from './reducers/user'
import product from './reducers/product'
import cart from './reducers/cart'

const reducer = combineReducers({ user, product, cart })
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
)
const store = createStore(reducer, middleware)

export default store
export * from './reducers/user'
