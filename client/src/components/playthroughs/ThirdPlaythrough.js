import React, { Component } from 'react';
import './Playthrough.scss';

class ThirdPlaythrough extends Component {
	render() {
		return (
			<div className="playthrough">
				<div className="playthrough__title">Interesting...</div>
				<div className="playthrough__content">
					<p className="playthrough__sentence">
						You probably have noticed that your recent game is harder with audio turned off. Your score
						should be <b>lower</b> compared to your score in your first game.
					</p>

					<p className="playthrough__sentence">
						This is typically how users with a hearing impairment experience when applications use <b>sound</b> to cue
						something.
					</p>

					<p className="playthrough__sentence">
						To help improve the game, there is now a <b>"Repair"</b> button next to the "How to Play?" button.
					</p>

					<p className="playthrough__sentence">
						Generally, the developers utilize alternative approaches for audio cues by <b>adding more
						information such as additional messages or/and visual changes</b>.
					</p>

					<hr />

					<p className="playthrough__sentence">
						After making changes to the game, go ahead and click the "Start" button! If you did it correct, your score should improve compared to the recent game!
					</p>
				</div>
			</div>
		);
	}
}

export default ThirdPlaythrough;
