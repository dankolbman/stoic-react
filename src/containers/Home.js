import React, { Component, PropTypes } from 'react'
import GooglePicker from 'react-google-picker';

class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { errorMessage } = this.props

		const CLIENT_ID = '492538251113-dfq1le8b5qhl273p8o6l60b6to424qtp.apps.googleusercontent.com';
		const DEVELOPER_KEY = 'AIzaSyAU3QbPd7bo59SLibkw5JuR-QkH8LlSKDc';
		const SCOPE = ['https://www.googleapis.com/auth/drive.readonly'];

    return (
    <section>
      <div className='hero is-info'>
        <div className="hero-body">
          <div className='container'>
            <div className='columns'>
              <div className='column has-text-centered'>
                <p className='title'>Welcome</p>
                <p className='subtitle'>Bob Loblaw Travel Blog</p>
              </div>
						</div>
						<div className="columns">
							<div className="column">
								<nav className="level">
									<div className="level-item has-text-centered">
										<div>
											<p className="heading">Journeys Embarked</p>
											<p className="title">2</p>
										</div>
									</div>
									<div className="level-item has-text-centered">
										<div>
											<p className="heading">Miles Travelled</p>
											<p className="title">1,234</p>
										</div>
									</div>
									<div className="level-item has-text-centered">
										<div>
											<p className="heading">Photos Taken</p>
											<p className="title">456</p>
										</div>
									</div>
									<div className="level-item has-text-centered">
										<div>
											<p className="heading">Stories Made</p>
											<p className="title">789</p>
										</div>
									</div>
								</nav>
							</div>
						</div>
          </div>
        </div>
      </div>
    </section>
    )
  }
}

Home.propTypes = {
}

export default Home
