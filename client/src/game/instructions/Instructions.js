import React, { Component } from 'react';
import './Instructions.css';

import Image1 from '../../assets/images/1.jpg';
import Image3 from '../../assets/images/3.jpg';
import Image4 from '../../assets/images/4.jpg';
import Image5 from '../../assets/images/5.jpg';
import Image6 from '../../assets/images/6.jpg';
import Image7 from '../../assets/images/7.jpg';
import Image8 from '../../assets/images/8.jpg';
import Image9 from '../../assets/images/9.jpg';
import Image10 from '../../assets/images/10.jpg';

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
    const { closeHandler } = this.props;

    if (event.keyCode === 37) {
      this.navigatePrevSlide();
    } else if (event.keyCode === 39) {
      this.navigateNextSlide();
    } else if (event.keyCode === 27) {
      closeHandler();
    }
  }

  componentWillMount() {
    window.addEventListener("keydown", this.controls, false);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.controls, false);
  }

  render() {
    const { closeHandler } = this.props;
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
          <div className="instructions__slide">
            <div className="instructions__prev" onClick={this.navigatePrevSlide.bind(this)}><span>&#10096;</span></div>
            <img src={image} alt="Instructions" className="instructions__image" />
            <div className="instructions__next" onClick={this.navigateNextSlide.bind(this)}><span>&#10097;</span></div>
          </div>
        </div>

        <div className="instructions__background" onClick={closeHandler.bind(this)}></div>
      </div>
    );
  }
}

export default Instructions;
