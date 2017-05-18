import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Home from '../containers/Home'
import Register from '../containers/Register'
import Trip from '../containers/Trip'
import NewTrip from '../containers/NewTrip'
import Profile from '../containers/Profile'


class App extends Component {
  constructor(props) {
    super(props)
  }

	render() {
    const { dispatch, username, isAuthenticated, errorMessage} = this.props
		return (
        <div>
          <Navbar
						isAuthenticated={isAuthenticated}
						errorMessage={errorMessage}
            username={username}
						dispatch={dispatch}
          />
          <Route exact path="/" component={Home}/>
          <Route path="/register"
            render={props=><Register dispatch={dispatch} {...props} />}
          />
          <Route exact path="/user/:id" component={Profile}/>
          <Route path="/user/:id/new" component={NewTrip}/>
          <Route path="/trip/:username/:trip" component={Trip}/>
        </div>
		)
	}
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
	const { auth } = state
	const { username, isAuthenticated, errorMessage } = auth

	return {
    username,
		isAuthenticated,
		errorMessage
	}
}

export default connect(mapStateToProps)(App)
