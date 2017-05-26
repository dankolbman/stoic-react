import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Gallery from 'react-grid-gallery'
import { fetchTrip } from '../actions/trip'
import TripMap from '../components/TripMap'
import NewContentNav from '../components/NewContentNav'
import TripNav from '../components/TripNav'

class ActivityTab extends Component {
  constructor(props) {
    super(props)
  }

	render() {
    const { username, tripid } = this.props
		const IMAGES = [
			{
			src: "http://localhost:8081/images/dan/7/e333c812-fe0d-5ba5-b2de-6a54b4126fe3.jpg",
			thumbnail: "http://localhost:8081/images/dan/7/e333c812-fe0d-5ba5-b2de-6a54b4126fe3.jpg",
			width: 600,
			height: 600
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
								images={IMAGES}
								rowHeight={100}
								enableImageSelection={false}/>
						</div>
						<div className="tile is-child">
					<div className="box">
						<article className="media">
							<div className="media-left">
								<figure className="image is-64x64">
									<img src="http://bulma.io/images/placeholders/128x128.png" alt="Image" />
								</figure>
							</div>
							<div className="media-content">
								<div className="content">
									<p>
										<strong>John Smith</strong><small>31m</small>
										<br/>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
									</p>
								</div>
							</div>
						</article>
					</div>

						</div>
					</div>
				</div>
      </div>
		)
	}
}

ActivityTab.propTypes = {
}

function mapStateToProps(state) {
  return {
  }
}

export default connect(mapStateToProps)(ActivityTab)
