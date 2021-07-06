import React, { Component } from 'react';

class CongratulationMessage extends Component {
	render() {
		const { message } = this.props;

		return <div className="exercise__congratulation">{message}</div>;
	}
}

export default CongratulationMessage;
