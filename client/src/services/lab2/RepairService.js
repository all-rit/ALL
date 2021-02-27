import API from '../API';

const endpoints = {
    SUBMIT_REPAIR: '/lab2/repair/submit'
};

export default {
    submitRepair: ( background,correctColor,incorrectColorOne,incorrectColorTwo) => {
        return API.postWithBody(process.env.REACT_APP_SERVER_URL + endpoints.SUBMIT_REPAIR, {
            background,correctColor,incorrectColorOne,incorrectColorTwo
        });
    }
};
