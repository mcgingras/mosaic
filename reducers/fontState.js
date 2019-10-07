import { FONT_LOADED } from '../constants/actions';

const initialState = {
    loaded: false
};

export function fontState(state = initialState, action) {
    switch(action.type){
        // should use async pattern for this
        case FONT_LOADED:
            return {
                ...state,
                loaded: true
            }

        default:
            return state;
    }
}

