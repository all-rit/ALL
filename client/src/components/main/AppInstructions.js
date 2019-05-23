import React, { Component } from 'react';

class AppInstructions extends Component {
	render() {
		const { visible } = this.props;

		if (!visible) return null;

		return <p className="app__instructions">Goal: Find the box with the treasure.</p>;
	}
}

export default AppInstructions;
