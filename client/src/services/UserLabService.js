import API from './API';

const endpoints = {
    COMPLETE_ABOUT: '/completeAbout',
    COMPLETE_READING: '/completeReading',
    COMPLETE_EXERCISE: '/completeExercise',
    COMPLETE_REINFORCEMENT: '/completeReinforcement',
    COMPLETE_QUIZ: '/completeQuiz'
};

const UserLabService = {
    complete_about: (labid) => {
        return API.postWithBody(process.env.REACT_APP_SERVER_URL + endpoints.COMPLETE_ABOUT, {
            labid
        });
    },
    complete_reading: (labid) => {
        return API.postWithBody(process.env.REACT_APP_SERVER_URL + endpoints.COMPLETE_READING, {
            labid
        });
    },
    complete_exercise: (labid) => {
        return API.postWithBody(process.env.REACT_APP_SERVER_URL + endpoints.COMPLETE_EXERCISE, {
            labid
        });
    },
    complete_reinforcement: (labid) => {
        return API.postWithBody(process.env.REACT_APP_SERVER_URL + endpoints.COMPLETE_REINFORCEMENT, {
            labid
        });
    },
    complete_quiz: (labid, quizscore, quizresult) => {
        return API.postWithBody(process.env.REACT_APP_SERVER_URL + endpoints.COMPLETE_QUIZ, {
            labid,
            quizscore,
            quizresult
        });
    }
}

export default UserLabService;

