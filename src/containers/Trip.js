import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchTrip } from '../actions/trip'
import TripMap from '../components/TripMap'
import NewContentNav from '../components/NewContentNav'
import TripNav from '../components/TripNav'

class Trip extends Component {
  constructor(props) {
    super(props)
  }

	componentWillMount() {
    const { dispatch, isFetching } = this.props
    const { username, tripid } = this.props.match.params
    dispatch(fetchTrip(username, tripid))
  }

	render() {
    const { title, description, start, finish } = this.props.trip
    const { username, tripid } = this.props.match.params
		return (
      <div>
        <div className='hero is-info' style={{width: '100%'}}>
          <div className='container'>
            <div className='hero-body has-text-centered' style={{width: '100%'}}>
              <TripMap username={username} tripid={tripid}/>
              <h1 className="title">{ title }</h1>
              <h2 className="subtitle">{description}</h2>
              <h3>{start} to {finish}</h3>
            </div>
          </div>
					<TripNav />
        </div>
				<div className="section">
					<NewContentNav />

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

      </div>
		)
	}
}

Trip.propTypes = {
	trip: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  console.log(state)
	const { isFetching } = state.trip
  const trip = isFetching ? {} : state.trip.trip

  return {
    trip,
    isFetching
  }
}

export default connect(mapStateToProps)(Trip)
