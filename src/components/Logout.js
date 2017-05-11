import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

class Logout extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { onLogoutClick } = this.props

    return (
    <div className="field is-horizontal">
        <div className="field">
          <div className="control">
            <button type="submit" onClick={() => this.onLogoutClick()} className="button is-primary is-small">
                Logout
            </button>
          </div>
        </div>
      </div>
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
