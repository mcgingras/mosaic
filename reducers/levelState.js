import { SET_LEVEL } from '../constants/actions';

/**
 * currentLevel - index of level from level config
 * level configs found in constants/levels
 */
const initialState = {
    currentLevel: 0
};

export function levelState (state = initialState, action) {
    switch(action.type){
        case SET_LEVEL:
            return {
                ...state,
                currentLevel: action.levelId
            }

        default:
            return state;
    }
}

