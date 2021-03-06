import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import weather from './weatherReducer';
import session from './sessionReducer';


const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
    weather,
    session
});

export default persistReducer(persistConfig, rootReducer);
// export default rootReducer;