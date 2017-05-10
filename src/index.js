import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import tripApp from './reducers'
import { fetchPoints } from './actions'
import App from './components/App'

const store = createStore(tripApp, applyMiddleware(thunkMiddleware))

store.dispatch(fetchPoints('trip1')).then(() =>
  console.log(store.getState())
)

render(
  <Provider store={store}>
    <App trip={'trip1'}/>
  </Provider>,
  document.getElementById('app')
)
