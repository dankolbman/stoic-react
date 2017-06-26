import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import axios from 'axios'
var Config = require('Config')

class TripSummary extends Component {
  constructor(props) {
    super(props)

    this.state = {
      coverImg: '',
      isFetching: true
    }
    const { username, id } = this.props
    this.get_img(username, id)
  }

	render() {

		const { username, id, title, start, finish, description  } = this.props
    const { isFetching, coverImg } = this.state
		const trip_url = `/user/${username}/trip/${id}`
    const imgUrl = `${Config.url}${coverImg['180h']}`

    if (isFetching) return (
      <div className="column is-4">
				<div className="card" style={{width: "100%"}}>
					<header className="card-header">
						<Link to={trip_url} className="card-header-title">
							{ title }
						</Link>
						<a className="card-header-icon">
							<span className="icon">
								<i className="fa fa-pencil"></i>
							</span>
						</a>
					</header>
					<div className="notification has-text-centered hero-body is-primary" style={{height: '180px'}}>
                <span className="icon is-large">
                  <i className="fa fa-picture-o fa-spin"></i>
                </span>
					</div>
					<div className="card-content">
						<div className="media">
							<div className="media-content">
								<p className="subtitle is-6">{ start} to { finish }</p>
							</div>
						</div>

						<div className="content">
							{ description }
							<br/>
							<small>11:09 PM - 1 Jan 2016</small>
						</div>
					</div>
				</div>
      </div>
    )
		return (
      <div className="column is-4">
				<div className="card" style={{width: "100%"}}>
					<header className="card-header">
						<Link to={trip_url} className="card-header-title">
							{ title }
						</Link>
						<a className="card-header-icon">
							<span className="icon">
								<i className="fa fa-pencil"></i>
							</span>
						</a>
					</header>
					<Link to={trip_url} className="card-image">
						<figure className="image is-16by9">
							<img src={imgUrl} alt="Image"/>
						</figure>
					</Link>
					<div className="card-content">
						<div className="media">
							<div className="media-content">
								<p className="subtitle is-6">{start} to {finish}</p>
							</div>
						</div>

						<div className="content">
							{ description }
							<br/>
							<small>11:09 PM - 1 Jan 2016</small>
						</div>
					</div>
				</div>
      </div>
		)
	}

  get_img(username, tripid) {
    const url = `${Config.apiUrl}/images/image/${username}/${tripid}?size=1`
    const s = this
    axios.get(url)
     .then(function (response) {
       s.setState({coverImg: response.data.images[0].paths,
                   isFetching: false})
     })
    .catch(function (error) {
       console.log(error)
    })
  }
}

TripSummary.propTypes = {
	username: PropTypes.string.isRequired,
	id: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	start: PropTypes.string.isRequired,
	finish: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired

}

function mapStateToProps(state) {

  return {
  }
}

export default connect(mapStateToProps)(TripSummary)
