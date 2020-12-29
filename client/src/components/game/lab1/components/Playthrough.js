import React, { Component } from 'react';

import First from '../pages/First';
import Second from '../pages/Second';
import Third from '../pages/Third';
import Fourth from '../pages/Fourth';

class Playthrough extends Component {
	render() {
		const { plays, results, visible } = this.props;

		if (!visible) return null;

		switch (plays) {
			case 0:
				return <First />;
			case 1:
				return <Second />;
			case 2:
				return <Third />;

			default:
				return <Fourth results={results} />;
		}
	}
}

export default Playthrough;
