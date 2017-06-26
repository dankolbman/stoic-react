import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
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
import { AppContainer } from 'react-hot-loader'
import authMiddleware from './middleware/auth'
import tripApp from './reducers/app'
import { fetchPoints } from './actions/points'
import App from './containers/App'

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
  <AppContainer>
    <Provider store={store}>
      <BrowserRouter history={browserHistory}>
        <Route path="/" component={App} />
      </BrowserRouter>
    </Provider>
  </AppContainer>,
  document.getElementById('app')
)

if (module.hot) {
  module.hot.accept('./containers/App', () => {
    render(App)
  });
}
