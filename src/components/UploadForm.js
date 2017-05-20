import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { LocalForm, Control, Errors } from 'react-redux-form';

const required = (val) => val && val.length;

class UploadForm extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
        <LocalForm model='file'
          onUpdate={(form) => this.handleUpdate(form)}
          onChange={(values) => this.handleChange(values)}
          onSubmit={(values) => this.handleSubmit(values)}
        >
          <div className="field">
            <Control.file model=".file" validators={{required}}/>
            <Errors
              className="help is-danger"
              model="file.file"
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
  }
}

UploadForm.propTypes = {
}

function mapStateToProps(state) {
  return {
  }
}

export default connect(mapStateToProps)(UploadForm)
