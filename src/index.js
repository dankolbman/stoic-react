import React from 'react'
import { render } from 'react-dom'

import thunkMiddleware from 'redux-thunk'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import { apiMiddleware } from 'redux-api-middleware'
import authMiddleware from './middleware/auth'
import reducers from './reducers'

import App from './components/App'

import './stoic.sass'


const store = createStore(
  combineReducers({
    app: reducers,
    routing: routerReducer
  }),
  applyMiddleware(
    authMiddleware,
    apiMiddleware,
    thunkMiddleware
  )
)

const history = syncHistoryWithStore(browserHistory, store)


render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
