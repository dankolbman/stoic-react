import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import {
    BrowserRouter as Router,
    Route,
    RouteHandler,
    Link
} from 'react-router-dom'
import {browserHistory, hashHistory} from 'react-router'; 
import Home from '../components/Home'
import Navbar from '../components/Navbar'
import Register from '../components/Register'
import Trip from '../components/Trip'
import User from '../components/User'


class App extends Component {
  constructor(props) {
    super(props)
  }

	render() {
    const { dispatch, username, isAuthenticated, errorMessage} = this.props
		return (
      <Router history={hashHistory}>
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
					<Route exact path="/user/:id" component={User}/>
        </div>
      </Router>
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
