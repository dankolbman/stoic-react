import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Trip from '../components/Trip'

class User extends Component {
  constructor(props) {
    super(props)
  }

	componentWillMount() {
    const { dispatch, isFetching } = this.props
    const { username } = this.props.match.params
    dispatch(fetchTrips(username))
  }

  render() {
    const { username } = this.props

    return (
    <div>
      <Trip username={this.props.match.params.id} />
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
