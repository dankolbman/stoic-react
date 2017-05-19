import { combineReducers } from 'redux'
import auth from './auth'
import trips from './trips'
import trip from './trip'

const tripApp = combineReducers({
  auth,
  trips,
  trip
})

export default tripApp
