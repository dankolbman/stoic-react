import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Map, TileLayer, ZoomControl, GeoJSON, CircleMarker } from 'react-leaflet'
import { fetchLines } from '../actions/lines'
import { fetchTrip } from '../actions/trip'
import { fetchImages } from '../actions/images'

class TripMap extends Component {
  constructor(props) {
    super(props)
  }

	componentWillMount() {
    const { dispatch, isFetching } = this.props
    const { username, tripid } = this.props
    if (!this.props.lines.length || (
          this.props.lines.username != username
          && this.props.lines.tripid == tripid)) {
      dispatch(fetchLines(username, tripid))
    }
    if (!this.props.trip.trip || (
          this.props.trip.trip.username != username
          && this.props.trip.trip.id == tripid)) {
      dispatch(fetchTrip(username, tripid))
    }
    dispatch(fetchImages(username, tripid))
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

    var markers = [];
    for (var i = 0; i < this.props.images.length; i++) {
        if (this.props.images[i].lat) {
        markers.push(
            <CircleMarker key={i}
              center={[this.props.images[i].lat, this.props.images[i].lon]}
              color={'#FF0000'}
              radius={2}
            />)
        }
    }
		return (
      <div style={{color: "#222"}}>
				<Map
					style={{height: "350px", width: "100%", cursor: "default"}}
          bounds={this.props.bbox}
					dragging={true}
					boxZoom={false}
					zoomControl={false}
					scrollWheelZoom={false}
					touchZoom={false}
					keyboard={false}
					doubleClickZoom={false}>
					<GeoJSON
						data={this.props.lines}
					/>
          {markers}
					<TileLayer
						url="https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZGFuazUyOCIsImEiOiJzOVp0TzJnIn0.1c8obLmcPHN4LosoNan8DQ"
						attribution="<attribution>" />
          <ZoomControl
            position={'bottomleft'}
          />
				</Map>
      </div>
		)
	}
}

TripMap.propTypes = {
	username: PropTypes.string.isRequired,
	tripid: PropTypes.string.isRequired,
	trip: PropTypes.object.isRequired,
	lines: PropTypes.array.isRequired,
	images: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  const isFetching = state.trip.isFetching || state.lines.isFetching
  const trip = isFetching ? {} : state.trip.trip
  const { lines, bbox } = state.lines
  const { images } = state.images

  return {
    lines,
    images,
    bbox,
    trip,
    isFetching
  }
}

export default connect(mapStateToProps)(TripMap)
