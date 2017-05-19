import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

class TripNav extends Component {
  constructor(props) {
    super(props)
  }

	render() {
    const { activeTab } = this.props
		return (
        <div className="tabs is-centered is-boxed">
          <ul>
            <li className={activeTab == 'activity' ? "is-active" : ""}><a>
              <span className="icon">
                <i className="fa fa-bars"></i></span>
              <span>Activity</span>
            </a></li>
            <li><a>
              <span className="icon">
                <i className="fa fa-bullseye"></i></span>
              <span>Live</span>
            </a></li>
            <li><a>
              <span className="icon">
                <i className="fa fa-comment"></i></span>
              <span>Blurbs</span>
            </a></li>
            <li><a>
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
		)
	}
}

TripNav.propTypes = {
	activeTab: PropTypes.string.isRequired
}

function mapStateToProps(state) {
  const activeTab = 'activity'
  return {
    activeTab
  }
}

export default connect(mapStateToProps)(TripNav)
