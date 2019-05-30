import React, { Component } from 'react';

import LoginButton from './LoginButton';

class WelcomeMessage extends Component {
	render() {
		const { user, loginEnabled } = this.props;

		if (user === null || user.firstname === null) {
			return <LoginButton enabled={loginEnabled} />;
		}

		return <span>Welcome, {user.firstname}!</span>;
	}
}

export default WelcomeMessage;
