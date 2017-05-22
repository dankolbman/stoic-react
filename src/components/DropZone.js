import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import UploadForm from '../components/UploadForm'
import DropzoneComponent from 'react-dropzone-component';

class DropZone extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    var ReactDOMServer = require('react-dom/server');
    const { username, tripid } = this.props

		const componentConfig = {
			iconFiletypes: ['.csv'],
			showFiletypeIcon: true,
			postUrl: `http://localhost:8081/api/geo/points/${username}/${tripid}/csv`
		}

    const djsConfig = {
      headers:{ "Authorization": `JWT ${localStorage.getItem('id_token')}` || ''}
    }

    return (
					<DropzoneComponent config={componentConfig}
                             djsConfig={djsConfig} />
    )
  }
}

function mapStateToProps(state) {
  const { username, id } = state.trip.trip
  const tripid = id
  return {
    username,
    tripid
  }
}

export default connect(mapStateToProps)(DropZone)
