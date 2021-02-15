import API from '../API';

const endpoints = {
    SUBMIT_REPAIR: '/lab5/repair/submit'
};

export default {
    submitRepair: (h1value,
                   ulvalue,
                   classvalue,
                   fontvalue,
                   fontfamilyvalue) => {
        return API.postWithBody(process.env.REACT_APP_SERVER_URL + endpoints.SUBMIT_REPAIR, {
            h1value,
            ulvalue,
            classvalue,
            fontvalue,
            fontfamilyvalue
        })
    }
};