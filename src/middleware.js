import axios from 'axios'
var Config = require('Config')


/*
 * Calls the api at `endpoint` and passes the JWT token if `authenticated`
 */
function callApi(endpoint, authenticated) {
  
  let token = localStorage.getItem('id_token') || null
  let config = {}
  
  if(authenticated) {
    if(token) {
      config = {
				method: 'get',
				url: Config.apiURL + endpoint,
        headers: { 'Authorization': `JWT ${token}` }
      }
    } else {
      throw "No token saved!"
    }
  }
  
  return axios(config)
						.then(response => {
							return response
						})
						.catch((error) => {
							console.log(error);
						})
}

export const CALL_API = Symbol('Call API')

export default store => next => action => {
  
  const callAPI = action[CALL_API]
  
  // So the middleware doesn't get applied to every single action
  if (typeof callAPI === 'undefined') {
    return next(action)
  }
  
  let { endpoint, types, authenticated } = callAPI
  
  const [ requestType, successType, errorType ] = types
  
  return callApi(endpoint, authenticated).then(
    response =>
      next({
        response,
        authenticated,
        type: successType
      }),
    error => next({
      error: error.message || 'There was an error.',
      type: errorType
    })
  )
}
