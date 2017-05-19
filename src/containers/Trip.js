import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchTrip } from '../actions/trip'
import TripMap from '../components/TripMap'
import TripNav from '../components/TripNav'

class Trip extends Component {
  constructor(props) {
    super(props)
  }

	componentWillMount() {
    const { dispatch, isFetching } = this.props
    const { username, tripid } = this.props.match.params
    dispatch(fetchTrip(username, tripid))
  }

	render() {
    const { title, description, start, finish } = this.props.trip
    const { username, tripid } = this.props.match.params
		return (
      <div>
        <div className='hero is-info' style={{width: '100%'}}>
          <div className='container'>
            <div className='hero-body has-text-centered' style={{width: '100%'}}>
              <TripMap username={username} tripid={tripid}/>
              <h1 className="title">{ title }</h1>
              <h2 className="subtitle">{description}</h2>
              <h3>{start} to {finish}</h3>
            </div>
						<TripNav />
          </div>
        </div>
      </div>
		)
	}
}

Trip.propTypes = {
	trip: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  console.log(state)
	const { isFetching } = state.trip
  const trip = isFetching ? {} : state.trip.trip

  return {
    trip,
    isFetching
  }
}

export default connect(mapStateToProps)(Trip)
