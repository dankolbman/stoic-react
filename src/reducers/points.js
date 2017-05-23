import { REQUEST_POINTS, RECEIVE_POINTS, POINTS_FAILURE } from '../actions/points'

const initialState = {
  isFetching: true,
  points: [],
  username: '',
  tripid: ''
}

function points(state = initialState, action) {
  switch (action.type) {
    case REQUEST_POINTS:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVE_POINTS:
      console.log(action)
      return Object.assign({}, state, {
        isFetching: false,
        points: action.payload.points,
        username: action.payload.username,
        center: action.payload.center,
        tripid: action.payload.tripid
      })
    case POINTS_FAILURE:
      return Object.assign({}, state, {
        isFetching: false
      })

    default:
      return state
  }
}

export default points
