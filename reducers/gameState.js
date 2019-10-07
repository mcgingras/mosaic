const initialState = {
    board: [0,0,0,0,0,0,0,0,0]
};

export function gameState(state = initialState, action) {
    switch(action.type){
        case 'TOGGLE_ITEM':
            return state;
        
        default:
            return state;
    }
}

