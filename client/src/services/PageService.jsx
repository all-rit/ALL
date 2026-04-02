import API from './API';

const endpoints = {
  CREATE_PAGE: '/page/complete',
};

export const PageService = {
  createPage: (pagename, completiontime, labid) => {
    return API.postWithBody(
      import.meta.env.VITE_REACT_APP_SERVER_URL + endpoints.CREATE_PAGE,
      {
        pagename,
        completiontime,
        labid,
      },
    );
  },
};
