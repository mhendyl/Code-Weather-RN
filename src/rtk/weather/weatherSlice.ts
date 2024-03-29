import {createSlice} from '@reduxjs/toolkit';
import {weatherInitialState} from './models/initialState';
import {weatherThunk} from './thunk';

export const weatherSlice = createSlice({
  name: 'weather',
  initialState: weatherInitialState,
  reducers: {
    setMatrix: (state, {payload}) => {
      state.matrix = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(weatherThunk.fulfilled, (state, action) => {
        console.log('asd', action);
        state.isLoading = false;
        state.weather = action.payload;
      })
      .addCase(weatherThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(weatherThunk.rejected, state => {
        state.isLoading = false;
        state.weather = null;
        state.error = state.error;
      });
  },
});

export const {setMatrix} = weatherSlice.actions;
export const weatherReducer = weatherSlice.reducer;
