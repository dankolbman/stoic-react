import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

class Logout extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { onLogoutClick } = this.props

    return (
      <a onClick={() => onLogoutClick()} className="nav-item is-tab">
          Logout
      </a>
    )
  }
}

Logout.propTypes = {
  onLogoutClick: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
  }
}

export default connect(mapStateToProps)(Logout)
