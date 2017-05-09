import { CALL_API } from './middleware/api'

// Auth stuff
export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE'
export const REGISTER_REQUEST = 'REGISTER_REQUEST'
export const REGISTER_FAILURE = 'REGISTER_FAILURE'
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
// Resource stuff
export const TRIP_REQUEST = 'TRIP_REQUEST'
export const TRIP_SUCCESS = 'TRIP_SUCCESS'
export const TRIP_FAILURE = 'TRIP_FAILURE'
export const POINTS_REQUEST = 'POINTS_REQUEST'
export const POINTS_SUCCESS = 'POINTS_SUCCESS'
export const POINTS_FAILURE = 'POINTS_FAILURE'

var Config = require('Config')

function requestRegister(creds) {
  return {
    type: REGISTER_REQUEST,
    isFetching: true,
    isAuthenticated: false
  }
}

function registerError(message) {
  return {
    type: REGISTER_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    message
  }
}

function receiveRegister(user) {
  return {
    type: REGISTER_SUCCESS,
    isFetching: false,
    isAuthenticated: false
  }
}

function receiveLogout() {
  return {
    type: LOGOUT_SUCCESS,
    isFetching: false,
    isAuthenticated: false
  }
}

function requestLogin(creds) {
  return {
    type: LOGIN_REQUEST,
    isFetching: true,
    isAuthenticated: false,
    creds
  }
}

function receiveLogin(user) {
  return {
    type: LOGIN_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    id_token: user.id_token
  }
}

function loginError(message) {
  return {
    type: LOGIN_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    message
  }
}

function requestLogout() {
  return {
    type: LOGOUT_REQUEST,
    isFetching: true,
    isAuthenticated: true
  }
}

export function fetchTrip() {
  return {
    [CALL_API]: {
      endpoint: '/points/',
      authenticated: true,
      types: [TRIP_REQUEST, TRIP_SUCCESS, TRIP_FAILURE]
    }
  }
}

export function fetchPoints() {
  return {
    [CALL_API]: {
      endpoint: '/points/dan/trip1',
      authenticated: false,
      types: [POINT_REQUEST, POINT_SUCCESS, POINT_FAILURE]
    }
  }
}

export function registerUser(creds) {

  let config = {
    method: 'POST',
    headers: { 'Accept':'application/json',
               'Content-Type':'application/json' },
    body: JSON.stringify({username: creds.username,
                          email: creds.email,
                          password: creds.password})
  }

  return dispatch => {
    // We dispatch requestLogin to kickoff the call to the API
    dispatch(requestRegister(creds))

    return fetch(Config.apiUrl+'/user/', config)
      .then(response =>
        response.json().then(user => ({ user, response }))
            ).then(({ user, response }) =>  {
        if (!response.ok) {
          // If there was a problem, we want to
          // dispatch the error condition
          dispatch(registerError(user.message))
          return Promise.reject(user)
        } else {
          dispatch(receiveRegister(user))
        }
      }).catch(err => console.log("Error: ", err))
  }
}

export function loginUser(creds) {

  let config = {
    method: 'POST',
    headers: { 'Accept':'application/json',
               'Content-Type':'application/json' },
    body: JSON.stringify({username: creds.username, password: creds.password})
  }

  return dispatch => {
    // We dispatch requestLogin to kickoff the call to the API
    dispatch(requestLogin(creds))

    return fetch(Config.apiUrl+'/auth', config)
      .then(response =>
        response.json().then(user => ({ user, response }))
            ).then(({ user, response }) =>  {
        if (!response.ok) {
          // If there was a problem, we want to
          // dispatch the error condition
          dispatch(loginError(user.message))
          return Promise.reject(user)
        } else {
          // If login was successful, set the token in local storage
          localStorage.setItem('id_token', user.id_token)
          // Dispatch the success action
          dispatch(receiveLogin(user))
        }
      }).catch(err => console.log("Error: ", err))
  }
}

export function logoutUser() {
  return dispatch => {
    dispatch(requestLogout())
    localStorage.removeItem('id_token')
    localStorage.removeItem('access_token')
    dispatch(receiveLogout())
  }
}
