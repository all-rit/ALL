import API from "../API";

const endpoints = {
  SUBMIT_CHOICE: "/lab5/exercise/choice",
};

const ExerciseService = {
  submitChoice: (correct, question, selectedoption, options) => {
    return API.postWithBody(
      import.meta.env.VITE_SERVER_URL + endpoints.SUBMIT_CHOICE,
      {
        correct,
        question,
        selectedoption,
        options,
      },
    );
  },
};

export default ExerciseService;
