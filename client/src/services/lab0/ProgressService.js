import API from "../API";

const endpoints = {
  GET_PROGRESS: "/lab0/progress",
  SUBMIT_PROGRESS: "/lab0/progress/submit",
};

const ProgressService = {
  getProgress: (userID) => {
    return API.get(
      `${import.meta.env.VITE_SERVER_URL}${endpoints.GET_PROGRESS}/${userID}`,
    ).then((res) => res.json());
  },
  submitProgress: (userID, category, section, sectionStatus) => {
    return API.postWithBody(
      `${import.meta.env.VITE_SERVER_URL}${endpoints.SUBMIT_PROGRESS}`,
      {
        userID: userID,
        category: category,
        section: section,
        sectionStatus: sectionStatus,
      },
    );
  },
};

export default ProgressService;
