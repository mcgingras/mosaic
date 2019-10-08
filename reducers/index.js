import { combineReducers } from "redux"
import {gameState} from './gameState';
import {fontState} from './fontState';
import {levelState} from './levelState';

const rootReducer = combineReducers({
    gameState,
    fontState,
    levelState
})

export default rootReducer;