import React, { Component } from 'react';

import Image1 from '../../assets/images/instructions/First.jpg';
import Image2 from '../../assets/images/instructions/Second.jpg';
import Image3 from '../../assets/images/instructions/Third.jpg';
import Image4 from '../../assets/images/instructions/Fourth.jpg';
import Image5 from '../../assets/images/instructions/Fifth.jpg';
import Image6 from '../../assets/images/instructions/Sixth.jpg';
import Image7 from '../../assets/images/instructions/Seventh.jpg';
import Image8 from '../../assets/images/instructions/Eigth.jpg';

class GameInstructions extends Component {
	constructor(props) {
		super(props);

		this.state = {
			currentSlide: 1,
			MIN_VALUE: 1,
			MAX_VALUE: 8
		};

		this.controls = this.controls.bind(this);
	}

	UNSAFE_componentWillMount() {
		window.addEventListener('keydown', this.controls, false);
	}

	componentWillUnmount() {
		window.removeEventListener('keydown', this.controls, false);
	}

	controls(event) {
		const { closeHandler } = this.props;

		if (event.keyCode === 37) {
			this.navigatePrevSlide();
		} else if (event.keyCode === 39) {
			this.navigateNextSlide();
		} else if (event.keyCode === 27) {
			closeHandler();
		}
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

	render() {
		const { visible, closeHandler } = this.props;

		if (!visible) return null;

		let image = '';
		let alt = '';

		switch (this.state.currentSlide) {
			case 2:
				image = Image2;
				alt = 'One of the four boxes will contain a treasure and you need to guess which.';
				break;

			case 3:
				image = Image3;
				alt = 'The time is limited in the game, play fast to get a lot of points.';
				break;

			case 4:
				image = Image4;
				alt = 'There is a hint box in the game and you can click on it to get a possible hint.';
				break;

			case 5:
				image = Image5;
				alt = 'After the hint box is used, it will "think" and the boxes are locked.';
				break;

			case 6:
				image = Image6;
				alt = 'Either it will show no hint';
				break;

			case 7:
				image = Image7;
				alt = 'Or reveal the location of the treasure!';
				break;

			case 8:
				image = Image8;
				alt = 'Good luck!';
				break;

			default:
				image = Image1;
				alt =
					'Image of the game showing a hint box, four boxes, statistics (score/correct answers/incorrect answers/round number), and a message indicating the goal to find the box with the treasure.';
		}

		return (
			<div className="instructions">
				<div className="instructions__content">
					<div className="instructions__prev" onClick={this.navigatePrevSlide.bind(this)}>
						<span>&#10096;</span>
					</div>

					<img src={image} alt={alt} className="instructions__image" />

					<div className="instructions__next" onClick={this.navigateNextSlide.bind(this)}>
						<span>&#10097;</span>
					</div>
				</div>

				<div className="instructions__background" onClick={closeHandler} />
			</div>
		);
	}
}

export default GameInstructions;
