import {createAsyncThunk} from '@reduxjs/toolkit';
// import {handleErrors} from '../../../api/handleError';
// import {CustomError} from '../../../api/handleError/models';
import axios from 'axios';

// export const weatherThunk = createAsyncThunk(
//   'weather/getWeather',
//   async ({location}: {location: string}) => {
//     const URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=0d140d08dd97ca5d451ea2d55db8518d`;
//     try {
//       const response: any = await axios.get(URL);
//       return response?.data;
//     } catch (error) {
//       return handleErrors(error as CustomError);
//     }
//   },
// );
export const weatherThunk = createAsyncThunk(
  'weather/getWeather',
  async ({location}: {location: string}) => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=0d140d08dd97ca5d451ea2d55db8518d`;

    try {
      const response = await axios.get(URL, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
);
