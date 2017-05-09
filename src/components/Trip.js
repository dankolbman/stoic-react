import React, { Component, PropTypes } from 'react'

export default class Trip extends Component {

  render() {
    const { dispatch, isAuthenticated, errorMessage } = this.props
    return (
      <div>
          <a type="button" onClick={(event) => this.handleClick(event)} className="button is-primary is-small">
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

  handleClick(event) {
    this.props.onTripClick()
  }
}

Trip.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string
}
