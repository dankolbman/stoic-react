import { CALL_API, getJSON } from 'redux-api-middleware'
var Config = require('Config')

export const REQUEST_LINES = 'REQUEST_LINES'
export function requestLines(username, trip) {
	return { 
    type: REQUEST_LINES,
    isFetching: true
  }
}

export const RECEIVE_LINES = 'RECEIVE_LINES'
function receiveLines(username, tripid, json) {
  console.log(json)
  if (json.count > 0) {
    var lines = json.lines
  } else {
    var lines = null
  }
  const coords = lines[0].geometry.coordinates
  var minlat = coords.reduce( function(a,b) { return Math.min(a,b[1])},400)
  var minlon = coords.reduce( function(a,b) { return Math.min(a,b[0])},400)
  var maxlat = coords.reduce( function(a,b) { return Math.max(a,b[1])},-400)
  var maxlon = coords.reduce( function(a,b) { return Math.max(a,b[0])},-400)
  return {
    type: RECEIVE_LINES,
    username: username,
    tripid: tripid,
    bbox: [[maxlat, maxlon], [minlat, minlon]],
    lines: lines
  }
}

export const LINES_FAILURE = 'LINES_FAILURE'
export function linesFail() {
	return { 
    type: LINES_FAILURE,
    isFetching: false
  }
}

export function fetchLines(username, trip) {
  return {
    [CALL_API]: {
      endpoint: `http://localhost:8081/api/geo/lines/${username}/${trip}`,
      method: 'GET',
      types: [REQUEST_LINES, 
			{
        type: RECEIVE_LINES,
        payload: (action, state, res) => {
					return getJSON(res).then(
              (json) => receiveLines(username, trip, json)
          )
        }
      }, LINES_FAILURE]
    }
  }
}
