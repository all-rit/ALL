import API from "./API";

const teamMemberService = {
  getAllTeamMembers: () => {
    return API.get(import.meta.env.VITE_SERVER_URL + `/teammember`)
      .then((response) => response.json())
      .then((json) => json);
  },
  getAllProfessors: () => {
    return API.get(import.meta.env.VITE_SERVER_URL + `/professors`)
      .then((response) => response.json())
      .then((json) => json);
  },
  getAllAlumni: () => {
    return API.get(import.meta.env.VITE_SERVER_URL + `/alumni`)
      .then((response) => response.json())
      .then((json) => json);
  },
  getAllDevPartners: () => {
    return API.get(import.meta.env.VITE_SERVER_URL + `/devPartners`)
      .then((response) => response.json())
      .then((json) => json);
  },
  getAllSchools: () => {
    return API.get(import.meta.env.VITE_SERVER_URL + `/schools`)
      .then((response) => response.json())
      .then((json) => json);
  },
};

export default teamMemberService;
