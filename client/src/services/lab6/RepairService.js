/* eslint-disable no-undef */
import API from "../API";

const endpoints = {
  SUBMIT_REPAIR: "/lab6/repair/submit",
};

const RepairService = {
  submitRepair: (appearance, yearsexperience, availability, expectedpay) => {
    return API.postWithBody(
      process.env.REACT_APP_SERVER_URL + endpoints.SUBMIT_REPAIR,
      {
        appearance,
        yearsexperience,
        availability,
        expectedpay,
      }
    );
  },
};

export default RepairService;
