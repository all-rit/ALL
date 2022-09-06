/* eslint-disable max-len */
import API from './API';

const endpoints = {
  COMPLETE_ABOUT: '/completeAbout',
  COMPLETE_READING: '/completeReading',
  COMPLETE_EXERCISE: '/completeExercise',
  COMPLETE_REINFORCEMENT: '/completeReinforcement',
  COMPLETE_QUIZ: '/completeQuiz',
};

const UserLabService = {
  complete_about: (labid) => {
    return API.postWithBody(
        process.env.REACT_APP_SERVER_URL + endpoints.COMPLETE_ABOUT,
        {
          labid,
        },
    );
  },
  complete_reading: (labid) => {
    return API.postWithBody(
        process.env.REACT_APP_SERVER_URL + endpoints.COMPLETE_READING,
        {
          labid,
        },
    );
  },
  complete_exercise: (labid) => {
    return API.postWithBody(
        process.env.REACT_APP_SERVER_URL + endpoints.COMPLETE_EXERCISE,
        {
          labid,
        },
    );
  },
  complete_reinforcement: (labid) => {
    return API.postWithBody(
        process.env.REACT_APP_SERVER_URL + endpoints.COMPLETE_REINFORCEMENT,
        {
          labid,
        },
    );
  },
  complete_quiz: (labid, quizscore, quizresult) => {
    return API.postWithBody(
        process.env.REACT_APP_SERVER_URL + endpoints.COMPLETE_QUIZ,
        {
          labid,
          quizscore,
          quizresult,
        },
    );
  },

  user_complete_about: (userid, labid) => {
    return API.postWithBody(
        process.env.REACT_APP_SERVER_URL +
        `/${userid}` +
        endpoints.COMPLETE_ABOUT,
        {
          userid,
          labid,
        },
    );
  },
  user_complete_reading: (userid, labid) => {
    return API.postWithBody(
        process.env.REACT_APP_SERVER_URL +
        `/${userid}` +
        endpoints.COMPLETE_READING,
        {
          userid,
          labid,
        },
    );
  },
  user_complete_exercise: (userid, labid) => {
    return API.postWithBody(
        process.env.REACT_APP_SERVER_URL +
        `/${userid}` +
        endpoints.COMPLETE_EXERCISE,
        {
          userid,
          labid,
        },
    );
  },
  user_complete_reinforcement: (userid, labid) => {
    return API.postWithBody(
        process.env.REACT_APP_SERVER_URL +
        `/${userid}` +
        endpoints.COMPLETE_REINFORCEMENT,
        {
          userid,
          labid,
        },
    );
  },
  user_complete_quiz: (userid, labid, quizscore) => {
    return API.postWithBody(
        process.env.REACT_APP_SERVER_URL + `/${userid}` + endpoints.COMPLETE_QUIZ,
        {
          userid,
          labid,
          quizscore,
        },
    );
  },
  getUserLabCompletion: (userID, labID) => {
    return API.get(
        process.env.REACT_APP_SERVER_URL + `/user/${userID}/${labID}`,
    )
        .then((response) => response.json())
        .then((json) => json);
  },
  getUserLabRecords: (userID) => {
    return API.get(
        process.env.REACT_APP_SERVER_URL + `/user/${userID}/labrecords`,
    )
        .then((response) => response.json())
        .then((json) => json);
  },
};

export default UserLabService;
