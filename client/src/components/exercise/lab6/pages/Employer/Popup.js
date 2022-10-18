/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import { navigate } from "@reach/router";

const Popup = (props) => {
  const handleBack = () => {
    navigate("/Lab6/Exercise/HiringCandidate1");
  };

  const handleNext = () => {
    navigate("/Lab6/Exercise/HiringCandidate2");
  };

  return (
    <div>
      <div className="tw-p-5 tw-text-center">
        <h3>Are you sure this is your selection? The AI advises against it.</h3>
      </div>

      <button onClick={handleBack}>No - Back to Selection</button>

      <button onClick={handleNext}>Yes- Next Candidate</button>
    </div>
  );
};

export default Popup;
