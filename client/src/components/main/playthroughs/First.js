import React, { Component } from 'react';

class First extends Component {
	render() {
		return (
			<div className="playthrough">

				<div className="playthrough__content">
					<p className="playthrough__sentence">
						Well done! You’ve completed the reading section. Now, we’re going to apply what you’ve learned in a fun game.
						Here are the rules:
					</p>

					<ul className="playthrough__list">
						<li>
							Four small boxes will be presented on your screen. One of the four boxes contains a treasure,
							and it's your job to guess which box.
						</li>
						<li>
							A large hint box will also be presented on your screen. <b>Sometimes</b> a hint will be available that will reveal
							which of the four boxes has the treasure. Hints will <b>only</b> be available when you hear an audio cue.
							Click on the hint box to reveal where the treasure is. If there is a hint, it will
							reveal which box has the treasure. However, if there is no hint, the boxes will be 'locked'
							for a short period of time before you can select again. Beware, opening the hint box costs 25 points!
						</li>
						<li>
							Time is limited for each round. The quicker you find the box with the treasure, the more points you
							will get.
						</li>
							<ul className="playthrough__list">
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
						<li>
							Every time you find the box with the treasure, a countdown will be displayed and a new round will ensue,
							until the timer runs out.
						</li>
					</ul>

					<p className="playthrough__sentence">Click the 'How to Play?' button before beginning.</p>

					<hr />

					<p className="playthrough__sentence">
						When you are ready, click the 'Start' button to begin the game.
					</p>
				</div>
			</div>
		);
	}
}

export default First;
