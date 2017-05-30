import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import ServiceStatus from '../components/ServiceStatus'

class Footer extends Component {
  constructor(props) {
    super(props)
  }

	render() {
		return (
			<footer className="footer">
				<div className="container">
					<div className="columns">
						<div className="column content">
							<p className="title is-6">Service Status</p>
							<ServiceStatus service={'users'} />
							<ServiceStatus service={'blog'} />
							<ServiceStatus service={'geo'} />
							<ServiceStatus service={'trips'} />
							<ServiceStatus service={'images'} />
						</div>
						<div className="column has-text-right">
							<p className="title is-6">Created by Dan Kolbman</p>
							<p className="subtitle is-6">Stoic 2017</p>
						</div>
					</div>
				</div>
			</footer>
		)
	}
}

Footer.propTypes = {
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

export default connect(mapStateToProps)(Footer)
