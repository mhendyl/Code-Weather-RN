import axios from 'axios';

export const fetchWeather = async (location: string) => {
  try {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=0d140d08dd97ca5d451ea2d55db8518d`;
    const response = await axios.get(URL);
    console.log('anj response', response.data);
    return response;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
