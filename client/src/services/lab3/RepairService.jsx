import API from '../API';

const endpoints = {
  SUBMIT_REPAIR: '/lab3/repair/submit',
};

const RepairService = {
  submitRepair: (cowAltValue, carAltValue, burgerAltValue, catAltValue) => {
    return API.postWithBody(
      import.meta.env.VITE_REACT_APP_SERVER_URL + endpoints.SUBMIT_REPAIR,
      {
        cowAltValue,
        carAltValue,
        burgerAltValue,
        catAltValue,
      },
    );
  },
};

export default RepairService;
