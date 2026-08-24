import API from "./API";

const versionService = {
  getVersion: () => {
    return API.get(import.meta.env.VITE_SERVER_URL + `/version`)
      .then((response) => response.json())
      .then((json) => json);
  },
};

export default versionService;
