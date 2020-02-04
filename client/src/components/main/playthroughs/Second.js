import React, { Component } from 'react';

class Second extends Component {
	render() {
		return (
			<div className="playthrough">
				<div className="playthrough__title">Good work!</div>
				<div className="playthrough__content">
					<p className="playthrough__sentence">
						Nice, your first game was probably a breeze for you if you depended on your hearing for the
						audio cues. However, users with hearing loss will face <b>difficulties</b> playing this
						game.
					</p>

					<p className="playthrough__sentence">
						A <b>hearing loss</b> is a partial or total inability to hear. About{' '}
						<b>2 to 3 out of every 1,000 children</b> in the United States are born with a hearing loss in
						one or both ears. There are <b>at least 48 million people</b> with a hearing loss in the United
						States.
					</p>

					<p className="playthrough__sentence">
						This is why it is <b>very important</b> to think about people with disabilities while developing
						software.
					</p>

					<hr />

					<p className="playthrough__sentence">
						Now in your next play, you will play with audio turned off to get a simulation as the one with a
						hearing loss would play. When you're ready, feel free to start the game!
					</p>
				</div>
			</div>
		);
	}
}

export default Second;
