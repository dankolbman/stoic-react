import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
var Config = require('Config')

class ServiceStatus extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isFetching: true,
      isOk: false,
      version: ''
    }
    this.get_status(this.props.service)
  }

	render() {
    const { isFetching, isOk, version } = this.state
    const { service } = this.props

    const gh = `https://github.com/dankolbman/stoic-${service}`

    if (isFetching) return (
      <div>
        <p>
          <span className="icon is-small" style={{color: '#4a4a4a'}}>
            <i className="fa fa-cog fa-spin fa-3x fa-fw"></i>
          </span>
          <a href={gh}>{service}</a>@<i>.......</i> 
        </p>
      </div>
    )
		return (
      <div>
        <p>
          <span className="icon is-small" style={{color: isOk ? '#007000' : '#800000'}}>
            <i className={`fa fa-${isOk ? 'check' : 'times'}`}></i>
          </span>
          <a href={gh}>{service}</a>@<i>{version}</i> 
        </p>
      </div>
		)
	}

  get_status(service) {
    const url = `${Config.apiUrl}/${this.props.service}/status`
    const s = this
    axios.get(url)
     .then(function (response) {
       console.log(response);
       s.setState({version: response.data.version,
                   isOk: response.data.status == 200,
                   isFetching: false})
     })
    .catch(function (error) {
       console.log(error)
    })
  }
}

export default ServiceStatus
