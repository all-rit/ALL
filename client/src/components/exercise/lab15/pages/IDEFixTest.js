import { navigate } from "@reach/router";

const IDEFixTest = () => {
  return (
    <div>
      <h1>IDE Fix Test</h1>
      <button onClick={() => navigate("/Lab15/Exercise/prompt-builder")}>
        Next
      </button>
    </div>
  );
};

export default IDEFixTest;
