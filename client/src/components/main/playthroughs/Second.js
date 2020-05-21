import React, { Component } from 'react';

class Second extends Component {
	render() {
		return (
			<div className="playthrough">
				<div className="playthrough__title">Good work!</div>
				<div className="playthrough__content">
					<p className="playthrough__sentence">
						Your first game may have been a breeze for you if you depended on the audio cues.
						However, users with hearing loss cannot hear the audio cues, making the game more difficult for them.
					</p>

					<p className="playthrough__sentence">
						Hearing loss is the partial or total inability to hear. About{' '}
						<b>2 - 3 out of every 1,000 children</b> in the United States are born with hearing loss in
						one or both ears. There are <b>at least 48 million people</b> with hearing loss in the United
						States.
					</p>

					<p className="playthrough__sentence">
						Developing software with hearing loss in mind is very important.
					</p>

					<hr />

					<p className="playthrough__sentence">
						Let’s play the game another time, but without the audio cue to indicate when there's a hint.
						This will simulate a deaf or hard-of-hearing user’s experience.
						Click the “Next Play” button when you’re ready to continue.
					</p>
				</div>
			</div>
		);
	}
}

export default Second;
