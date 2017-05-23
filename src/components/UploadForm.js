import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { LocalForm, Control, Errors } from 'react-redux-form';
import { uploadFile } from '../actions/trip'

const required = (val) => val && val.length;

class UploadForm extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { dispatch } = this.props
    const username = 'dan'
    return (
        <LocalForm model='files' 
          onUpdate={(form) => this.handleUpdate(form)}
          onChange={(values) => this.handleChange(values)}
          onSubmit={(values) => this.handleSubmit(values)}
        >
          <div className="field">
            <Control.file model=".files" validators={{required}}/>
            <Errors
              className="help is-danger"
              model="files.files"
              show="touched"
              messages={{
                required: 'File is required',
              }}
            />
          </div>
          <div className="field">
            <button type="submit" className="button is-large is-danger is-outlined">
              <span className="icon">
                <i className="fa fa-laptop"></i>
              </span>
              <span>Upload From Computer</span>
            </button>
          </div>
        </LocalForm>
    )
  }

  handleUpdate(values) {
  }

  handleChange(e) {
  }

  handleSubmit(values) {
    console.log(values)
    uploadFile('dan', '2', values)
  }
}

UploadForm.propTypes = {
}

function mapStateToProps(state) {
  return {
  }
}

export default connect(mapStateToProps)(UploadForm)
