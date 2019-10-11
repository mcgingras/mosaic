import { SET_CURRENT_LEVEL, SET_MAX_LEVEL, INCREMENT_MOVES } from '../constants/actions';


/**
 * levelInfo    - metadata about levels that would change state... best time, fewest moves
 * currentLevel - index of level user is currently playing
 * maxLevel     - index of max level user has unlocked. All below are unlocked
 */

const initialState = {
    levelInfo: {},
    currentLevel: 0,
    maxLevel: 0
};

export function levelState (state = initialState, action) {
    switch(action.type){
        case SET_CURRENT_LEVEL:
            return {
                ...state,
                currentLevel: action.levelId
            }
        
        case SET_MAX_LEVEL:
            return {
                ...state,
                maxLevel: action.levelId
            }
        
        case INCREMENT_MOVES:
            const id = action.levelId;
            return {
                ...state,
                levelInfo: {
                    ...state.levelInfo,
                    [id]: {
                        moves: action.levelId.moves++
                    }
                }
            }

        default:
            return state;
    }
}

