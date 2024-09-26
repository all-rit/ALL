// Exercise Instructions (Page #1)

import React from "react";
import { navigate } from "@reach/router";

const PreDbRepair = () => {
  const handleContinue = () => {
    navigate("/Lab12/Exercise/DatabaseRepair");
  };

  return (
    <div className="center-div">
      <div className="guidance margin-bottom-2">
        <p className="playthrough__sentence">
          Hm, that doesnt look right. The diploma hasnt changed even though we
          updated the form.
        </p>
        <p className="playthrough__sentence">
          Thats because we need to update the database table as well to take in
          the newly available preferredName and pronouns values.
        </p>
      </div>
      <div className="playthrough__sentence">
        Click the &quot;Start&quot; button to repair the database!
      </div>
      <div className="tw-flex tw-justify-evenly">
        <button
          className="btn btn-primary text-black btn-xl text-uppercase"
          onClick={handleContinue}
          key="start"
        >
          Start
        </button>
      </div>
    </div>
  );
};

export default PreDbRepair;
