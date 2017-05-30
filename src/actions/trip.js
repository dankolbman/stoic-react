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
      endpoint: `${Config.apiUrl}trips/trips/${username}`,
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(trip),
      types: [NEW_TRIP_REQUEST, 
			{
        type: NEW_TRIP_SUCCESS,
        payload: (action, state, res) => {
					return getJSON(res).then(
          )
        }
      }, NEW_TRIP_FAILURE]
    }
  }
}

export const REQUEST_TRIP = 'REQUEST_TRIP'
export function fetchTrip(username, trip) {
  return {
    [CALL_API]: {
      endpoint: `${Config.apiUrl}/trips/trips/${username}/${trip}`,
      method: 'GET',
      types: [REQUEST_TRIP,
			{
        type: RECEIVE_TRIP,
        payload: (action, state, res) => {
					return getJSON(res).then(
              (json) => receiveTrip(username, trip, json)
          )
        }
      }, TRIP_FAILURE]
    }
  }
}

export const RECEIVE_TRIP = 'RECEIVE_TRIP'
export function receiveTrip(username, trip, json) {
  return {
    type: RECEIVE_TRIP,
    trip: json.trip
  }
}

export const TRIP_FAILURE = 'TRIP_FAILURE'

export const CHANGE_TAB  = 'CHANGE_TAB'
export function changeTab(tabname) {
  return {
    type: CHANGE_TAB,
    tabname: tabname,
  }
}

export const UPLOAD_REQUEST = 'UPLOAD_REQUEST'
export const UPLOAD_SUCCESS= 'UPLOAD_SUCCESS'
export const UPLOAD_FAILURE = 'UPLOAD_FAILURE'
export function uploadFile(username, trip, files) {
  console.log(files)
  const formData = new FormData()
  formData.append('files', files[0])

  const endpoint = `${Config.apiUrl}geo/points/${username}/${trip}/csv`
	var headers = new Headers();
	headers.append('Content-Type', 'multipart/form-data, boundary=--abc--abc--')
	fetch(endpoint, {
					method: 'POST',
					header: headers,
					body: formData
			}).then(
					(response) => {
							console.log(response);
					}
			).catch( () => {} );
}
