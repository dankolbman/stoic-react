import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import UploadForm from '../components/UploadForm'
import DropzoneComponent from 'react-dropzone-component';

var Config = require('Config')

class DropZone extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    var ReactDOMServer = require('react-dom/server');
    const { username, tripid, type } = this.props
    var url = ''
    var filetypes = []
    switch(type) {
      case 'gps':
        url = `${Config.apiUrl}/geo/points/${username}/${tripid}/csv`
        filetypes = ['.csv']
        break
      case 'photo':
        url = `${Config.apiUrl}/images/image/${username}/${tripid}`
        filetypes  = ['.jpg', '.png', '.gif']
        break
    }

    console.log(type, url, filetypes)
		const componentConfig = {
			showFiletypeIcon: true,
      postUrl: url,
      iconFiletypes: filetypes,
      uploadMultiple: false
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
