import API from '../API';

const prefix = {
  POST_SUFFIX: "submit",
  LAB_PREFIX: `${import.meta.env.VITE_SERVER_URL}/lab16`,
};

const resource = {
  EXERCISE: `${prefix.LAB_PREFIX}/exercise`,
};

const endpoints = {
  GET_EXERCISE: resource.EXERCISE,
  POST_EXERCISE: `${resource.EXERCISE}/${prefix.POST_SUFFIX}`,
    //Save Chat Reply endpoints needed (from Imagine 2026)
  SAVE_CHAT: `${resource.EXERCISE}/postChatReply`,
    //Save teammate information endpoints needed (new function)
  SAVE_TEAMMATE: `${resource.EXERCISE}/saveTeammate`
};


const ExerciseService = {
    fetchExercise: async (data = {}) => {
    try {
      const getRoute = `${endpoints.GET_EXERCISE}/${data.userid}`;
      return API.get(getRoute).then((response) => {
        return response.json();
      });
    } catch (error) {
      console.error(error);
    }
    },
    submitExercise: async (data) => {
    try {
      const body = {
        userID: data.userid,
        isExerciseComplete: data.isExerciseComplete,
        hasViewed: data.hasViewed,
      };
      const response = await API.postWithBody(endpoints.POST_EXERCISE, body);
      return response.status;
    } catch (error) {
      console.error(error);
    }
    },

    //Save Chat Reply endpoint (from Imagine 2026)

    //Save teammate information endpoint (new function)
    saveTeammate: async (data) => {
      try {
        
        const body = {
        userID: data.userID,
        teammateInfo: data.teammateInfo
        }
        
        const response = await API.postWithBody(endpoints.SAVE_TEAMMATE,body);
        return response.status

      } catch (error) {

        console.log(error)

      }
    
    },

    postChatReply: async (data) => {
          try{
            const body = {
            userID: data.userid,
            reply: data.reply 
          };
          const response = await API.postWithBody(endpoints.SAVE_CHAT, body);
          return response.status;
          } catch (error) {
            console.error(error);
          }
      },
    //Save teammate information endpoint (new function)   
};

export { ExerciseService };