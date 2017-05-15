import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { apiMiddleware } from 'redux-api-middleware'
import authMiddleware from './middleware/auth'
import tripApp from './reducers'
import { fetchPoints } from './actions/points'
import App from './components/App'

import './stoic.sass'

const store = createStore(
  tripApp,
  applyMiddleware(
    authMiddleware,
    apiMiddleware,
    thunkMiddleware
  )
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
