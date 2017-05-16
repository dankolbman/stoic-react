import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Login from '../components/Login.js'
import Logout from '../components/Logout.js'
import { loginUser, logoutUser } from '../actions/auth'


class Navbar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { dispatch, username, isAuthenticated, errorMessage } = this.props

    return (
		<div>
		<nav className="nav has-shadow">
			<div className="container">
        <div className="nav-left">
          <Link to="/" className="nav-item">
            <img src="./static/stoic_black.png" alt="Stoic logo" />
          </Link>
          {isAuthenticated &&
					<Link to={"/user/"+username+"/new"} className="nav-item is-tab">
						Embark!
					</Link>
					}
        </div>
        <div className="nav-right nav-menu">
          {!isAuthenticated &&
            <div className="nav-item">
              <Link to="/register" className="button is-info is-small">Sign-Up</Link>
            </div>
          }
          {!isAuthenticated &&
            <div className="nav-item">
            <Login
              onLoginClick={ creds => dispatch(loginUser(creds)) }
							errorMessage={errorMessage}
            />
            </div>
          }
          {(isAuthenticated && username) &&
					<Link to={"/user/"+username} className="nav-item is-tab">
						{username}
						<figure className="image is-24x24" style={{marginLeft: "8px"}}>
							<img src="http://bulma.io/images/jgthms.png"/>
						</figure>
					</Link>
					}
          {isAuthenticated &&
						<Logout onLogoutClick={() => dispatch(logoutUser())} />
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
  errorMessage: PropTypes.string,
  username: PropTypes.string
}

function mapStateToProps(state) {
  return {
  }
}

export default connect(mapStateToProps)(Navbar)
