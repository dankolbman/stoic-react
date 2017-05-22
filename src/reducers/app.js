import { combineReducers } from 'redux'
import auth from './auth'
import trips from './trips'
import trip from './trip'
import points from './points'

const tripApp = combineReducers({
  auth,
  trips,
  trip,
  points
})

export default tripApp
