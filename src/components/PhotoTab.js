import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Gallery from 'react-grid-gallery'
import { fetchImages } from '../actions/images'
import axios from 'axios'
var Config = require('Config')

class PhotoTab extends Component {
  constructor(props) {
    super(props)

		this.state = {
			images: this.props.images,
			isDeleting: false,
			errorMessage: ''
		}
		this.onSelectImage = this.onSelectImage.bind(this)
		this.deleteSelectedImages = this.deleteSelectedImages.bind(this)
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
		const { isDeleting, errorMessage } = this.state
		if (isFetching) return (
      <div className='button is-info is-loading' style={{width: '100%', height: '320px'}}>
      <h3>Loading the trip map, hold tight...</h3></div>
    )
    const images = this.state.images
    if (!images) return (
      <h3>No images to display</h3>
    )
    if (errorMessage) return (
      <h3>{errorMessage}</h3>
    )
		return (
      <div className="content">
				<div onClick={() => this.deleteSelectedImages()}
						 className={`button is-danger ${ isDeleting ? 'is-loading' : ''}`}
						 disabled={isDeleting || errorMessage}>
					delete selected
				</div>
				 <p className="help is-danger">{errorMessage}</p>
        <Gallery
          images={images}
          enableImageSelection={true}
					onSelectImage={this.onSelectImage}
          backdropClosesModal={true}
        />
      </div>
		)
	}

	onSelectImage (index, image) {
		var images = this.state.images.slice()
		var img = images[index]
		if(img.hasOwnProperty("isSelected"))
				img.isSelected = !img.isSelected
		else
				img.isSelected = true

		this.setState({
				images: images
		})

	}

	deleteSelectedImages () {
		console.log(this.state)
		for(var i = 0; i < this.state.images.length; i++)
				if(this.state.images[i].isSelected == true)
						this.deleteImage(this.state.images[i])
		const s = this
		var images = []
		for(var i = 0; i < this.state.images.length; i++)
				if(this.state.images[i].isSelected != true)
						images.push(this.state.images[i])
	  s.setState({images: images})
		console.log(this.state)
	}

	deleteImage (image) {
		const { username, tripid } = this.props
		
    const s = this
		s.setState({isDeleting: true})
		var url = `${Config.apiUrl}/images/image/${username}/${tripid}/${image.id}`
		axios.delete(url,
								 {headers:{ "Authorization": `JWT ${localStorage.getItem('id_token')}` || ''}})
					 .then(function (response) {
						 s.setState({isDeleting: false})
					 })
					.catch(function (error) {
						 s.setState({errorMessage: error.response.message,
												 isDeleting: false})
					})
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
