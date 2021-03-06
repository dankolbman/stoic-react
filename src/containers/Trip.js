import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchTrip, changeTab } from '../actions/trip'
import TripMap from '../components/TripMap'
import NewContentNav from '../components/NewContentNav'
import TripNav from '../components/TripNav'
import ActivityTab from '../components/ActivityTab'
import GPSModal from '../components/GPSModal'
import PhotoModal from '../components/PhotoModal'
import BlurbModal from '../components/BlurbModal'
import PhotoTab from '../components/PhotoTab'
import Rodal from 'rodal'

import 'rodal/lib/rodal.css'

class Trip extends Component {
  constructor(props) {
    super(props)
    this.state = { visible: false, currentTab: 'photo' }
  }

  show(tabname) {
      this.setState({ visible: true, currentTab: tabname })
  }

  hide() {
      this.setState({ visible: false })
  }

	componentWillMount() {
    const { dispatch, isFetching } = this.props
    const { username, tripid } = this.props.match.params
    dispatch(fetchTrip(username, tripid))
  }

	render() {
    const { auth, dispatch, currentTab, isFetching } = this.props
    const { title, description, start, finish } = this.props.trip
    const { username, tripid } = this.props.match.params
		return (
         <div>
         {auth.username == username &&
		   <Rodal
		     visible={this.state.visible}
		     onClose={this.hide.bind(this)}
		     width={80}
		     height={80}
		     measure={'%'}
		     showCloseButton={false}
		   >
             {{
               'gps': (
                 <GPSModal
                   isActive={true}
                   hide={() => this.hide()}
                   type={this.state.currentTab}/>
               ),
               'photo': (
                 <PhotoModal
                   isActive={true}
                   hide={() => this.hide()}
                   type={this.state.currentTab}/>
               ),
               'blurb': (
                 <BlurbModal
                   isActive={true}
                   hide={() => this.hide()}
                   type={this.state.currentTab}/>
               )
             }[this.state.currentTab]}
           </Rodal>
         }

        <section className='hero is-info is-large'>
          <div className="hero-head">
            <header className="nav" id="map-nav">
              <div className="container">
                 <div className="nav-left">
                   <div className="nav-item">
                     <h1 className="title">{title}</h1>
                   </div>
                 </div>
                 {auth.username == username &&
                   <div className="nav-center">
                     <div className="nav-item">
                       <NewContentNav onTabClick={(tabname) => this.show(tabname)}/>
                     </div>
                   </div>
                 }
                 <div className="nav-right">
                   <div className="nav-item">
                     <h2 className="subtitle">{start} to {finish}</h2>
                   </div>
                 </div>
              </div>
            </header>
          </div>
          <TripMap username={username} tripid={tripid}/>

          <div className='hero-body has-text-centered is-paddingless' style={{width: '100%'}}>
              <div className="content">
                  <h2 className="subtitle">{description}</h2>
              </div>
          </div>
          <div className="hero-foot">
              <TripNav onTabClick={(tabname) => this.onTabClick(tabname)} />
          </div>
        </section>
				<div className="section">

          {{
            'activity': (
              <ActivityTab username={username} tripid={tripid}/>
            ),
            'gps': (
              <GPSModal isActive={true} type={'gps'}/>
            ),
            'photo': (
              <GPSModal isActive={true} type={'photo'} />
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
  const { auth } = state
  const { currentTab, isFetching } = state.trip
  const trip = isFetching ? {} : state.trip.trip

  return {
    auth,
    trip,
    currentTab,
    isFetching
  }
}

export default connect(mapStateToProps)(Trip)
