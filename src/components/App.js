import axios from 'axios'
var Config = require('Config')

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Map, TileLayer, GeoJSON } from 'react-leaflet'
import Trip from '../components/Trip'
import { fetchPoints } from '../actions'

const position = [51.0, -0.09]

class App extends Component {
  constructor(props) {
    super(props)
  }

	componentWillMount() {
    const { dispatch, trip, isFetching } = this.props
    dispatch(fetchPoints(trip))
  }

	render() {
    const { points, isFetching } = this.props
		if (isFetching) return (<h1>Hello</h1>)
		return (
			<div>
				<h1>Hello</h1>
				<Map
					style={{height: "100%", width: "100%", cursor: "default"}}
					center={position}
					zoom={1}
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
				}
			</div>
		)
	}
}

App.propTypes = {
	trip: PropTypes.string.isRequired,
  points: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
	const { trip = 'chi-phl', points, isFetching } = state

  return {
		trip,
    points,
    isFetching
  }
}

export default connect(mapStateToProps)(App)
