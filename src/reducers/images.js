import { REQUEST_IMAGES, RECEIVE_IMAGES, IMAGES_FAILURE } from '../actions/images'

const initialState = {
  isFetching: true,
  images: [],
  username: '',
  tripid: ''
}

function images(state = initialState, action) {
  switch (action.type) {
    case REQUEST_IMAGES:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVE_IMAGES:
      return Object.assign({}, state, {
        isFetching: false,
        images: action.payload.images,
        username: action.payload.username,
        tripid: action.payload.tripid
      })
    case IMAGES_FAILURE:
      return Object.assign({}, state, {
        isFetching: false
      })
    default:
      return state
  }
}

export default images
