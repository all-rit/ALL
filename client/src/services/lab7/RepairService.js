import API from '../API';

const endpoints = {
    SUBMIT_REPAIR: '/lab7/repair/submit'
};

const RepairService = {
    submitRepair: (activity, repair) => {
        return API.postWithBody(process.env.REACT_APP_SERVER_URL + endpoints.SUBMIT_REPAIR, {
            activity, repair
        })
    }
};

export default RepairService;

