import {combineReducers} from '@reduxjs/toolkit';
import {weatherReducer} from './weather/weatherSlice';

const rootReducer = combineReducers({
  weatherReducers: weatherReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
