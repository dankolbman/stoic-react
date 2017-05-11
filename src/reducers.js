import { combineReducers } from 'redux'
import { LOGIN_REQUEST, LOGIN_FAILURE, LOGIN_SUCCESS,
				 LOGOUT_REQUEST, LOGOUT_FAILURE, LOGOUT_SUCCESS } from './actions/auth'
import { REQUEST_POINTS, RECEIVE_POINTS } from './actions/points'

const initialState = {
  center: [0.0, 0.0],
  points: {},
  isFetching: true
}

function auth(state = {
    isFetching: false,
    isAuthenticated: localStorage.getItem('id_token') ? true : false
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
        isFetching: true,
        isAuthenticated: false
      })
    default:
      return state
    }
}


function trip(state = initialState, action) {
  switch (action.type) {
    case REQUEST_POINTS:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVE_POINTS:
      return Object.assign({}, state, {
        points: action.points,
        center: action.center,
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
