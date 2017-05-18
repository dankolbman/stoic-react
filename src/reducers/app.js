import { combineReducers } from 'redux'
import auth from './auth'
import trips from './trips'

const tripApp = combineReducers({
  auth,
  trips
})

export default tripApp
