import React, { Component, PropTypes } from 'react'

export default class Register extends Component {

  render() {
    const { errorMessage } = this.props

    return (
    <div className="column is-half is-offset-one-quarter">
      <h1 className="title">Register</h1>
      <div className="field">
        <label className="label">Username</label>
        <p className="control has-icons-left">
          <input ref="username" className="input" type="text" placeholder="Username" />
          <span className="icon is-small is-left">
            <i className="fa fa-user"></i>
          </span>
        </p>
      </div>
      <div className="field">
        <label className="label">Email</label>
        <p className="control has-icons-left">
          <input ref="email" className="input" type="text" placeholder="Email" />
          <span className="icon is-small is-left">
            <i className="fa fa-envelope"></i>
          </span>
        </p>
      </div>
      <div className="field">
        <label className="label">Password</label>
        <input ref="password" className="input" type="password" placeholder="Password"/>
      </div>
      <div className="field">
        <p className="control">
          <button type="submit" onClick={(event) => this.handleClick(event)} className="button is-primary">
              Sign-Up
          </button>
        </p>
        {errorMessage &&
          <p>{errorMessage}</p>
        }
      </div>
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

