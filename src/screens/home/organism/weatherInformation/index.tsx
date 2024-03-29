import React from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../../../rtk/rootReducer';
import {setIcons} from '../../../../utils';
import {TextComponent} from '../../../../components/text';
import styles from './styles';
import {tempCalculator} from '../../../../utils/tempCalculator';

export const WeatherDetail = () => {
  const {weather, matrix} = useSelector(
    (state: RootState) => state.weatherReducers,
  );
  return (
    <View style={styles.container}>
      <View style={styles.wrapperWeather}>
        {setIcons(weather.weather[0].main, 50, 50)}
        <View style={styles.wrapperDetail}>
          <TextComponent
            label={weather.weather[0].main}
            testId="weather text"
            styleContainerText={styles.textMainWeather}
          />
          <TextComponent
            label={weather.weather[0].description}
            testId="weather description"
            styleContainerText={styles.textWeatherDesc}
          />
        </View>
      </View>
      <View style={styles.wrapperTemperature}>
        <TextComponent
          label={`${tempCalculator(
            weather?.main?.temp,
            matrix,
          )} ${matrix.charAt(0)}`}
          testId="weather temp"
          styleContainerText={styles.textTemperature}
        />
      </View>
    </View>
  );
};
