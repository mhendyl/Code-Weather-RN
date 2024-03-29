import {render} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {WeatherDetail} from '.';

const mockStore = configureStore([]);

describe('WeatherDetail Component', () => {
  it('renders weather details correctly', () => {
    const mockWeather = {
      weather: [{main: 'Clear', description: 'Clear sky'}],
      main: {temp: '25'},
    };

    const store = mockStore({
      weatherReducers: {weather: mockWeather},
    });

    const {getByTestId} = render(
      <Provider store={store}>
        <WeatherDetail />
      </Provider>,
    );

    const weatherText = getByTestId('weather text');
    const weatherDesc = getByTestId('weather description');
    const weatherTemp = getByTestId('weather temp');

    expect(weatherText).toBeDefined();
    expect(weatherDesc).toBeDefined();
    expect(weatherTemp).toBeDefined();
  });
});
