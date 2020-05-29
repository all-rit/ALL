import React, { Component } from 'react';

class Second extends Component {
	render() {
		return (
			<div className="playthrough">
				<div className="playthrough__title">Good work!</div>
				<div className="playthrough__content">
					<p className="playthrough__sentence">
						Your first game may have been a breeze for you if you depended on the audio cues.
						However, users with hearing loss cannot hear the audio cues.
						This makes the game more difficult.
					</p>

					<hr />

					<p className="playthrough__sentence">
						Let’s play the game another time, but without the audio cue to indicate when there's a hint.
						This will simulate a deaf or hard-of-hearing user’s experience. The same rules from the first
						round still apply.
						Click the 'Next Play' button when you’re ready to continue.
					</p>
				</div>
			</div>
		);
	}
}

export default Second;
