import axios from 'axios'
var Config = require('Config')

export const REQUEST_POINTS = 'GET_POINTS'
export function requestPoints(username, trip) {
	return { type: REQUEST_POINTS,  username, trip }
}

export const RECEIVE_POINTS = 'RECEIVE_POINTS'
function receivePoints(username, trip, json) {
  return {
    type: RECEIVE_POINTS,
    username,
    trip,
    points: json,
    center: [json.geometry.coordinates.reduce(function(sum, a) {return sum + a [1]},0)/(json.geometry.coordinates.length||1),
             json.geometry.coordinates.reduce(function(sum, a) {return sum + a[0]},0)/(json.geometry.coordinates.length||1)]
  }
}

export function fetchPoints(username, trip) {

  return function (dispatch) {

    dispatch(requestPoints(username, trip))
    return axios.get(Config.apiUrl + `/lines/${username}/${trip}?size=100000`)
                .then(response => {
                  dispatch(receivePoints(username, trip, response.data.lines[0]))
                })
                .catch((error) => {
                  console.log(error);
                })
  }
}

