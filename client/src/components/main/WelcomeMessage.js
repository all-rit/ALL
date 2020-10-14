import React, { Component } from 'react';
import {
	Button
} from 'reactstrap';
import LoginButton from './LoginButton';



class WelcomeMessage extends Component {
	render() {

		const { user, loginEnabled } = this.props;


		if (user === null || user.firstname === null) {
			return <LoginButton enabled={loginEnabled} />;
		}

			return (
				<div className="welcome">
					<div className="welcome__name">
					{user.firstname}!{' '}
					</div>
					<Button className="welcome__logout" href={`${process.env.REACT_APP_SERVER_URL}/logout`}>
						Logout
					</Button>
				</div>
		);
	}
}

export default WelcomeMessage;
