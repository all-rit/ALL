import { navigate } from "@reach/router";

const GoodPromptingGuide = () => {
  return (
    <div>
      <h1>Good Prompting Guide</h1>
      <button onClick={() => navigate("/Lab15/Exercise/model-repair")}>
        Next
      </button>
    </div>
  );
};

export default GoodPromptingGuide;
