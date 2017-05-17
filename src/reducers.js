import { combineReducers } from 'redux'
import { LOGIN_REQUEST, LOGIN_FAILURE, LOGIN_SUCCESS,
				 LOGOUT_REQUEST, LOGOUT_FAILURE, LOGOUT_SUCCESS,
         REGISTER_REQUEST, REGISTER_FAILURE, REGISTER_SUCCESS } from './actions/auth'
import { REQUEST_POINTS, RECEIVE_POINTS, POINTS_FAILURE } from './actions/points'


function auth(state = {
    isFetching: false,
    isAuthenticated: localStorage.getItem('id_token') ? true : false,
    username: localStorage.getItem('username') || ''
  }, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        isAuthenticated: false,
        user: action.creds
      })
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: true,
        username: action.username,
        errorMessage: ''
      })
    case LOGIN_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false,
        errorMessage: action.message
      })
    case LOGOUT_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false
      })
    case REGISTER_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      })
    case REGISTER_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        errorMessage: action.message
      })
    case REGISTER_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        errorMessage: ''
      })
    default:
      return state
    }
}

const initialState = {
  center: [0.0, 0.0],
  points: {},
  isFetching: true
}

function trip(state = initialState, action) {
  switch (action.type) {
    case REQUEST_POINTS:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVE_POINTS:
      return Object.assign({}, state, {
        points: {},
        center: [0,0],
        isFetching: false
      })
    default:
      return state
  }
}

const tripApp = combineReducers({
  auth,
  trip
})

export default tripApp
