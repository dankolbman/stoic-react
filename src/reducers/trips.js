import { REQUEST_TRIPS, RECEIVE_TRIPS, TRIPS_FAILURE } from '../actions/trips'

const initialState = {
  isFetching: true,
  user_trips: [],
  username: ''
}

function trips(state = initialState, action) {
  switch (action.type) {
    case REQUEST_TRIPS:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVE_TRIPS:
      return Object.assign({}, state, {
        user_trips: action.payload.user_trips,
        isFetching: false
      })
    default:
      return state
  }
}

export default trips
