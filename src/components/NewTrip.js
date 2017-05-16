import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { postNewTrip } from '../actions/trips'

//import { newTrip } from '../actions/trip'

class NewTrip extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { isFetching, errorMessage } = this.props

    return (
    <div className="column is-half is-offset-one-quarter">
      <h1 className="title">Start a new trip</h1>
      <div className="field">
        <label className="label">Title</label>
        <p className="control has-icons-left">
          <input ref="title" className={"input " + (errorMessage ? " is-danger" : "")} type="text" placeholder="Title" />
          <span className="icon is-small is-left">
            <i className="fa fa-user"></i>
          </span>
          {errorMessage &&
            <p className="help is-danger">This username is taken</p>
          }
        </p>
      </div>

			<div className="field is-horizontal">
				<div className="field-body">
					<div className="field">
						<p className="control is-expanded">
							<input ref="from" className="input" type="text" placeholder="From"/>
						</p>
					</div>
					<div className="field-label is-normal" style={{flexGrow: 0, marginRight: "0.7rem"}}>
						<span className="icon">
							<i className="fa fa-map-signs"></i>
						</span>
					</div>
					<div className="field">
						<p className="control is-expanded">
							<input ref="to" className="input" type="text" placeholder="To" />
						</p>
					</div>
				</div>
			</div>

			<div className="field">
				<label className="label">Itinerary</label>
				<p className="control">
					<textarea ref="description" className="textarea" placeholder="Briefing for your trip"></textarea>
				</p>
			</div>

      <div className="field">
        <p className="control">
          <button type="submit" onClick={(event) => this.handleClick(event)} className={"button is-primary " + (isFetching ? " is-loading" : "")}>
						Create
          </button>
        </p>
      </div>
    </div>
    )
  }

  handleClick(event) {
    const title = this.refs.title
    const to = this.refs.to
    const from = this.refs.from
    const description = this.refs.description
    const trip = { name: title.value.trim(),
                   start: to.value.trim(),
                   finish: from.value.trim(),
                   description: description.value.trim() }
    this.props.dispatch(postNewTrip(this.props.username, trip))
  }
}

NewTrip.propTypes = {
  isFetching: PropTypes.string,
  errorMessage: PropTypes.string
}

function mapStateToProps(state) {
  console.log('state')
  console.log(state)
  const { auth } = state
  const { username, errorMessage } = auth
  return {
    username,
    errorMessage
  }
}

export default connect(mapStateToProps)(NewTrip)
