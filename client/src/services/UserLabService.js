import API from './API';

const endpoints = {
    COMPLETE_ABOUT: '/completeAbout',
    COMPLETE_READING: '/completeReading',
    COMPLETE_GAME: '/completeGame',
    COMPLETE_REINFORCEMENT: '/completeReinforcement',
    COMPLETE_QUIZ: '/completeQuiz'
};

export default {
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
    complete_game: (labid) => {
        return API.postWithBody(process.env.REACT_APP_SERVER_URL + endpoints.COMPLETE_GAME, {
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
