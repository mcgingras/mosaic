import { TOGGLE_ITEM, CHECK_PUZZLE, FONT_LOADED,
         SET_CURRENT_LEVEL, SET_MAX_LEVEL, SET_BOARD,
         INCREMENT_MOVES } from '../constants/actions';


/**
 * 
 * @param {int} itemId 
 * toggles item itemId in the board.
 * 0 for off, 1 for on. Although you don't pass this in (uses prev state).
 */
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

export function setCurrentLevel(levelId){
    return {
        type: SET_CURRENT_LEVEL,
        levelId
    }
}

/**
 * 
 * @param {int} levelId
 * when a user completes a level, we update the max level they have reached.
 * Only levels of maxLevel and below are playable.
 */
export function setMaxLevel(levelId){
    return {
        type: SET_MAX_LEVEL,
        levelId
    }
}

export function incrementMoves(levelId){
    return {
        type: INCREMENT_MOVES,
        levelId
    }
}

/**
 * 
 * @param {int} levelId 
 * when a board is selected from levelList, we need to update the initial gameState
 */
export function setBoardToLevel(levelId){
    return {
        type: SET_BOARD,
        levelId
    }
}
