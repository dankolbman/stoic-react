import React, { Component, PropTypes } from 'react'

export default class Trip extends Component {

  render() {
    const { onTripClick, isAuthenticated, trip } = this.props

    return (
      <div>
          <a onClick={onTripClick} className="button">
            Get Trip
          </a>

          { trip &&
            <div>
              <blocktrip>{trip}</blocktrip>
            </div>
          }

          { trip && isAuthenticated &&
            <div>
              <span className="label label-danger">Secret Trip</span>
              <hr/>
              <blocktrip>
                {trip}
              </blocktrip>
            </div>
          }
      </div>
    )
  }
}

Trip.propTypes = {
  onTripClick: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  trip: PropTypes.string,
}
