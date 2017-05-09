import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { loginUser, fetchTrip} from '../actions'
import Login from '../components/Login'
import Register from '../components/Register'
import Navbar from '../components/Navbar'
import Trip from '../components/Trip'
import Home from '../containers/Home'

class StoicApp extends Component {
	render() {
		const { dispatch, trip, isAuthenticated, errorMessage } = this.props
		return (
			<Router>
				<div>
					<Navbar
						isAuthenticated={isAuthenticated}
						errorMessage={errorMessage}
						dispatch={dispatch}
					/>
					<section className="section">
						<div className="container">
							<div className="columns">
								<Route exact path="/" component={Home}/>
								<Route path="/register" component={Register}/>
							</div>
						</div>
					</section>
				</div>
			</Router>
		)
	}
}

StoicApp.propTypes = {
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

export default connect(mapStateToProps)(StoicApp)
