import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchTrip } from '../actions/trip'
import TripMap from '../components/TripMap'
import NewContentNav from '../components/NewContentNav'
import TripNav from '../components/TripNav'
import DriveModal  from '../components/DriveModal'

class ActivityTab extends Component {
  constructor(props) {
    super(props)
  }

	render() {
    const { username, tripid } = this.props
		return (
      <div>
        <div className="tile is-ancestor">
					<div className="tile is-parent">
						<div className="tile is-child card">
							<div className="card-image">
								<figure className="image is-4by3">
									<img src="http://bulma.io/images/placeholders/1280x960.png"/>
								</figure>
							</div>
							<div className="card-content">
								<div className="content">
									Some picture lorem ipsum dolor sit amet
									<br />
									<small>11:09 PM - 1 Jan 2016</small>
								</div>
							</div>
						</div>
					</div>

					<div className="tile is-parent">
						<div className="tile is-child card">
							<div className="card-content">
								<div className="content">
									Some blurb lorem ipsum dolor sit amet
									<br />
									<small>11:09 PM - 1 Jan 2016</small>
								</div>
							</div>
						</div>
					</div>

					<div className="tile is-parent">
						<div className="tile is-child">
							<div className="card">
								<div className="card-image">
									<figure className="image is-4by3">
										<img src="http://bulma.io/images/placeholders/1280x960.png"/>
									</figure>
								</div>
								<div className="card-content">
									<div className="content">
										Some picture lorem ipsum dolor sit amet
										<br />
										<small>11:09 PM - 1 Jan 2016</small>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
      </div>
		)
	}
}

ActivityTab.propTypes = {
}

function mapStateToProps(state) {
  return {
  }
}

export default connect(mapStateToProps)(ActivityTab)
