import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

class NewContentNav extends Component {
  constructor(props) {
    super(props)
  }

	render() {
    const { currentTab, onTabClick } = this.props
		return (
        <div className="tabs is-centered is-toggle is-small is-primary">
          <ul>
            <li><a onClick={() => this.handleClick('gps')}>
              <span className="icon is-small">
                <i className="fa fa-location-arrow"></i></span>
              <span>Upload GPS</span>
            </a></li>
            <li><a onClick={() => this.handleClick('blurb')}>
              <span className="icon is-small">
                <i className="fa fa-comment"></i></span>
              <span>New Blurb</span>
            </a></li>
            <li><a onClick={() => this.handleClick('photo')}>
              <span className="icon is-small">
                <i className="fa fa-camera"></i></span>
              <span>New Picture</span>
            </a></li>
          </ul>
        </div>
		)
	}

  handleClick(tabname) {
    this.props.onTabClick(tabname)
  }
}

NewContentNav.propTypes = {
	onTabClick: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  const currentTab = 'none'
  return {
  }
}

export default connect(mapStateToProps)(NewContentNav)
