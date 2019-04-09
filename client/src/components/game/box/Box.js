import React, { Component } from 'react';
import classNames from 'classnames/bind';
import './Box.scss';
import { BOX_UNOPENED, BOX_INCORRECT, BOX_CORRECT, BOX_REVEALED } from '../../../reducers/game/Constants';

class Box extends Component {
	handleClick() {
		const { state } = this.props;

		if (state === BOX_UNOPENED || state === BOX_REVEALED) this.props.onClickHandler(this.props.number);
	}

	render() {
		const { number, state } = this.props;
		const classes = classNames({
			box: true,
			'box--black': (number === 2 || number === 3) && state === BOX_UNOPENED,
			'box--green': state === BOX_CORRECT,
			'box--red': state === BOX_INCORRECT,
			'box--glow': state === BOX_REVEALED
		});

		return (
			<button className={classes} onClick={this.handleClick.bind(this)}>
				{number}
			</button>
		);
	}
}

export default Box;
