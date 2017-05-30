import { CALL_API, getJSON } from 'redux-api-middleware'
var Config = require('Config')

export const REQUEST_POINTS = 'REQUEST_POINTS'
export function requestPoints(username, trip) {
	return { 
    type: REQUEST_POINTS,
    isFetching: true
  }
}

export const RECEIVE_POINTS = 'RECEIVE_POINTS'
function receivePoints(username, tripid, json) {
  console.log(json)
  if (json.count < 1) {
    var coords = json.points
    var center = [ coords.reduce( function(sum, a) { return sum + a [1]},0)/
                            (payload.geometry.coordinates.length||1),
                   coords.reduce( function(sum, a) { return sum + a [1]},0)/
                                (payload.geometry.coordinates.length||1)]
    var points = json.lines
  } else {
    var center = [0.0, 0.0]
    var points = null
  }
  points = json.points
  return {
    type: RECEIVE_POINTS,
    username: username,
    tripid: tripid,
    points: points,
    center: center
  }
}

export const POINTS_FAILURE = 'POINTS_FAILURE'
export function pointsFail() {
	return { 
    type: POINTS_FAILURE,
    isFetching: false
  }
}

export function fetchPoints(username, trip) {
  return {
    [CALL_API]: {
      endpoint: `${Config.apiUrl}/geo/points/${username}/${trip}`,
      method: 'GET',
      types: [REQUEST_POINTS, 
			{
        type: RECEIVE_POINTS,
        payload: (action, state, res) => {
					return getJSON(res).then(
              (json) => receivePoints(username, trip, json)
          )
        }
      }, POINTS_FAILURE]
    }
  }
}
