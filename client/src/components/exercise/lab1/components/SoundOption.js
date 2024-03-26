import React from "react";
import classNames from "classnames/bind";
import PropTypes from "prop-types";

/**
 * Represents a sound option component.
 *
 * @param {Object} props - The component props.
 * @param {boolean} props.enabled - Indicates whether the sound is enabled.
 * @param {boolean} props.blocked - Indicates whether the sound is blocked.
 * @param {Function} props.toggleSoundHandler - The function to toggle the sound.
 * @returns {JSX.Element} The sound option component.
 */
const SoundOption = ({ enabled, blocked, toggleSoundHandler }) => {
  const classes = classNames({
    sound_icon: true,
    "sound_icon--off": !enabled,
    "sound_icon--disabled": blocked,
  });
  const message = enabled
    ? "Sound is enabled."
    : "Sound is disabled (to emulate experience for Deaf/HoH users).";

  return (
    <div className="sound_icon-container">
      <svg className={classes} onClick={!blocked ? toggleSoundHandler : null} />
      <span className="sound_icon__message">{message}</span>
    </div>
  );
};

SoundOption.propTypes = {
  enabled: PropTypes.bool.isRequired,
  blocked: PropTypes.bool.isRequired,
  toggleSoundHandler: PropTypes.func.isRequired,
};

export default SoundOption;
