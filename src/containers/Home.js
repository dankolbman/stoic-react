import React, { Component, PropTypes } from 'react'
import MapView from '../components/Map'

class Home extends Component {
  render() {
    const { dispatch, trip, isAuthenticated, errorMessage } = this.props
    return (
      <div className="column">
        <h1 className="title">Home</h1>
        <MapView
          isAuthenticated={isAuthenticated}
          errorMessage={errorMessage}
          dispatch={dispatch}
        />
      </div>
    )
  }
}
export default Home
