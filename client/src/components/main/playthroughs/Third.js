import React, { Component } from 'react';

class Third extends Component {
	render() {
		return (
			<div className="playthrough">
				<div className="playthrough__title">Interesting...</div>
				<div className="playthrough__content">
					<p className="playthrough__sentence">
						You may have noticed that this round was harder without the audio cue,
						compared to the first round with the audio cue.
						Your score from this round may be lower than your score from the first round.
					</p>

					<p className="playthrough__sentence">
						This is what users with hearing loss typically experience when applications use audio cues.
					</p>

					<p className="playthrough__sentence">
						Developers can add certain features for better accessibility,
						such as visual cues for deaf or hard-of-hearing users.
						To add visual cues and improve the game, click the 'Repair' button next to the 'Next Play' button.
					</p>

					<hr />

					<p className="playthrough__sentence">
						After making repairs to the game, click the 'Start with Repair Applied' button.
						Your score in the next round should increase from this round.
					</p>
				</div>
			</div>
		);
	}
}

export default Third;
