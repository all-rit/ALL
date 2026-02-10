import { navigate } from "@reach/router";

const ModelHallucination = () => {
  return (
    <div>
      <h1>Model Hallucination</h1>
      <button onClick={() => navigate("/Lab15/Exercise/good-prompting-guide")}>
        Next
      </button>
    </div>
  );
};

export default ModelHallucination;
