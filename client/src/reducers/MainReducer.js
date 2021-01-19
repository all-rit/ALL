export const types = {
    LOGIN: '@accessibility-lab/login',
    UPDATE_USER: '@accessibility-lab/update_user',
    SET_LAB:  '@accessibility-lab/lab',
    SET_BODY: '@accessibility-lab/app/set_body'
};

export const initialState = {
    user: null,
    lab: 0,
    body: 0
};

export default (state = initialState, action) => {
    switch (action.type){
        case types.SET_BODY:
            return {
                ...state,
                body: action.body
            };
        case types.UPDATE_USER:
            return {
                ...state,
                user: action.user
            };
        case types.SET_LAB:
            return {
                ...state,
                lab: action.lab,
                body: 0
            };
        default:
            return state;
    }
};

export const actions = {
    setBody: (body) => ({type: types.SET_BODY, body}),
    login: () => ({ type: types.LOGIN }),
    setLab: (lab) => ({type: types.SET_LAB, lab}),
    updateUser: (user) => ({ type: types.UPDATE_USER, user })
};
