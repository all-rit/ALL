import React, { Component } from 'react';
import { Link } from '@reach/router';

class Supplementary extends Component {
	render() {
		return (
			<div className="supplementary">
				<h1>Supplementary Materials</h1>

				<ul className="supplementary__list">
					<li>
						Slide show is available to view via Google Slides{' '}
						<a
							href="https://docs.google.com/presentation/d/1emAyaoYjXLtpO_FntTufGn0Vy-lWEFMnS3LrX_TOT4Q/edit?usp=sharing"
							target="_blank"
							rel="noopener noreferrer"
						>
							here
						</a>.
					</li>

					<li>Video coming soon!</li>

					<li>
						Case study is available <Link to="/casestudy">here</Link>.
					</li>

					<li>You can also go back to the main application <Link to="/">here</Link>.</li>
				</ul>
			</div>
		);
	}
}

export default Supplementary;
