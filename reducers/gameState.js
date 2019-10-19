import { TOGGLE_ITEM, CHECK_PUZZLE, SET_BOARD, INCREMENT_MOVES } from '../constants/actions';
import { levels } from '../constants/levels';

const initialState = {
    board: [0,0,0,0,0,0,0,0,0],
    puzzles: levels,
    solved: false,
    currentLevel: 0,
    currentMoves: 0
};

const patterns = {
    0: [0,1,3], 
    1: [0,1,2,4],
    2: [1,2,5], 
    3: [0,3,4,6], 
    4: [1,3,4,5,7],
    5: [2,4,5,8], 
    6: [3,6,7],
    7: [4,6,7,8], 
    8: [5,7,8]
}

export function gameState(state = initialState, action) {
    switch(action.type){
        case TOGGLE_ITEM:
            const pressed = action.itemId;
            const board =  state.board.map((curValue,curIndex ) => {
                if(!patterns[pressed].includes(curIndex)){
                    return curValue
                }
                else {
                    return state.board[curIndex] == 0 ? 1 : 0
                }
            })

            return {
                ...state, 
                board
            }  
        
        // when level is changed we need to set the initial starting config to the correct level.
        // current moves should also reset
        // from there, regular editing can be done.
        case SET_BOARD:
            const levelId = action.levelId;
            return {
                ...state, 
                solved: false,
                currentMoves: 0,
                currentLevel: levelId,
                board: levels[levelId]
            }

        case CHECK_PUZZLE:
            var solved = false;
            if (JSON.stringify(state.board) == JSON.stringify([0,0,0,0,0,0,0,0,0])){
                solved = true
            }

            return {
                ...state,
                solved
            }
        
        
        case INCREMENT_MOVES:
            return { 
                ...state,
                currentMoves: state.currentMoves+=1
            }

        /**
         * redux persist can be a pain to use in development because any changes to initalState
         * get overwritten when it rehydrates. So, this just clears that out easily.
         */
        case 'RESET_STATE':
            return initialState;

        
        default:
            return state;
    }
}

