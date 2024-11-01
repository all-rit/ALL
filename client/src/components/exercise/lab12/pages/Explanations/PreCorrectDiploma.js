// Pre Correct Diploma (Page #4)

import { navigate } from "@reach/router";
import React from "react";

const PreCorrectDiploma = () => {
  const handleContinue = () => {
    navigate(`/Lab12/Exercise/Diploma`);
  };

  return (
    <div className="center-div">
      <div className="guidance margin-bottom-2">
        <p className="playthrough__sentence">
          This time, after being prompted for your preferred name and pronouns,
          and the database being updated to reflect these changes, your official
          ALL University diploma reflects your correct pronouns AND preferred
          name!
        </p>
      </div>
      <div className="playthrough__sentence">
        Click the &quot;Next&quot; button!
      </div>
      <div className="tw-flex tw-justify-evenly">
        <button
          className="btn btn-primary text-black btn-xl text-uppercase "
          onClick={handleContinue}
          key="start"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PreCorrectDiploma;
