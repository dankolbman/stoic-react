import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import GooglePicker from 'react-google-picker'
import UploadForm from '../components/UploadForm'
import DropZone from '../components/DropZone'

class BlurbModal extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { isActive, type, hide } = this.props

    return (
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Writ a Blurb</p>
            <a className="button delete" onClick={() => hide()}></a>
          </header>
          <section className="modal-card-body">
            <p>
              Upload file for processing. Please wait until
              all files have finished uploading
            </p>
            <p>
              <span><i>Note:</i> files may not be processed immediately</span>
            </p>
		  <section className="section has-text-centered content">
            <div class="field">
              <label class="label">Blurb</label>
              <p class="control">
                <textarea class="textarea" placeholder="Textarea"></textarea>
              </p>
            </div>
		  </section>
          </section>
        </div>
    )
  }
}

BlurbModal.propTypes = {
	isActive: PropTypes.bool.isRequired,
	type: PropTypes.string.isRequired
}

function mapStateToProps(state) {
  return {
  }
}

export default connect(mapStateToProps)(BlurbModal)
