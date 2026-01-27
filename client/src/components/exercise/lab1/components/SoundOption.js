/* eslint-disable react/prop-types */
import React, { Component } from "react";
import classNames from "classnames/bind";

class SoundOption extends Component {
  render() {
    const { enabled, blocked, toggleSoundHandler } = this.props;
    const classes = classNames({
      sound_icon: true,
      "sound_icon--off": !enabled,
      "sound_icon--disabled": blocked,
    });
    const message = enabled
      ? "Sound is enabled."
      : "Sound is disabled (to emulate experience for Deaf/HoH users).";

    return (
      <div className="tw-pt-6">
        <svg
          className={classes}
          onClick={!blocked ? toggleSoundHandler : null}
        />
        <span className="sound_icon__message tw-text-nowrap">{message}</span>
      </div>
    );
  }
}

export default SoundOption;
