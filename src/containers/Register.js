import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { registerUser } from '../actions/auth'

class Register extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { errorMessage } = this.props

    return (
    <div className="column is-half is-offset-one-quarter">
      <h1 className="title">Register</h1>
      <div className="field">
        <label className="label">Username</label>
        <p className="control has-icons-left">
          <input ref="username" className={"input " + (errorMessage ? " is-danger" : "")} type="text" placeholder="Username" />
          <span className="icon is-small is-left">
            <i className="fa fa-user"></i>
          </span>
          {errorMessage && errorMessage.includes('username') &&
            <p className="help is-danger">This username is taken</p>
          }
        </p>
      </div>
      <div className="field">
        <label className="label">Email</label>
        <p className="control has-icons-left">
          <input ref="email" className={"input " + (errorMessage ? " is-danger" : "")} type="text" placeholder="Email" />
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
    this.props.dispatch(registerUser(creds))
  }
}

Register.propTypes = {
  errorMessage: PropTypes.string
}

function mapStateToProps(state) {
  const { auth } = state
  const { errorMessage } = auth
  return {
    errorMessage
  }
}

export default connect(mapStateToProps)(Register)
