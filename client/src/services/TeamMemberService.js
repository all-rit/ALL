import API from "./API";

export default {
    getAllTeamMembers: () => {
        return API.get(process.env.REACT_APP_SERVER_URL + `/teammember`)
            .then((response) => response.json())
            .then((json) => json);
    },
    getAllProfessors: () => {
        return API.get(process.env.REACT_APP_SERVER_URL + `/professors`)
            .then((response) => response.json())
            .then((json) => json);
    }
}