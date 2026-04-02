import API from '../API';

const endpoints = {
  SUBMIT_REPAIR: '/lab5/repair/submit',
};

const RepairService = {
  submitRepair: (activity, repair) => {
    return API.postWithBody(
      import.meta.env.VITE_REACT_APP_SERVER_URL + endpoints.SUBMIT_REPAIR,
      {
        activity,
        repair,
      },
    );
  },
};

export default RepairService;
