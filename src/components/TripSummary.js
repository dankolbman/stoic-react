import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class TripSummary extends Component {
  constructor(props) {
    super(props)
  }

	render() {
		const { username, id, title, start, finish, description  } = this.props
		const trip_url = `/user/${username}/${id}`
		return (
      <div className="tile is-parent">
				<div className="card is-info" style={{width: "100%"}}>
					<header className="card-header">
						<Link to={trip_url} className="card-header-title">
							{ title }
						</Link>
						<a className="card-header-icon">
							<span className="icon">
								<i className="fa fa-pencil"></i>
							</span>
						</a>
					</header>
					<div className="card-image">
						<figure className="image is-4by3">
							<img src="http://bulma.io/images/placeholders/1280x960.png" alt="Image"/>
						</figure>
					</div>
					<div className="card-content">
						<div className="media">
							<div className="media-content">
								<p className="subtitle is-6">{ start} to { finish }</p>
							</div>
						</div>

						<div className="content">
							{ description }
							<br/>
							<small>11:09 PM - 1 Jan 2016</small>
						</div>
					</div>
				</div>
      </div>
		)
	}
}

TripSummary.propTypes = {
	username: PropTypes.string.isRequired,
	id: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	start: PropTypes.string.isRequired,
	finish: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired

}

function mapStateToProps(state) {

  return {
  }
}

export default connect(mapStateToProps)(TripSummary)
