import API from '../API';

const endpoints = {
    SUBMIT_REPAIR: '/lab5/repair/submit'
};

export default {
    submitRepair: (availableMessage, unavailableMessage, availableBackgroundColor, unavailableBackgroundColor) => {
        return API.postWithBody(process.env.REACT_APP_SERVER_URL + endpoints.SUBMIT_REPAIR, {
            availableMessage,
            unavailableMessage,
            availableBackgroundColor,
            unavailableBackgroundColor
        });
    }
};