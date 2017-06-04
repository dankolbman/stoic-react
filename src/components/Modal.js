import React, { Component, PropTypes } from 'react'

class Modal extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { isActive, type } = this.props

		const CLIENT_ID = 'PASTEME.apps.googleusercontent.com'
		const DEVELOPER_KEY = 'PASTEME'
		const SCOPE = ['https://www.googleapis.com/auth/drive.readonly']

    return (
				<section className="section has-text-centered content">
          <div className="field">
            <GooglePicker clientId={CLIENT_ID}
                          developerKey={DEVELOPER_KEY}
                          scope={SCOPE}
                          onChange={data => console.log('on change:', data)}
                          multiselect={true}
                          navHidden={false}
                          authImmediate={true}
                          mimeTypes={['application/vnd.google-apps.spreadsheet']}
                          viewId={'DOCS'}>
              <a className="button is-large is-success">
                <span className="icon">
                  <i className="fa fa-google"></i>
                </span>
                <span>Upload From Google Drive</span>
              </a>
              <div className="google"></div>
            </GooglePicker>
          </div>
          <div className="field">
            <h2>OR</h2>
          </div>
					<DropZone type={type} />
				</section>
    )
  }
}

Modal.propTypes = {
	isActive: PropTypes.bool.isRequired,
	type: PropTypes.string.isRequired
}

function mapStateToProps(state) {
  return {
  }
}

export default Modal
