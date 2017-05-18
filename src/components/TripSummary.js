import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

class TripSummary extends Component {
  constructor(props) {
    super(props)
  }

	render() {
		return (
      <div>
        { this.props.title }
      </div>
		)
	}
}

TripSummary.propTypes = {
	title: PropTypes.string.isRequired
}

function mapStateToProps(state) {

  return {
  }
}

export default connect(mapStateToProps)(TripSummary)
