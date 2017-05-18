import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchTrips } from '../actions/trips'
import TripSummary from '../components/TripSummary'

class Trips extends Component {
  constructor(props) {
    super(props)
  }

	componentWillMount() {
    const { dispatch, isFetching } = this.props
    const { username } = this.props
    dispatch(fetchTrips(username))
  }

	render() {
    const { username } = this.props
    const { user_trips, isFetching } = this.props
		if (isFetching) return (
      <div className='hero is-info' style={{width: '100%', height: '300px'}}>
        <div className='container'>
          <div className='button is-info is-loading' style={{width: '100%', height: '270px'}}></div>
          <h3>Loading user's trips...</h3>
        </div>
      </div>
    )

		return (
      <div>
        {user_trips.map(function(trip, i){
          return <TripSummary title={trip.title} key={i}/>
        })}
      </div>
		)
	}
}

Trips.propTypes = {
	username: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  console.log('Trips state')
  console.log(state)

  const { auth, trips } = state
	const { user_trips, isFetching } = trips
  return {
    user_trips,
    isFetching
  }
}

export default connect(mapStateToProps)(Trips)
