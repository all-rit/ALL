import API from "./API";

const LabService = {
    getAllLabs: () => {
        return API.get(process.env.REACT_APP_SERVER_URL + `/lab`)
            .then((response) => response.json())
            .then((json) => json);
    }
}

export default LabService;
