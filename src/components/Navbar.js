import React, { Component, PropTypes } from 'react'
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
			  <a className="nav-item">
				<img src="http://bulma.io/images/bulma-logo.png" alt="Bulma logo" />
			  </a>
			</div>
			<div className="nav-right">
				<a className="nav-item is-tab">Log In</a>
			</div>
			</div>
        </nav>
		<section className="container">
			<section className="hero">
				<div className="hero-body">
					<div className="container">
					  <h1 className="title">
						Login
					  </h1>
					</div>
				</div>
			</section>
			{!isAuthenticated &&
			  <Register
				errorMessage={errorMessage}
				onRegisterClick={ creds => dispatch(registerUser(creds)) }
			  />
			}

			{!isAuthenticated &&
			  <Login
				errorMessage={errorMessage}
				onLoginClick={ creds => dispatch(loginUser(creds)) }
			  />
			}

			{isAuthenticated &&
			  <Logout onLogoutClick={() => dispatch(logoutUser())} />
			}
		</section>
		</div>
    )
  }

}

Navbar.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string
}
