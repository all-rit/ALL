import React, { Component } from 'react';
import './Playthrough.scss';

class FourthPlaythrough extends Component {
	render() {
		return (
			<div className="playthrough">
				<div className="playthrough__title">Godspeed</div>
				<div className="playthrough__content">
					<p className="playthrough__sentence">
            After playing the game with audio on and off and making adjustments within the game, we hope this provided a good learning experience for you.
          </p>

					<p className="playthrough__sentence">
            Remember, if you do develop software, please consider people with disabilities. Thank you.
          </p>

          <hr />

					<p className="playthrough__sentence">
						Wait, you're actually <i>still here</i>? Well, you can decide to make more adjustments, play more games, or take a walk outside. Up to ya!
					</p>
				</div>
			</div>
		);
	}
}

export default FourthPlaythrough;
