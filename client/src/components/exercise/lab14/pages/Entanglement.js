import { React } from "react";
import { navigate } from "@reach/router";

const Entanglement = () => {
  const handleContinue = () => {
    navigate("/Lab14/Exercise/CaesarEncryption");
  };

  return (
    <div>
      Entanglement Page
      <button onClick={handleContinue}>Next</button>
    </div>
  );
};

export default Entanglement;
