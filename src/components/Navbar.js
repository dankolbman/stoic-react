import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Login from '../components/Login.js'
import Logout from '../components/Logout.js'


class Navbar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { dispatch } = this.props
		const isAuthenticated = true

    return (
		<div>
		<nav className="nav has-shadow">
			<div className="container">
        <div className="nav-left">
          <Link to="/" className="nav-item">
            <img src="./static/stoic_black.png" alt="Stoic logo" />
          </Link>
        </div>
        <div className="nav-right">
          {!isAuthenticated &&
            <div className="nav-item">
              <Link to="/register" className="button is-info is-small">Sign-Up</Link>
            </div>
          }
          {!isAuthenticated &&
            <div className="nav-item">
            <Login
              onLoginClick={ creds => dispatch(loginUser(creds)) }
            />
            </div>
          }
          {isAuthenticated &&
            <div className="nav-item">
							<div className="field is-horizontal">
								<div className="field">
									<div className="control">
										<Link to='/user/Dan' className="">
												Dan
										</Link>
									</div>
								</div>
							</div>
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
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
  }
}

export default connect(mapStateToProps)(Navbar)
