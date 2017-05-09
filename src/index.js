import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import StoicApp from './containers/App'
import stoicApp from './reducers'
import thunkMiddleware from 'redux-thunk'
import api from './middleware/api'

let createStoreWithMiddleware = applyMiddleware(thunkMiddleware, api)(createStore)

let store = createStoreWithMiddleware(stoicApp)

let rootElement = document.getElementById('app')

render(
    <Provider store={store}>
        <StoicApp />
    </Provider>,
    rootElement
)
