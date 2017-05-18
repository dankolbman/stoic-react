import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchTrip } from '../actions/trips'
import TripMap from '../components/TripMap'

class Trip extends Component {
  constructor(props) {
    super(props)
  }

	componentWillMount() {
    const { dispatch, isFetching } = this.props
    const { username, trip } = this.props.match.params
  }

	render() {
    const { username, trip } = this.props.match.params
		return (
      <div>
        <TripMap username={username} trip={trip}/>
      </div>
		)
	}
}

Trip.propTypes = {
	username: PropTypes.string.isRequired,
	trip: PropTypes.string.isRequired
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
