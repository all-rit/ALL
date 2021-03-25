import {
    GAME_IDLE
} from '../../constants/lab4/index';

export const types = {
    UPDATE_STATE: '@accessibility-lab/lab4/game/update_state',
    ENABLE_END: '@accessibility-lab/lab4/game/enable_end'
};

export const initialState = {
    state: GAME_IDLE,
    end: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.UPDATE_STATE:
            return {
                ...state,
                state: action.state
            };
        case types.ENABLE_END:
            return {
                ...state,
                end: action.state
            };

        default:
            return state;
    }
};

export const actions = {
    updateState: (state) => ({ type: types.UPDATE_STATE, state }),
    enableEnd: (state) => ({ type: types.ENABLE_END, state })
};
