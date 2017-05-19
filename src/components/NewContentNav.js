import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

class NewContentNav extends Component {
  constructor(props) {
    super(props)
  }

	render() {
    const { activeTab } = this.props
		return (
        <div className="tabs is-centered is-toggle is-small is-primary">
          <ul>
            <li><a>
              <span className="icon is-small">
                <i className="fa fa-location-arrow"></i></span>
              <span>Upload GPS</span>
            </a></li>
            <li><a>
              <span className="icon is-small">
                <i className="fa fa-comment"></i></span>
              <span>New Blurb</span>
            </a></li>
            <li><a>
              <span className="icon is-small">
                <i className="fa fa-camera"></i></span>
              <span>New Picture</span>
            </a></li>
          </ul>
        </div>
		)
	}
}

NewContentNav.propTypes = {
	activeTab: PropTypes.string.isRequired
}

function mapStateToProps(state) {
  const activeTab = 'none'
  return {
    activeTab
  }
}

export default connect(mapStateToProps)(NewContentNav)
