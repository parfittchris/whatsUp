import { UPDATE_WEATHER } from './types.js';

const updateCurrentWeather = weather => ({
    type: UPDATE_WEATHER,
    weather
});

export const updateWeather = weather => dispatch => dispatch(updateCurrentWeather(weather));