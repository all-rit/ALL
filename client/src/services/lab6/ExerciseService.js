/* eslint-disable no-undef */
import API from "../API";

const endpoints = {
  SUBMIT_AVATAR: "/lab6/exercise/avatar",
  SUBMIT_QUAL_QUESTIONS: "/lab6/exercise/qualquestions",
  SUBMIT_AI_ANALYSIS_QUESTION: "/lab6/exercise/aianalysisquestion",
  SUBMIT_HIRED_CANIDATES: "/lab6/exercise/hiredcanidates",
  SUBMIT_AI_REASONING_QUESTIONS: "/lab6/exercise/aireasoningquestion",
  SUBMIT_FIXED_HIRED_CANIDATES: "/lab6/exercise/fixedhiredcanidates",
};

const ExerciseService = {
  submitAvatar: (avatar) => {
    return API.postWithBody(
      process.env.REACT_APP_SERVER_URL + endpoints.SUBMIT_AVATAR,
      {
        avatar,
      }
    );
  },
  submitQualQuestions: (qualQuestions) => {
    return API.postWithBody(
      process.env.REACT_APP_SERVER_URL + endpoints.SUBMIT_QUAL_QUESTIONS,
      {
        qualQuestions,
      }
    );
  },
  submitAIAnalysisQuestion: (aiAnalysisQuestion) => {
    return API.postWithBody(
      process.env.REACT_APP_SERVER_URL + endpoints.SUBMIT_AI_ANALYSIS_QUESTION,
      {
        aiAnalysisQuestion,
      }
    );
  },
  submitHiredCanidates: (hiredCanidates) => {
    return API.postWithBody(
      process.env.REACT_APP_SERVER_URL + endpoints.SUBMIT_HIRED_CANIDATES,
      {
        hiredCanidates,
      }
    );
  },
  submitAIReasoningQuestion: (aiReasoningQuestion) => {
    return API.postWithBody(
      process.env.REACT_APP_SERVER_URL +
        endpoints.SUBMIT_AI_REASONING_QUESTIONS,
      {
        aiReasoningQuestion,
      }
    );
  },
  submitFixedHiredCanidates: (fixedHiredCanidates) => {
    return API.postWithBody(
      process.env.REACT_APP_SERVER_URL + endpoints.SUBMIT_FIXED_HIRED_CANIDATES,
      {
        fixedHiredCanidates,
      }
    );
  },
};

export default ExerciseService;
