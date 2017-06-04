import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

class TripNav extends Component {
  constructor(props) {
    super(props)
  }

	render() {
    const { currentTab, onTabClick } = this.props
		return (
        <div className="tabs is-centered is-boxed">
          <div className="container">
            <ul>
              <li className={currentTab== 'activity' ? "is-active" : ""}>
              <a onClick={() => this.handleClick('activity')}>
                <span className="icon">
                  <i className="fa fa-bars"></i></span>
                <span>Activity</span>
              </a></li>
              <li><a>
                <span className="icon">
                  <i className="fa fa-bullseye"></i></span>
                <span>Live</span>
              </a></li>
              <li><a onClick={() => this.handleClick('blurbs')}>
                <span className="icon">
                  <i className="fa fa-comment"></i></span>
                <span>Blurbs</span>
              </a></li>
              <li className={currentTab== 'photos' ? "is-active" : ""}>
              <a onClick={() => this.handleClick('photos')}>
                <span className="icon">
                  <i className="fa fa-camera"></i></span>
                <span>Pictures</span>
              </a></li>
              <li><a>
                <span className="icon">
                  <i className="fa fa-area-chart"></i></span>
                <span>Stats</span>
              </a></li>
            </ul>
          </div>
        </div>
		)
	}

  handleClick(tabname) {
    this.props.onTabClick(tabname)
  }
}

TripNav.propTypes = {
	onTabClick: PropTypes.func.isRequired,
	currentTab: PropTypes.string.isRequired
}

function mapStateToProps(state) {
  const { currentTab } = state.trip
  return {
    currentTab
  }
}

export default connect(mapStateToProps)(TripNav)
