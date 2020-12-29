import {API} from './API';

const endpoints = {
    CREATE_PAGE: '/page/complete'
};

const labid;

export const PageService = {
    createPage: (pagename, completiontime) => {
        return API.postWithBody(process.env.REACT_APP_SERVER_URL + endpoints.CREATE_PAGE, {
            pagename,
            completiontime,
            labid
        });
    },
}
