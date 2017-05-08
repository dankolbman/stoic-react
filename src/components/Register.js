import React, { Component, PropTypes } from 'react'

export default class Register extends Component {

  render() {
    const { errorMessage } = this.props

    return (
    <div className="field is-horizontal">
      <div className="field-label is-normal">
        <label className="label">Register</label>
      </div>
      <div className="field-body">
        <div className="field is-grouped">
          <p className="control is-expanded has-icons-left">
            <input ref="username" className="input" type="text" placeholder="Username" />
            <span className="icon is-small is-left">
              <i className="fa fa-user"></i>
            </span>
          </p>
        </div>
        <div className="field is-grouped">
          <p className="control is-expanded has-icons-left">
            <input ref="email" className="input" type="text" placeholder="Email" />
            <span className="icon is-small is-left">
              <i className="fa fa-envelope"></i>
            </span>
          </p>
        </div>
        <div className="field">
          <p className="control is-expanded has-icons-left has-icons-right">
            <input ref="password" className="input" type="password" placeholder="Password"/>
            <span className="icon is-small is-left">
            </span>
            <span className="icon is-small is-right">
              <i className="fa fa-check"></i>
            </span>
          </p>
        </div>
      </div>
      <div className="field-label">
      </div>
      <div className="field-body">
        <div className="field">
          <div className="control">
            <button type="submit" onClick={(event) => this.handleClick(event)} className="button is-primary">
                Sign-Up
            </button>
          </div>
        </div>
      </div>
      {errorMessage &&
        <p>{errorMessage}</p>
      }
    </div>

    )
  }

  handleClick(event) {
    const username = this.refs.username
    const email = this.refs.email
    const password = this.refs.password
    const creds = { username: username.value.trim(),
                    email: email.value.trim(),
                    password: password.value.trim() }
    this.props.onRegisterClick(creds)
  }
}

Register.propTypes = {
  onRegisterClick: PropTypes.func.isRequired,
  errorMessage: PropTypes.string
}

