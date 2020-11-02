import API from './API';

const endpoints = {
    START_LAB: '/startlab',
    COMPLETE_LAB: '/completelab',
    QUIZ_SCORE: '/quizscore',
};

export default {
    start_lab: (labid) => {
        return API.postWithBody(process.env.REACT_APP_SERVER_URL + endpoints.START_LAB, {
            labid
        });
    },
    complete_lab: (labid) => {
        return API.postWithBody(process.env.REACT_APP_SERVER_URL + endpoints.COMPLETE_LAB, {
            labid
        });
    },
    quiz_score: (labid, quizscore) => {
        return API.postWithBody(process.env.REACT_APP_SERVER_URL + endpoints.QUIZ_SCORE, {
            labid,
            quizscore
        });
    }
}
