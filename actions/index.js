const TOGGLE_ITEM = 'TOGGLE_ITEM';
const CHECK_PUZZLE = 'CHECK_PUZZLE';

export function toggleItem(itemId){
    return {
        type: TOGGLE_ITEM,
        itemId
    }
}

export function checkIfSolved(){
    return {
        type: CHECK_PUZZLE
    }
}