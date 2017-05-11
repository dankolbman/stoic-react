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
		return (
      <Router history={hashHistory}>
        <div>
          <Navbar />
					<Route exact path="/" component={Home}/>
					<Route path="/register" component={Register}/>
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
  return {
  }
}

export default connect(mapStateToProps)(App)
