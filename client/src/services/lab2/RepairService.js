import API from "../API";

const endpoints = {
  SUBMIT_REPAIR: "/lab2/repair/submit",
};

const RepairService = {
  submitRepair: (
    background,
    correctColor,
    incorrectColorOne,
    incorrectColorTwo,
  ) => {
    return API.postWithBody(
      import.meta.env.VITE_SERVER_URL + endpoints.SUBMIT_REPAIR,
      {
        background,
        correctColor,
        incorrectColorOne,
        incorrectColorTwo,
      },
    );
  },
};

export default RepairService;
