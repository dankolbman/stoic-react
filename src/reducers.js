import { REQUEST_POINTS, RECEIVE_POINTS } from './actions'
const initialState = {
  trip: 'chi-phl',
  points: {},
  isFetching: true
}

function tripApp(state = initialState, action) {
  switch (action.type) {
    case REQUEST_POINTS:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVE_POINTS:
      return Object.assign({}, state, {
        isFetching: false,
        trip: action.trip,
        points: action.points
      })
    default:
      return state
  }
}

export default tripApp
