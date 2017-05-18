import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import {
    BrowserRouter,
    Route,
    RouteHandler,
    Link,
    browserHistory
} from 'react-router-dom'
import thunkMiddleware from 'redux-thunk'
import { apiMiddleware } from 'redux-api-middleware'
import authMiddleware from './middleware/auth'
import tripApp from './reducers/app'
import { fetchPoints } from './actions/points'
import App from './components/App'

import './stoic.sass'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(tripApp, /* preloadedState, */ composeEnhancers(
  applyMiddleware(
    authMiddleware,
    apiMiddleware,
    thunkMiddleware
  )
))

render(
  <Provider store={store}>
    <BrowserRouter history={browserHistory}>
      <Route path="/" component={App} />
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
)
