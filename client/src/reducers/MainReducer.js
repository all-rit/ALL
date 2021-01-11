export const types = {
    LOGIN: '@accessibility-lab/login',
    UPDATE_USER: '@accessibility-lab/update_user',
    SET_LAB:  '@accessibility-lab/lab'
};

export const initialState = {
    user: null,
    lab: 1  //todo: change this back to 0 when the setLab is being updated correctly
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.UPDATE_USER:
            return {
                ...state,
                user: action.user
            };
        case types.SET_LAB:
            console.log("lab: ", action.lab);
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
