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
    return axios.get(Config.apiUrl + '/points/Dan/trip1?size=1000')
              .then(function (response) {
                console.log(response);
								dispatch(receivePoints(trip, response))
              })
              .catch(function (error) {
                console.log(error);
              });

  }
}

