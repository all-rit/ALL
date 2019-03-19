import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import './SoundOption.scss';

import { updateSoundStatus } from '../../reducers/game/Actions';

import VolumeOnIcon from '../../assets/images/volume_on.svg';
import VolumeOffIcon from '../../assets/images/volume_off.svg';

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

		return (
			<div onClick={this.toggleSound.bind(this)}>
				<img className={classes} src={soundEnabled ? VolumeOnIcon : VolumeOffIcon} alt="Sound Option" />
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SoundOption);
