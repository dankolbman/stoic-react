import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Trip from '../components/Trip'

class User extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { userName } = this.props

    return (
    <div>
      <Trip username={this.props.match.params.id} trip={'chi-phl'}/>
    </div>
    )
  }
}

User.propTypes = {
  //username: PropTypes.string.isRequired
}

function mapStateToProps(state) {
  return {
  }
}

export default connect(mapStateToProps)(User)
