import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Playthrough.css';

import { updateSoundStatus } from '../GameActions';

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = {
  updateSoundStatus
};

class SecondPlaythrough extends Component {
  componentWillMount() {
    const { updateSoundStatus } = this.props;

    updateSoundStatus(false);
  }

  render() {
    return (
      <div className="playthrough">
        <div className="playthrough__title">Second Playthrough</div>
        <div className="playthrough__content">
          <p>Nice work in your first playthrough. The game must been a breeze for you if you depended on your hearing for the audio cues.</p>

          <p>However, users with a hearing impairment will face difficulties with applications utilizing audio cues.</p>

          <p>[placeholder info]</p>

          <p>In your second playthrough, you will play with audio turned off. When you're ready, click the "Start" button!</p>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SecondPlaythrough);
