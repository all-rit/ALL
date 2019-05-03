import React, { Component } from 'react';
import { connect } from 'react-redux';

import { GAME_IDLE, GAME_PLAYING } from '../../reducers/game/Constants';

import SoundOption from '../soundoption/SoundOption';
import Conditional from '../../helpers/Conditional';

const mapStateToProps = (state) => {
	return {
		state: state.game.state,
		user: state.app.user,
		numberOfPlays: state.game.numberOfPlays
	};
};

class Header extends Component {
	constructor(props) {
		super(props);

		this.state = {
			menuOpen: false
		};
	}

	render() {
		const { state, user, numberOfPlays } = this.props;

		return (
			<header className="header">
				<div className="header__column text-left">
					<SoundOption blocked={state === GAME_PLAYING || numberOfPlays <= 2} />
				</div>

				<div className="header__column text-right">
					<Conditional if={!user.FirstName}>
						<Conditional if={numberOfPlays > 0 || (numberOfPlays === 0 && state !== GAME_IDLE)}>
							<div className="google__button--disabled" />
						</Conditional>

						<Conditional if={numberOfPlays === 0 && state === GAME_IDLE}>
							<a href={process.env.REACT_APP_SERVER_URL + '/auth/google'}>
								<div className="google__button" />
							</a>
						</Conditional>
					</Conditional>

					<Conditional if={user.FirstName}>
						<span>Welcome, {user.FirstName}!</span>
					</Conditional>
				</div>
			</header>
		);
	}
}

export default connect(mapStateToProps)(Header);
