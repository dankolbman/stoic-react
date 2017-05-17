import { CALL_API, getJSON } from 'redux-api-middleware'
var Config = require('Config')

export const NEW_TRIP_REQUEST = 'NEW_TRIP_REQUEST'
export function newTripRequest(form) {
	return {
    type: NEW_TRIP_REQUEST, 
    isFetching: true,
    form
  }
}

export const NEW_TRIP_FAILURE = 'NEW_TRIP_FAILURE'
function newTripFail(message) {
  return {
    type: NEW_TRIP_FAILURE,
    isFetching: false,
    message
  }
}

export const NEW_TRIP_SUCCESS = 'NEW_TRIP_SUCCESS'
export function newTripSuccess(trip) {
  return {
    type: NEW_TRIP_SUCCESS,
    isFetching: false,
    trip: trip
  }
}

export function postNewTrip(username, trip) {
  return {
    [CALL_API]: {
      endpoint: `http://localhost:8081/api/trips/trips/${username}`,
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(trip),
      types: [NEW_TRIP_REQUEST, 
			{
        type: NEW_TRIP_SUCCESS,
        payload: (action, state, res) => {
					return getJSON(res).then(
            consol.log(res)
          )
        }
      }, NEW_TRIP_FAILURE]
    }
  }
}
