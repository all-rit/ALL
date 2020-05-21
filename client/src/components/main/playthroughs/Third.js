import React, { Component } from 'react';

class Third extends Component {
	render() {
		return (
			<div className="playthrough">
				<div className="playthrough__title">Interesting...</div>
				<div className="playthrough__content">
					<p className="playthrough__sentence">
						You may have noticed that this game was harder without the audio cue, compared to the first game.
						Your score from this game may be lower than your score from the first game.
					</p>

					<p className="playthrough__sentence">
						This is what users with hearing loss typically experience when applications use audio cues.
					</p>

					<p className="playthrough__sentence">
						Developers can add certain features for better accessibility. For example, developers can
						add visual cues for deaf or hard-of-hearing users.
						To make these changes and improve the game, click the “Repair” button next to the “Next Play” button.
					</p>

					<hr />

					<p className="playthrough__sentence">
						After making repairs to the game, click the “Next Play” button.
						Your score in the next game should increase from this game.
					</p>
				</div>
			</div>
		);
	}
}

export default Third;
