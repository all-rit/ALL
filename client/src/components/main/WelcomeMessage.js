import React, { Component } from 'react';

import LoginButton from './LoginButton';



class WelcomeMessage extends Component {
	render() {

		const { user, loginEnabled } = this.props;


		if (user === null || user.firstname === null) {
			return <LoginButton enabled={loginEnabled} />;
		}

			return (
				<span className="welcome">
					Welcome, {user.firstname}!{' '}
					<a className="welcome__logout" href={`${process.env.REACT_APP_SERVER_URL}/logout`}>
						Logout
					</a>
				</span>
		);
	}
}

export default WelcomeMessage;
