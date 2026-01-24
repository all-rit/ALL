import { React } from "react";
import { startExercise } from "src/reducers/lab2/actions";
import { navigate } from "@reach/router";

const HaloExplination = () => {
  const handleContinue = () => {
    startExercise();
    navigate("/Lab13/Exercise/AIandSearchPanel");
  };

  return (
    <div>
      Halo Effect Explination Page
      <button onClick={handleContinue}>Next</button>
    </div>
  );
};

export default HaloExplination;
