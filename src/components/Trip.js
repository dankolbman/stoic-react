import React, { PropTypes } from 'react'

const Trip = ({ onClick, name }) => (
  <a onClick={onClick} > {name} </a>
)

Trip.propTypes = {
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
}

export default Trip
