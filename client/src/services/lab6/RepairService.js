/* eslint-disable no-undef */
import API from "../API";

const endpoints = {
  SUBMIT_REPAIR: "/lab6/repair/submit",
  GET_REPAIR: "/lab6/repair/",
};

const RepairService = {
  submitRepair: (
    userid,
    appearance,
    yearsexperience,
    availability,
    expectedpay
  ) => {
    return API.postWithBody(
      process.env.REACT_APP_SERVER_URL + endpoints.SUBMIT_REPAIR,
      {
        userid,
        appearance,
        yearsexperience,
        availability,
        expectedpay,
      }
    );
  },
  getUserRepair: (userID) => {
    return API.get(
      process.env.REACT_APP_SERVER_URL + endpoints.GET_REPAIR + `${userID}`
    ).then((response) => response.json());
  },
};

export default RepairService;
