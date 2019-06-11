import React, { Component } from 'react';
import { Link } from '@reach/router';

class CaseStudy extends Component {
	render() {
		return (
			<div className="study">
				<h1>Case Study</h1>
				Stuff
				<div className="study__actions">
					<Link to="/supplementary">&laquo; Back to Supplementary Materials</Link>
				</div>
			</div>
		);
	}
}

export default CaseStudy;
