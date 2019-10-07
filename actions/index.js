import { TOGGLE_ITEM, CHECK_PUZZLE, FONT_LOADED } from '../constants/actions';

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

export function fontLoaded(){
    return {
        type: FONT_LOADED
    }
}