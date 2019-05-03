import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';

import { updateSoundStatus } from '../../reducers/game/Actions';

const mapStateToProps = (state) => {
	return {
		soundEnabled: state.game.soundEnabled
	};
};

const mapDispatchToProps = {
	updateSoundStatus
};

class SoundOption extends Component {
	toggleSound() {
		const { updateSoundStatus, soundEnabled, blocked } = this.props;

		if (!blocked) {
			updateSoundStatus(!soundEnabled);
		}
	}

	render() {
		const { soundEnabled, blocked } = this.props;
		const classes = classNames({
			sound_icon: true,
			'sound_icon--off': !soundEnabled,
			'sound_icon--disabled': blocked
		});

		return <svg onClick={this.toggleSound.bind(this)} className={classes} />;
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SoundOption);
