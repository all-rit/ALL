import React, { Component } from 'react';

class LoginButton extends Component {
	render() {
		const { enabled } = this.props;

		if (enabled) {
			return (
				<a href={process.env.REACT_APP_SERVER_URL + '/auth/google'}>
					<div className="google__button" />
				</a>
			);
		}

		return <div className="google__button google__button--disabled" />;
	}
}

export default LoginButton;
