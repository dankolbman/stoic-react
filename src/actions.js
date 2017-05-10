import axios from 'axios'
var Config = require('Config')

export const REQUEST_POINTS = 'GET_POINTS'
export function requestPoints(trip) {
	return { type: REQUEST_POINTS,  trip }
}

export const RECEIVE_POINTS = 'RECEIVE_POINTS'
function receivePoints(trip, json) {
  return {
    type: RECEIVE_POINTS,
    trip,
    points: json
  }
}

export function fetchPoints(trip) {

  return function (dispatch) {

    dispatch(requestPoints(trip))
    return axios.get(Config.apiUrl + '/lines/Dan/chi-phl?size=1000')
                .then(response => {
                  dispatch(receivePoints(trip, response.data.lines[0]))
                })
                .catch((error) => {
                  console.log(error);
                })
  }
}

