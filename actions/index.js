import { TOGGLE_ITEM, CHECK_PUZZLE } from '../constants/actions';

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