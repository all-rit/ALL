import React, { Component } from 'react';
import { BeatLoader } from 'react-spinners';
import classNames from 'classnames/bind';
import { connect } from 'react-redux';

import { HINT_BOX_CLOSED, HINT_BOX_OPEN, HINT_BOX_THINKING } from '../../../reducers/game/Constants';
import Conditional from '../../../helpers/Conditional';

const mapStateToProps = (state) => {
	return {
		correctMessage: state.code.correctMessage,
		incorrectMessage: state.code.incorrectMessage,
		correctBackgroundColor: state.code.correctBackgroundColor,
		incorrectBackgroundColor: state.code.incorrectBackgroundColor
	};
};

class HintBox extends Component {
	handleClick() {
		const { state, onClickHandler } = this.props;

		if (state === HINT_BOX_CLOSED) {
			onClickHandler();
		}
	}

	render() {
		const {
			hint,
			state,
			correctMessage,
			incorrectMessage,
			correctBackgroundColor,
			incorrectBackgroundColor
		} = this.props;
		const classes = classNames({
			hint_box: true,
			'hint_box--open': state === HINT_BOX_OPEN
		});

		return (
			<div className={classes} onClick={this.handleClick.bind(this)}>
				<Conditional if={state === HINT_BOX_CLOSED}>
					<Conditional if={hint}>
						<div className="hint_box__background" style={{ backgroundColor: correctBackgroundColor }}>
							{correctMessage}

							<span className="hint_box__warning">(Opening this will cost you 25 points)</span>
						</div>
					</Conditional>

					<Conditional if={!hint}>
						<div className="hint_box__background" style={{ backgroundColor: incorrectBackgroundColor }}>
							{incorrectMessage}

							<span className="hint_box__warning">(Opening this will cost you 25 points)</span>
						</div>
					</Conditional>
				</Conditional>

				<Conditional if={state === HINT_BOX_THINKING}>
					<BeatLoader sizeUnit={'px'} size={10} />
				</Conditional>

				<Conditional if={state === HINT_BOX_OPEN}>
					<Conditional if={hint}>{hint}</Conditional>

					<Conditional if={!hint}>No Hint.</Conditional>
				</Conditional>
			</div>
		);
	}
}

export default connect(mapStateToProps)(HintBox);
