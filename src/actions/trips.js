import { CALL_API, getJSON } from 'redux-api-middleware'
var Config = require('Config')

export const REQUEST_TRIPS = 'REQUEST_TRIPS'
export const RECEIVE_TRIPS = 'RECEIVE_TRIPS'
export const TRIPS_FAILURE = 'TRIPS_FAILURE'

export function fetchTrips(username) {
  return {
    [CALL_API]: {
      endpoint: `${Config.apiUrl}/trips/trips/${username}`,
      method: 'GET',
      types: [REQUEST_TRIPS,
			{
        type: RECEIVE_TRIPS,
        payload: (action, state, res) => {
					return getJSON(res).then(
              (json) => receiveTrips(username, json)
          )
        }
      }, TRIPS_FAILURE]
    }
  }
}

function receiveTrips(username, json) {
  return {
    type: RECEIVE_TRIPS,
    username: username,
    user_trips: json.trips
  }
}
