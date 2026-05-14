import API from "../API";

const prefix = {
  POST_SUFFIX: "submit",
  LAB_PREFIX: `${process.env.REACT_APP_SERVER_URL}/lab15`,
};

const resources = {
  REPAIR: `${prefix.LAB_PREFIX}/repair`,
};

const endpoints = {
  REPAIR: resources.REPAIR,
  POST_REPAIR: `${resources.REPAIR}/${prefix.POST_SUFFIX}`,
};

const RepairService = {
  submitRepair: async (data = {}) => {
    try {
      const body = {
        userID: data.userid,
        repair: data.repair,
        section: data.section,
        isComplete: data.isComplete,
      };
      return await API.postWithBody(endpoints.POST_REPAIR, body);
    } catch (error) {
      console.error(error);
    }
  },

  getRepair: async (data = {}, section) => {
    try {
      const getRoute = `${endpoints.REPAIR}/${data.userid}/${section}`;
      return await API.get(getRoute).then((response) => response.json());
    } catch (error) {
      console.error(error);
    }
  },
};

export { RepairService, endpoints };
