import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Gallery from 'react-grid-gallery'
import { fetchImages } from '../actions/images'

class PhotoTab extends Component {
  constructor(props) {
    super(props)
  }

	componentWillMount() {
    const { dispatch, isFetching } = this.props
    const { username, tripid } = this.props
    if (!this.props.images.length || (
          this.props.images[0].username != username
          && this.props.images[0].tripid == trip_id)) {
      dispatch(fetchImages(username, tripid))
    }
  }

	render() {
    const { username, tripid, isFetching } = this.props
		if (isFetching) return (
      <div className='button is-info is-loading' style={{width: '100%', height: '320px'}}>
      <h3>Loading the trip map, hold tight...</h3></div>
    )
    const images = this.props.images
    if (!images) return (
      <h3>No images to display</h3>
    )
		return (
      <div className="content">
        <Gallery
          images={images}
          enableImageSelection={false}/>
      </div>
		)
	}
}

PhotoTab.propTypes = {
	username: PropTypes.string.isRequired,
	tripid: PropTypes.number.isRequired,
	images: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  const isFetching = state.trip.isFetching || state.images.isFetching
  const images = isFetching ? [] : state.images.images
  const { username, id } = state.trip.trip
  const tripid = id
  return {
    username,
    tripid,
    images,
    isFetching
  }
}

export default connect(mapStateToProps)(PhotoTab)
