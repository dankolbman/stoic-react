import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Map, TileLayer, GeoJSON } from 'react-leaflet'
import { fetchPoints } from '../actions/points'
import { fetchTrip } from '../actions/trips'

class Trip extends Component {
  constructor(props) {
    super(props)
  }

	componentWillMount() {
    const { dispatch, isFetching } = this.props
    const { username, trip } = this.props.match.params
    dispatch(fetchPoints(username, trip))
    dispatch(fetchTrip(username, trip))
  }

	render() {
    const { username, trip } = this.props.match.params
    const { center, points, isFetching } = this.props
		if (isFetching) return (
      <div className='hero is-info' style={{width: '100%', height: '300px'}}>
        <div className='container'>
          <div className='button is-infois-loading' style={{width: '100%', height: '270px'}}></div>
          <h3>Loading the trip map, hold tight...</h3>
        </div>
      </div>
    )
    if (this.props.points) return (
      <div className='hero is-info' style={{width: '100%', height: '150px'}}>
        <div className='container'>
          <div className='hero-body' style={{width: '100%', height: '150px'}}>
            <h1 className='title'>{trip}</h1>
            <h2 className='subtitle'>{username}'s journey from {trip} to {trip}</h2>
          </div>
        </div>
      </div>
    )

		return (
      <div>
				<Map
					style={{height: "300px", width: "100%", cursor: "default"}}
					center={this.props.center}
					zoom={6}
					dragging={true}
					boxZoom={false}
					zoomControl={true}
					scrollWheelZoom={false}
					touchZoom={false}
					keyboard={false}
					doubleClickZoom={false}>
					<GeoJSON
						data={this.props.points}
					/>
					<TileLayer
						url="https://api.mapbox.com/styles/v1/mapbox/traffic-day-v2/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZGFuazUyOCIsImEiOiJzOVp0TzJnIn0.1c8obLmcPHN4LosoNan8DQ"
						attribution="<attribution>" />
				</Map>
        <div className="container">
          <div className="columns">
            <div className="column">
              <div className="title">{this.props.username}'s trip</div>

            </div>
          </div>
        </div>
      </div>
		)
	}
}

Trip.propTypes = {
	username: PropTypes.string.isRequired,
	trip: PropTypes.string.isRequired,
  center: PropTypes.array.isRequired,
  points: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  const { auth, trip } = state
	const { center, points, isFetching } = trip
  const { username, isAuthenticated } = auth

  return {
    username,
    center,
    points,
    isFetching
  }
}

export default connect(mapStateToProps)(Trip)
