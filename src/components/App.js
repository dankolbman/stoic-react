import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import Home from '../components/Home'
import Navbar from '../components/Navbar'
import Register from '../components/Register'
import Trips from '../components/Trips'
import NewTrip from '../components/NewTrip'
import Profile from '../components/Profile'


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
					<Route path="/trip/:username/:trip" component={Trips}/>
        </div>
		)
	}
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  console.log(state)
	const { auth } = state
	const { username, isAuthenticated, errorMessage } = auth

	return {
    username,
		isAuthenticated,
		errorMessage
	}
}

export default connect(mapStateToProps)(App)
