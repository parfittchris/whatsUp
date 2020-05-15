import { UPDATE_WEATHER } from '../actions/types';
import { merge } from 'lodash';

const weatherReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case UPDATE_WEATHER:
            return merge({}, state, action.weather)
        default:
            return state
    }
}

export default weatherReducer;