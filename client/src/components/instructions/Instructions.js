import React, { Component } from 'react';
import { connect } from 'react-redux';

import Image1 from '../../assets/images/instructions/1.jpg';
import Image3 from '../../assets/images/instructions/3.jpg';
import Image4 from '../../assets/images/instructions/4.jpg';
import Image5 from '../../assets/images/instructions/5.jpg';
import Image6 from '../../assets/images/instructions/6.jpg';
import Image7 from '../../assets/images/instructions/7.jpg';
import Image8 from '../../assets/images/instructions/8.jpg';
import Image9 from '../../assets/images/instructions/9.jpg';
import Image10 from '../../assets/images/instructions/10.jpg';

import { updateInstructionsStatus } from '../../reducers/instructions/Actions';

const mapDispatchToProps = {
	updateInstructionsStatus
};

class Instructions extends Component {
	constructor(props) {
		super(props);

		this.state = {
			currentSlide: 1,
			MIN_VALUE: 1,
			MAX_VALUE: 9
		};

		this.controls = this.controls.bind(this);
	}

	componentWillMount() {
		window.addEventListener('keydown', this.controls, false);
	}

	componentWillUnmount() {
		window.removeEventListener('keydown', this.controls, false);
	}

	navigatePrevSlide() {
		const { currentSlide, MIN_VALUE } = this.state;

		if (currentSlide > MIN_VALUE) {
			this.setState({ currentSlide: currentSlide - 1 });
		}
	}

	navigateNextSlide() {
		const { currentSlide, MAX_VALUE } = this.state;

		if (currentSlide < MAX_VALUE) {
			this.setState({ currentSlide: currentSlide + 1 });
		}
	}

	controls(event) {
		if (event.keyCode === 37) {
			this.navigatePrevSlide();
		} else if (event.keyCode === 39) {
			this.navigateNextSlide();
		} else if (event.keyCode === 27) {
			this.closeInstructions();
		}
	}

	closeInstructions() {
		this.props.updateInstructionsStatus(false);
	}

	render() {
		let image = '';

		switch (this.state.currentSlide) {
			case 1:
				image = Image1;
				break;

			case 2:
				image = Image3;
				break;

			case 3:
				image = Image4;
				break;

			case 4:
				image = Image5;
				break;

			case 5:
				image = Image6;
				break;

			case 6:
				image = Image7;
				break;

			case 7:
				image = Image8;
				break;

			case 8:
				image = Image9;
				break;

			case 9:
				image = Image10;
				break;

			default:
				image = Image1;
		}

		return (
			<div className="instructions">
				<div className="instructions__content">
					<div className="instructions__prev" onClick={this.navigatePrevSlide.bind(this)}>
						<span>&#10096;</span>
					</div>

					<img src={image} alt="Instructions" className="instructions__image" />

					<div className="instructions__next" onClick={this.navigateNextSlide.bind(this)}>
						<span>&#10097;</span>
					</div>
				</div>

				<div className="instructions__background" onClick={this.closeInstructions.bind(this)} />
			</div>
		);
	}
}

export default connect(null, mapDispatchToProps)(Instructions);
