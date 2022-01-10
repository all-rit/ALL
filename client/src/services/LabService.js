import API from "./API";

const labService = {
    getAllLabs: () => {
        return API.get(process.env.REACT_APP_SERVER_URL + `/lab`)
            .then((response) => response.json())
            .then((json) => json);
    }
}

export default labService;