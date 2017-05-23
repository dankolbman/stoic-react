import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Map, TileLayer, GeoJSON } from 'react-leaflet'
import { fetchLines } from '../actions/lines'
import { fetchTrip } from '../actions/trip'

class TripMap extends Component {
  constructor(props) {
    super(props)
  }

	componentWillMount() {
    const { dispatch, isFetching } = this.props
    const { username, tripid } = this.props
    dispatch(fetchLines(username, tripid))
    dispatch(fetchTrip(username, tripid))
  }

	render() {
    const { isFetching } = this.props
		if (isFetching) return (
      <div className='button is-info is-loading' style={{width: '100%', height: '270px'}}>
      <h3>Loading the trip map, hold tight...</h3></div>
    )
    if (this.props.points) return (
      <small>Nothing to display yet!</small>
    )

		return (
      <div>
				<Map
					style={{height: "300px", width: "100%", cursor: "default"}}
          bounds={this.props.bbox}
					dragging={true}
					boxZoom={false}
					zoomControl={true}
					scrollWheelZoom={false}
					touchZoom={false}
					keyboard={false}
					doubleClickZoom={false}>
					<GeoJSON
						data={this.props.lines}
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

TripMap.propTypes = {
	username: PropTypes.string.isRequired,
	tripid: PropTypes.string.isRequired,
	trip: PropTypes.object.isRequired,
	lines: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  const isFetching = state.trip.isFetching || state.lines.isFetching
  const trip = isFetching ? {} : state.trip.trip
  const { lines, bbox } = state.lines

  return {
    lines,
    bbox,
    trip,
    isFetching
  }
}

export default connect(mapStateToProps)(TripMap)
