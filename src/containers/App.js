import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { loginUser, fetchTrip} from '../actions'
import Login from '../components/Login'
import Navbar from '../components/Navbar'
import Trip from '../components/Trip'

class App extends Component {
  render() {
    const { dispatch, trip, isAuthenticated, errorMessage } = this.props
    return (
      <div>
        <Navbar
          isAuthenticated={isAuthenticated}
          errorMessage={errorMessage}
          dispatch={dispatch}
        />
        <div className='container'>
          <Trip
            onTripClick={trip => dispatch(fetchTrip(trip))}
            isAuthenticated={isAuthenticated}
            trip={trip}
          />
        </div>
      </div>
    )
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  trip: PropTypes.string,
  isAuthenticated: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string,
}

// These props come from the application's
// state when it is started
function mapStateToProps(state) {

  const { trip, auth } = state
  const { isAuthenticated, errorMessage } = auth

  return {
    trip,
    isAuthenticated,
    errorMessage
  }
}

export default connect(mapStateToProps)(App)
