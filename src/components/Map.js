import React, { Component, PropTypes } from 'react'
import { Map, TileLayer, GeoJSON } from 'react-leaflet'
import Trip from '../components/Trip'
import { fetchPoints, fetchTrip } from '../actions'

const position = [51.0, -0.09]

export class MapView extends React.Component {
  render() {
    const { dispatch, errorMessage } = this.props
    return (
      <div>
        <Trip isAuthenticated={false} trip={'trip1'} dispatch={dispatch} />
        <Map
          style={{height: "100%", width: "100%", cursor: "default"}}
          center={position}
          zoom={10}
					dragging={false}
					boxZoom={false}
					zoomControl={false}
					scrollWheelZoom={false}
					touchZoom={false}
					keyboard={false}
					doubleClickZoom={false}>
          <TileLayer
            url="https://api.mapbox.com/styles/v1/mapbox/traffic-day-v2/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZGFuazUyOCIsImEiOiJzOVp0TzJnIn0.1c8obLmcPHN4LosoNan8DQ"
            attribution="<attribution>" />
        </Map>
      </div>
    )
  }
}

StoicApp.propTypes = {
  dispatch: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
}

export default MapView
