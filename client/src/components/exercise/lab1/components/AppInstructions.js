import React, {Component} from 'react';

class AppInstructions extends Component {
  render() {
    const {visible} = this.props;

    if (!visible) return null;

    return (
      <p className="app__instructions">
        Goal: Find the box with the treasure.
        <ul className="app__instructions">
          <li>Opening the hint box costs 25 points.</li>
          <li>
            The quicker you find the box with the treasure, the more points you
            get.
          </li>
        </ul>
      </p>
    );
  }
}

export default AppInstructions;
