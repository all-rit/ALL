/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */

import React, { useState, useEffect } from "react";
import "../../../../assets/stylesheets/components/Witch.css";
// Changing import to see if relative vs absolute positioning works
import ChatRoom from "./ChatRoom";
import { EXERCISE_PLAYING } from "../../../../constants/lab8";

const StreamWindow = (props) => {
  const { actions } = props;

  const [canContinue, setCanContinue] = useState(false);

  useEffect(() => {
    actions.updateState(EXERCISE_PLAYING);
  }, []);

  const handleModerationComplete = () => {
    setCanContinue(true);
  };

  const handleContinue = () => {
    // submit choices to backend via exercise service
  };

  return (
    <div className="">
      <div
        className="exercise-frame tw-w-full tw-aspect-video"
        // style={{ opacity: 0.5 }}
      >
        <ChatRoom moderationCompleteCallback={handleModerationComplete} />
        {/* right now the div contains a background image */}
      </div>

      <button
        className="btn btn-primary text-uppercase tw-mt-4"
        onClick={handleContinue}
        disabled={!canContinue}
      >
        Continue
      </button>
    </div>
  );
};

export default StreamWindow;
