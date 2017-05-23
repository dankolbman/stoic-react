import { REQUEST_LINES, RECEIVE_LINES, LINES_FAILURE } from '../actions/lines'

const initialState = {
  isFetching: true,
  lines: [],
  username: '',
  tripid: ''
}

function lines(state = initialState, action) {
  switch (action.type) {
    case REQUEST_LINES:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVE_LINES:
      console.log(action)
      return Object.assign({}, state, {
        isFetching: false,
        lines: action.payload.lines,
        username: action.payload.username,
        bbox: action.payload.bbox,
        tripid: action.payload.tripid
      })
    case LINES_FAILURE:
      return Object.assign({}, state, {
        isFetching: false
      })
    default:
      return state
  }
}

export default lines
