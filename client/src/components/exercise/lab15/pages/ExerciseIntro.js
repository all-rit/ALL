import { navigate } from "@reach/router";

const ExerciseIntro = () => {
  return (
    <button onClick={() => navigate("model-hallucination")}>
      Start Exercise
    </button>
  );
};

export default ExerciseIntro;
