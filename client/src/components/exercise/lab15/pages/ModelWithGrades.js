import { navigate } from "@reach/router";

const ModelWithGrades = () => {
  return (
    <div>
      <h1>Model with Grades</h1>
      <button onClick={() => navigate("/Lab15/Exercise/conclusion")}>
        Next
      </button>
    </div>
  );
};

export default ModelWithGrades;
