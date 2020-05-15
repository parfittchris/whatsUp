import { LOGOUT } from './types.js';

const logoutSession = () => ({
    type: LOGOUT
});

export const logout = () => dispatch => dispatch(logoutSession());