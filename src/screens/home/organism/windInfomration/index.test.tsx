import React from 'react';
import {render} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {WindInformation} from './';

const mockStore = configureStore([]);

describe('WindInformation Component', () => {
  it('renders wind information correctly', () => {
    const mockWeather = {
      wind: {speed: 10},
      main: {pressure: 1010, humidity: 70},
      visibility: 10000,
    };

    const store = mockStore({
      weatherReducers: {weather: mockWeather},
    });

    const {getByTestId} = render(
      <Provider store={store}>
        <WindInformation />
      </Provider>,
    );

    const windSpeed = getByTestId('windSpeed');
    const pressure = getByTestId('Pressure');
    const humidity = getByTestId('Humidity');
    const visibility = getByTestId('Visibility');

    expect(windSpeed).toBeDefined();
    expect(pressure).toBeDefined();
    expect(humidity).toBeDefined();
    expect(visibility).toBeDefined();
  });
});
