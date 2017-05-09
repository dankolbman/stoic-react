import React, { Component, PropTypes } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Login from './Login'
import Logout from './Logout'
import Register from './Register'
import { loginUser, logoutUser, registerUser } from '../actions'

export default class Navbar extends Component {

  render() {
    const { dispatch, isAuthenticated, errorMessage } = this.props

    return (
		<div>
		<nav className="nav has-shadow">
			<div className="container">
        <div className="nav-left">
          <Link to="/" className="nav-item">
            <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma logo" />
          </Link>
        </div>
        <div className="nav-right">
          {!isAuthenticated &&
            <div className="nav-item">
              <Link to="/register" className="button is-info">Sign-Up</Link>
            </div>
          }
          {!isAuthenticated &&
            <div className="nav-item">
            <Login
              errorMessage={errorMessage}
              onLoginClick={ creds => dispatch(loginUser(creds)) }
            />
            </div>
          }
          {isAuthenticated &&
            <div className="nav-item">
            <Logout onLogoutClick={() => dispatch(logoutUser())} />
            </div>
          }
        </div>
			</div>
    </nav>
    </div>
    )
  }
}

Navbar.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string
}
