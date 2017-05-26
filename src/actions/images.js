import { CALL_API, getJSON } from 'redux-api-middleware'
var Config = require('Config')

export const REQUEST_IMAGES = 'REQUEST_IMAGES'
export function requestImages(username, trip) {
	return { 
    type: REQUEST_IMAGES,
    isFetching: true
  }
}

export const RECEIVE_IMAGES = 'RECEIVE_IMAGES'
function receiveImages(username, tripid, json) {
  if (json.total > 0) {
    var images = json.images
    for (var i = 0; i < images.length; i++) {
      images[i].src = `http://localhost:8081/images/${images[i].basepath}`
      images[i].thumbnail = `http://localhost:8081/images/${images[i].basepath}`
      images[i].thumbnailWidth = images[i].width || 16
      images[i].thumbnailHeight = images[i].height || 9
      delete images[i].basepath
      delete images[i].lat
      delete images[i].lon
      delete images[i].width
      delete images[i].height
    }
  } else {
    var images = null
  }
  console.log(json)
  return {
    type: RECEIVE_IMAGES,
    username: username,
    tripid: tripid,
    images: images
  }
}

export const IMAGES_FAILURE = 'IMAGES_FAILURE'
export function imagesFail() {
	return { 
    type: IMAGES_FAILURE,
    isFetching: false
  }
}

export function fetchImages(username, trip) {
  return {
    [CALL_API]: {
      endpoint: `http://localhost:8081/api/images/image/${username}/${trip}`,
      method: 'GET',
      types: [REQUEST_IMAGES, 
			{
        type: RECEIVE_IMAGES,
        payload: (action, state, res) => {
					return getJSON(res).then(
              (json) => receiveImages(username, trip, json)
          )
        }
      }, IMAGES_FAILURE]
    }
  }
}
