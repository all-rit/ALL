import React, { Component } from 'react';

class CongratulationMessage extends Component {
	render() {
		const { message } = this.props;

		return <div className="game__congratulation">{message}</div>;
	}
}

export default CongratulationMessage;
