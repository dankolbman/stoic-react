import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { logoutUser } from '../actions/auth'

class Logout extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <a onClick={() => this.handleClick()} className="nav-item is-tab">
        Logout
      </a>
    )
  }

  handleClick() {
    this.props.history.push('/')
    this.props.onLogoutClick()
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
