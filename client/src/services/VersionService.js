import API from "./API";

const versionService = {
  getVersion: () => {
    return API.get(process.env.REACT_APP_SERVER_URL + `/version`)
      .then((response) => response.json())
      .then((json) => json);
  },
};

export default versionService;
