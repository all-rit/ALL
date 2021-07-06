import React, { Component, Fragment } from 'react';

import CongratulationMessage from './CongratulationMessage';

class Countdown extends Component {
	render() {
		const { visible, time, message } = this.props;

		if (!visible) return null;

		return (
			<Fragment>
				<CongratulationMessage message={message} />

				<div className="exercise__countdown">{time}</div>
			</Fragment>
		);
	}
}

export default Countdown;
