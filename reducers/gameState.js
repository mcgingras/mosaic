import { TOGGLE_ITEM, CHECK_PUZZLE } from '../constants/actions';
import { levels } from '../constants/levels';

const initialState = {
    board: [0,0,0,0,0,0,0,0,0],
    puzzles: levels,
    solved: false,
};

const patterns = {
    0: [0,1,3], 
    1: [1,3,4,5],
    2: [2,4,5], 
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
        
        case CHECK_PUZZLE:
            var solved = false;
            if (JSON.stringify(state.puzzles[0]) == JSON.stringify(state.board)){
                solved = true
            }

            return {
                ...state,
                solved
            }

        
        default:
            return state;
    }
}

