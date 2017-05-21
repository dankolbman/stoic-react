import { NEW_TRIP_REQUEST, NEW_TRIP_SUCCESS, NEW_TRIP_FAILURE,
        REQUEST_TRIP, RECEIVE_TRIP, TRIP_FAILURE,
        CHANGE_TAB,
        UPLOAD_REQUEST, UPLOAD_SUCCESS, UPLOAD_FAILURE} from '../actions/trip'

const initialState = {
  isFetching: true,
  isUploading: false,
  currentTab: 'activity',
  trip: [],
  username: ''
}

function trip(state = initialState, action) {
  switch (action.type) {
    case REQUEST_TRIP:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVE_TRIP:
      return Object.assign({}, state, {
        trip: action.payload.trip,
        isFetching: false
      })
    case CHANGE_TAB:
      return Object.assign({}, state, {
        currentTab: action.tabname,
        isFetching: false
      })
    case UPLOAD_REQUEST:
      return Object.assign({}, state, {
        isUploading: true
      })
    case UPLOAD_SUCCESS:
      return Object.assign({}, state, {
        isUploading: false
      })
    case UPLOAD_FAILURE:
      return Object.assign({}, state, {
        isUploading: false
      })

    default:
      return state
  }
}

export default trip
