import { LOGOUT } from '../actions/types';
import { merge } from 'lodash';

const weatherReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case LOGOUT:
            return {}
        default:
            return state
    }
}

export default weatherReducer;