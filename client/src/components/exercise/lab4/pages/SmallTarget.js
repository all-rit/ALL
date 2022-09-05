import React, {Component, Fragment} from 'react';
import Button from '@material-ui/core/Button';
import {navigate} from '@reach/router';
import {PageService} from '../../../../services/PageService';
import {LAB_ID} from '../../../../constants/lab4';
import AppInstructions from '../components/AppInstructions';
import {EXERCISE_PLAYING} from '../../../../constants/lab4';

class SmallTarget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      secondsElapsed: 0,
      marginRight: this.style.marginRight + 'px',
      marginLeft: this.style.marginLeft + 'px',
      width: this.style.width + 'px',
      height: this.style.height + 'px',
      fontSize: this.style.fontSize + 'px',
      top: 'px',
      left: 'px',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const name = 'SmallTarget';
    PageService.createPage(name, this.state.secondsElapsed, LAB_ID);
    navigate('/Lab4/Exercise/TargetGuideline');
  }

  componentDidMount() {
    const {actions} = this.props;
    actions.updateState(EXERCISE_PLAYING);
    this.interval = setInterval(
        () => this.setState({secondsElapsed: this.state.secondsElapsed + 1}),
        1000,
    );
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  style = {
    marginRight: 10,
    marginLeft: 10,
    width: 20,
    height: 17,
    fontSize: 10,
  };

  wiggle = (e) => {
    const distX = this.calculateDistanceX(this.myDiv, e.screenX);
    const distY = this.calculateDistanceY(this.myDiv, e.screenY);
    const right = -distX / 2 > -300 ? -(distX / 2) : -(distX / 2) / 25;
    const top = distY / 2 < 300 ? distY / 5 : 300;
    this.setState({right: right + 'px', top: top + 'px'});
  };

  calculateDistanceX(elem, mouseX) {
    return Math.floor(mouseX - (elem.offsetLeft + this.style.width / 2));
  }
  calculateDistanceY(elem, mouseY) {
    return Math.floor(mouseY - (elem.offsetTop + this.style.height / 2));
  }

  render() {
    const instructions = 'Click the start button.';
    return (
      <Fragment>
        <div>
          <AppInstructions instructions={instructions} />
          <div
            style={{
              width: '300px',
              height: '300px',
              margin: 'auto',
              paddingTop: '50px',
              position: 'relative',
            }}
            onMouseMove={(e) => this.wiggle(e)}
          >
            <Button
              ref={(c) => (this.myDiv = c)}
              href="#"
              onClick={this.handleSubmit}
              variant={'contained'}
              color={'primary'}
              style={this.state}
            >
              Start
            </Button>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default SmallTarget;
