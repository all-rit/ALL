import React from "react";
import SoundOption from "./SoundOption";
import { useLab1StateContext } from "src/reducers/lab1/Lab1Context";
import { EXERCISE_PLAYING } from "src/constants/index";

/**
 * Represents the header component for the Sound section in Lab 1.
 * @component
 */
const SoundHeader = () => {
  const { state: lab1State, actions: lab1Actions } = useLab1StateContext();

  /**
   * Indicates whether the sound is blocked.
   * Sound is considered blocked if the user state is EXERCISE_PLAYING or if the number of plays is less than or equal to 2.
   *
   * @type {boolean}
   */
  const soundBlocked =
    lab1State.exerciseState === EXERCISE_PLAYING || lab1State.plays <= 2;
  // const loginEnabled = !(plays > 0 || (plays === 0 && state !== EXERCISE_IDLE));

  return (
    <header>
      <div>
        <SoundOption
          blocked={soundBlocked}
          enabled={lab1State.soundEnabled}
          toggleSoundHandler={lab1Actions.toggleSoundHandler}
        />
      </div>
    </header>
  );
};

export default SoundHeader;
