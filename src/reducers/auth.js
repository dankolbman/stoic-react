import { LOGIN_REQUEST, LOGIN_FAILURE, LOGIN_SUCCESS,
				 LOGOUT_REQUEST, LOGOUT_FAILURE, LOGOUT_SUCCESS,
         REGISTER_REQUEST, REGISTER_FAILURE, REGISTER_SUCCESS } from '../actions/auth'

const initialState = {
  isFetching: false,
  isAuthenticated: localStorage.getItem('id_token') ? true : false,
  username: localStorage.getItem('username') || ''
}

function auth(state = initialState, action) {
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
export default auth
