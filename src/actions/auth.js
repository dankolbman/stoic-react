import axios from 'axios'
var Config = require('Config')

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export function requestLogin(creds) {
	return {
    type: LOGIN_REQUEST, 
    isFetching: true,
    isAuthenticated: false,
    creds
  }
}

export const LOGIN_FAILURE = 'LOGIN_FAILURE'
function loginFail(message) {
  return {
    type: LOGIN_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    message
  }
}

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export function loginSuccess(username, token) {
  return {
    type: LOGIN_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    username: username,
    id_token: token
  }
}

export function loginUser(creds) {
  
  let config = {
    method: 'POST',
		url: `${Config.apiUrl}/users/auth`,
    data: {username: creds.username, password: creds.password}
  }
  
  return dispatch => {
    // We dispatch requestLogin to kickoff the call to the API
    dispatch(requestLogin(creds))
    return axios(config)
                .then(response => {
									localStorage.setItem('id_token', response.data.access_token)
									localStorage.setItem('username', creds.username)
									dispatch(loginSuccess(creds.username, response.data.access_token))
                })
                .catch((error) => {
									if (error.response) {
										dispatch(loginFail(error.response.data.description))
									}
                })
  }
}

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST'
function requestLogout() {
    return {
      type: LOGOUT_REQUEST,
      isFetching: true,
      isAuthenticated: true
  }
}

export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
function receiveLogout() {
    return {
      type: LOGOUT_SUCCESS,
      isFetching: false,
      isAuthenticated: false
  }
}

export const LOGOUT_FAILURE = 'LOGOUT_FAILURE'
function logoutFail() {
    return {
      type: LOGOUT_FAILURE,
      isFetching: false,
      isAuthenticated: false
  }
}

export function logoutUser() {
  return dispatch => {
    dispatch(requestLogout())
    localStorage.removeItem('id_token')
    localStorage.removeItem('username')
    dispatch(receiveLogout())
  }
}

// Register a new user
export const REGISTER_REQUEST = 'REGISTER_REQUEST'
function requestRegister() {
    return {
      type: REGISTER_REQUEST,
      isFetching: true
  }
}

export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
function receiveRegister() {
    return {
      type: REGISTER_SUCCESS,
      isFetching: false
  }
}

export const REGISTER_FAILURE = 'REGISTER_FAILURE'
function registerFail(message) {
    return {
      type: REGISTER_FAILURE,
      isFetching: false,
      message
  }
}

export function registerUser(creds) {
  
  let config = {
    method: 'POST',
		url: `${Config.apiUrl}/users/user/`,
    data: {username: creds.username,
           email: creds.email,
           password: creds.password}
  }
  
  return dispatch => {
    // We dispatch requestLogin to kickoff the call to the API
    dispatch(requestLogin(creds))
    return axios(config)
                .then(response => {
									dispatch(registerSuccess(creds.username))
                })
                .catch((error) => {
									if (error.response) {
										dispatch(registerFail(error.response.data.status))
									}
                })
  }
}
