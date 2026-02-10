import { navigate } from "@reach/router";

const ModelRepair = () => {
  return (
    <div>
      <h1>Model Repair</h1>
      <button onClick={() => navigate("/Lab15/Exercise/model-with-grades")}>
        Next
      </button>
    </div>
  );
};

export default ModelRepair;
