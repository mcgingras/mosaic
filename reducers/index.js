import { combineReducers } from "redux"
import {gameState} from './gameState';
import {fontState} from './fontState';

const rootReducer = combineReducers({
    gameState,
    fontState
})

export default rootReducer;