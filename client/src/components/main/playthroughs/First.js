import React, { Component } from 'react';

class First extends Component {
	render() {
		return (
			<div className="playthrough">
				<div className="playthrough__title">Welcome!</div>

				<div className="playthrough__content">
					<p className="playthrough__sentence">
						Well done! You’ve finished the reading section. Now, we’re going to apply what you’ve learned in a fun game.
					</p>

					<ul className="playthrough__list">
						<li>
							One of the boxes will contain <b>a treasure</b>.
						</li>
						<li>
							You will have to <b>guess which</b>.
						</li>
						<li>
							Stuck? Click on the hint box! The hint box <b>is not guaranteed</b> to have a hint inside.
						</li>
						<li>
							You will get <b>an audio cue</b> indicating a hint has popped up.
						</li>
						<li>
							You will have <b>a limited amount of time</b>. You will need to find the treasure each round
							as fast as you can.
						</li>
					</ul>



					<p className="playthrough__sentence">
						When you are ready, click the “Start” button to proceed.
					</p>
				</div>
			</div>
		);
	}
}

export default First;
