import { combineReducers } from 'redux'
import auth from './auth'
import trips from './trips'
import trip from './trip'
import points from './points'
import lines from './lines'

const tripApp = combineReducers({
  auth,
  trips,
  trip,
  points,
  lines
})

export default tripApp
