import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import {
    BrowserRouter as Router,
    Route,
    RouteHandler,
    Link
} from 'react-router'

import Home from '../components/Home'
import Navbar from '../components/Navbar'
import Register from '../components/Register'
import Trip from '../components/Trip'
import NewTrip from '../components/NewTrip'
import User from '../components/User'


class App extends Component {
  constructor(props) {
    super(props)
  }

	render() {
    const { dispatch, username, isAuthenticated, errorMessage} = this.props
		return (
      <div>
        <Router>
          <Navbar
            isAuthenticated={isAuthenticated}
            errorMessage={errorMessage}
            username={username}
            dispatch={dispatch}
          />
          <Route path="register"
            render={props=><Register dispatch={store.dispatch} {...props} />}
          />
          <Route exact path="/user/:id" component={User}/>
          <Route path="/user/:id/new"
            render={props=><NewTrip dispatch={store.dispatch} {...props} />}
          />
<<<<<<< HEAD
        </Router>
      </div>
=======
					<Route exact path="/user/:id" component={User}/>
					<Route exact path="/user/:id/new" component={NewTrip}/>
        </div>
      </Router>
>>>>>>> fc0b61f3eb68c685a411b837fa89287e68fac468
		)
	}
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  console.log(state)
  const { app, routing } = state
	const { auth } = app
	const { username, isAuthenticated, errorMessage } = auth

	return {
    username,
		isAuthenticated,
		errorMessage
	}
}

export default connect(mapStateToProps)(App)
