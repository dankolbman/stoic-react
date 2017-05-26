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
    dispatch(fetchImages(username, tripid))
  }

	render() {
    const { username, tripid, isFetching } = this.props
		if (isFetching) return (
      <div className='button is-info is-loading' style={{width: '100%', height: '270px'}}>
      <h3>Loading the trip map, hold tight...</h3></div>
    )
    const images = this.props.images
    if (!images) return (
      <h3>No images to display</h3>
    )
		const IMAGES = [
			{
			src: "http://localhost:8081/images/dan/7/e333c812-fe0d-5ba5-b2de-6a54b4126fe3.jpg",
			thumbnail: "http://localhost:8081/images/dan/7/e333c812-fe0d-5ba5-b2de-6a54b4126fe3.jpg",
			thumbnailWidth: 6000,
      thumbnailHeight: 2000
			},
			{
			src: "http://localhost:8081/images/dan/7/a42165ab-f559-5f66-abf9-3ae8afe67334.jpg",
			thumbnail: "http://localhost:8081/images/dan/7/a42165ab-f559-5f66-abf9-3ae8afe67334.jpg",
			 tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
			width: 600,
			height: 100,
		caption: "Boats (Jeshu John - designerspics.com)"
			}
		]
		return (
      <div>
        <div className="tile is-ancestor">
					<div className="tile is-parent">
						<div className="tile is-child">
							<Gallery
								images={images}
								rowHeight={240}
								enableImageSelection={false}/>
						</div>
					</div>
				</div>
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
