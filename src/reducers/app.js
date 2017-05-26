import { combineReducers } from 'redux'
import auth from './auth'
import trips from './trips'
import trip from './trip'
import points from './points'
import lines from './lines'
import images from './images'

const tripApp = combineReducers({
  auth,
  trips,
  trip,
  points,
  lines,
  images
})

export default tripApp
