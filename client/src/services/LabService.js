import API from "./API";

export default {
    getAllLabs: () => {
        return API.get(process.env.REACT_APP_SERVER_URL + `/lab`)
            .then((response) => response.json())
            .then((json) => json);
    }
}