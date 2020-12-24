export const types = {
    LOGIN: '@accessibility-lab/login',
    UPDATE_USER: '@accessibility-lab/update_user',
    SET_LAB:  '@accessibility-lab/lab'
};

export const initialState = {
    user: null,
    lab: 0
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.UPDATE_USER:
            return {
                ...state,
                user: action.user
            };
        case types.SET_LAB:
            return {
                ...state,
                lab: action.lab
            };
        default:
            return state;
    }
};

export const actions = {
    login: () => ({ type: types.LOGIN }),
    setLab: (lab) => ({type: types.SET_LAB, lab}),
    updateUser: (user) => ({ type: types.UPDATE_USER, user })
};
