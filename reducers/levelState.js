import { SET_CURRENT_LEVEL, SET_MAX_LEVEL, UPDATE_LEVEL_METADATA } from '../constants/actions';


/**
 * levelInfo    - metadata about levels that would change state... best time, fewest moves
 * currentLevel - index of level user is currently playing
 * maxLevel     - index of max level user has unlocked. All below are unlocked
 */

const initialState = {
    levelInfo: {},
    currentLevel: 0,
    maxLevel: 0,
    currentMoves: 0
};

export function levelState (state = initialState, action) {
    switch(action.type){
        case SET_CURRENT_LEVEL:
            return {
                ...state,
                currentLevel: action.levelId
            }
        
        case SET_MAX_LEVEL:
            const currentLevel = action.levelId;
            let maxLevel = state.maxLevel;


            if (parseInt(currentLevel) + 1 > maxLevel){
                maxLevel = parseInt(currentLevel) + 1;
            }

            return {
                ...state,
                maxLevel
            }
        
        case UPDATE_LEVEL_METADATA:
            const id = action.levelId;
            const moves = action.moves;

            // level has been completed before
            if (id in state.levelInfo){
                return {
                    ...state,
                    levelInfo: {
                        ...state.levelInfo,
                        [id]: moves < state.levelInfo[id].moves ? {moves} : {moves: state.levelInfo[id].moves}
                    }
                }
            }
            else {
                return {
                    ...state,
                    levelInfo: {
                        ...state.levelInfo,
                        [id]: {
                            moves
                        }
                    }
                }
            }

        case 'RESET_STATE':
            return initialState;

        default:
            return state;
    }
}

