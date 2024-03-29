import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../../../rtk/rootReducer';
import {View} from 'react-native';
import styles from './styles';
import {TextComponent} from '../../../../components/text';

export const WindInformation = () => {
  const {weather} = useSelector((state: RootState) => state.weatherReducers);
  const windData = weather.wind;
  const mainData = weather.main;
  return (
    <View style={styles.container}>
      <View style={[styles.wrapperWind, styles.firstWrap]}>
        <TextComponent
          label={`Wind: ${windData.speed} mph`}
          testId="windSpeed"
          styleContainerText={styles.textStyling}
        />
        <TextComponent
          label={`Pressure: ${mainData.pressure}`}
          testId="Pressure"
          styleContainerText={styles.textStyling}
        />
      </View>
      <View style={styles.wrapperWind}>
        <TextComponent
          label={`Humidity: ${mainData.humidity}`}
          testId="Humidity"
          styleContainerText={styles.textStyling}
        />
        <TextComponent
          label={`Visibility: ${weather.visibility}`}
          testId="windSpeed"
          styleContainerText={styles.textStyling}
        />
      </View>
    </View>
  );
};
