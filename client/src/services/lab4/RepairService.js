import API from '../API';

const endpoints = {
    SUBMIT_REPAIR_BUTTON: '/lab4/repair/submit/button',
    SUBMIT_REPAIR_SKIP: '/lab4/repair/submit/skip',
    SUBMIT_REPAIR_FORM: '/lab4/repair/submit/form',
};

export default {
    submitRepairButton: (height, width) => {
        return API.postWithBody(process.env.REACT_APP_SERVER_URL + endpoints.SUBMIT_REPAIR_BUTTON, {
            height, width
        });
    }
};
