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
    console.log(images[0])
    for (var i = 0; i < images.length; i++) {
      images[i].src = `${Config.url}/${images[i].paths['1024x640']}`
      images[i].thumbnail = `${Config.url}/${images[i].paths['180h']}`
      images[i].thumbnailWidth = images[i].width
      images[i].thumbnailHeight = images[i].height
      images[i].tags = [{'title': 'comment', 'value': images[i].created_at}]
      delete images[i].basepath
      delete images[i].path
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
      endpoint: `${Config.apiUrl}/images/image/${username}/${trip}?size=10`,
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
