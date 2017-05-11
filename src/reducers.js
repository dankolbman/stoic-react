import { REQUEST_POINTS, RECEIVE_POINTS } from './actions'
const initialState = {
  center: [0.0, 0.0],
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
        points: action.points,
        center: action.center,
        isFetching: false
      })
    default:
      return state
  }
}

export default tripApp
