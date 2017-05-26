import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchTrip, changeTab } from '../actions/trip'
import TripMap from '../components/TripMap'
import NewContentNav from '../components/NewContentNav'
import TripNav from '../components/TripNav'
import ActivityTab from '../components/ActivityTab'
import UploadTab  from '../components/UploadTab'
import PhotoTab from '../components/PhotoTab'

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
    const { dispatch, currentTab, isFetching } = this.props
    const { title, description, start, finish } = this.props.trip
    const { username, tripid } = this.props.match.params
		return (
      <div>
        <div className='hero is-dark' style={{width: '100%'}}>
            <div className="container">
              <h1 className="title">{ title }</h1>
              <h2 className="subtitle">{start} to {finish}</h2>
            </div>
            <div className='hero-body has-text-centered is-paddingless' style={{width: '100%'}}>
              
              <TripMap username={username} tripid={tripid}/>
              <div className="content">
                <h2 className="subtitle">{description}</h2>
              </div>
            </div>
					<TripNav onTabClick={(tabname) => this.onTabClick(tabname)} />
        </div>
				<div className="section">
					<NewContentNav onTabClick={(tabname) => this.onTabClick(tabname)}/>

          {{
            'activity': (
              <ActivityTab username={username} tripid={tripid}/>
            ),
            'gps': (
              <UploadTab isActive={true} type={'gps'}/>
            ),
            'photo': (
              <UploadTab isActive={true} type={'photo'} />
            ),
            'photos': (
              <PhotoTab isActive={true} type={'photo'} />
            )
          }[currentTab]}
        </div>
      </div>
		)
	}

  onTabClick(tabname) {
    this.props.dispatch(changeTab(tabname))
  }
}

Trip.propTypes = {
  dispatch: PropTypes.func.isRequired,
	trip: PropTypes.object.isRequired,
	currentTab: PropTypes.string.isRequired
}

function mapStateToProps(state) {
	const { currentTab, isFetching } = state.trip
  const trip = isFetching ? {} : state.trip.trip

  return {
    trip,
    currentTab,
    isFetching
  }
}

export default connect(mapStateToProps)(Trip)
