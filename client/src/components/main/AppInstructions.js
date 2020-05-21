import React, { Component } from 'react';

class AppInstructions extends Component {
	render() {
		const { visible } = this.props;

		if (!visible) return null;

		return <p className="app__list">
			<ul>
				<li>
					Opening the hint box costs 25 points
				</li>
				<li>
					The quicker you find the box with the treasure, the more points you get
					<ul>
						<li>
							Less than 1 second = 150 points
						</li>
						<li>
							Less than 2 seconds = 125 points
						</li>
						<li>
							Less than 3 seconds = 100 points
						</li>
						<li>
							Less than 4 seconds = 75 points
						</li>
						<li>
							Less than 5 seconds = 50 points
						</li>
						<li>
							More than 5 seconds = 25 points
						</li>
					</ul>
				</li>
			</ul>
		</p>;
	}
}

export default AppInstructions;
