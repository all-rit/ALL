import React, { Component } from 'react';
import { Link } from '@reach/router';

import Slides from '../assets/pdfs/slides.pdf';

class Supplementary extends Component {
	render() {
		return (
			<div className="supplementary">
				<h1>Supplementary Materials</h1>

				<ul className="supplementary__list">
					<li>
						Slide show is available to view{' '}
						<a
							href={Slides}
							download="slides.pdf"
							target="_blank"
							rel="noopener noreferrer"
						>
							here
						</a>.
					</li>

					<li>Video coming soon!</li>

					<li>
						Case study is available <Link to={process.env.PUBLIC_URL + "/casestudy"}>here</Link>.
					</li>

					<li>
						You can also go back to the main application <Link to={process.env.PUBLIC_URL + "/"}>here</Link>.
					</li>
				</ul>
			</div>
		);
	}
}

export default Supplementary;
