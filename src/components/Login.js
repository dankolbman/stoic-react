import React, { Component, PropTypes } from 'react'

class Login extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { errorMessage }  = this.props

    return (
    <div className="field is-horizontal">
      <div className="field-body">
        <div className="field is-grouped">
          <p className="control is-expanded has-icons-left">
            <input ref="username" className={"input is-small" + (errorMessage ? " is-danger" : "")} type="text" placeholder="Username" />
            <span className="icon is-small is-left">
              <i className="fa fa-user"></i>
            </span>
          </p>
        </div>

        <div className="field">
          <p className="control is-expanded has-icons-left has-icons-right">
            <input ref="password" className={"input is-small" + (errorMessage ? " is-danger" : "")} type="password" placeholder="Password"/>
            <span className="icon is-small is-left">
              <i className="fa fa-envelope"></i>
            </span>
						{errorMessage &&
							<span className="icon is-small is-right">
								<i className="fa fa-warning"></i>
							</span>
						}
          </p>
        </div>
        <div className="field">
            <button type="submit" onClick={(event) => this.handleClick(event)} className="button is-primary is-small">
                Login 
            </button>
        </div>
      </div>
    </div>

    )
  }

  handleClick(event) {
    const username = this.refs.username
    const password = this.refs.password
    const creds = { username: username.value.trim(),
                    password: password.value.trim() }
		this.props.onLoginClick(creds)
  }
}

Login.propTypes = {
  onLoginClick: PropTypes.func.isRequired,
  errorMessage: PropTypes.string
}

export default Login
