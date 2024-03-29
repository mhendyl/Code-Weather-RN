import React from 'react';
import {View} from 'react-native';
import {SearchLocation} from './moleculs/searchLocation';
import {useDispatch, useSelector} from 'react-redux';
import {weatherThunk} from '../../rtk/weather/thunk';
import styles from './style';
import {TextComponent} from '../../components/text';
import {RootState} from '../../rtk/rootReducer';
import {WeatherDetail} from './organism/weatherInformation';
import {WindInformation} from './organism/windInfomration';
import SwitchMatrix from './moleculs/switchMetrics';

const HomeScreen: React.FC = () => {
  const dispatch = useDispatch();

  const {weather} = useSelector((state: RootState) => state.weatherReducers);

  const handleSelectLocation = (locationParam: string) => {
    dispatch(weatherThunk({location: locationParam}));
  };

  const renderEmptyWeather = () => {
    return (
      <View style={styles.wrapperEmptyWeather}>
        <TextComponent
          label="Please enter weather for location that you want"
          testId="pleaseInputLocation"
          styleContainerText={styles.textEmptyWeather}
        />
      </View>
    );
  };

  const renderWeatherDetails = () => {
    return (
      <View style={styles.wrapperBody}>
        <TextComponent
          label={weather.name}
          styleContainerText={styles.styleTextLocations}
          testId="text-location"
        />
        <WeatherDetail />
        <WindInformation />
        <SwitchMatrix />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <SearchLocation onPressButtonSearch={handleSelectLocation} />
      {weather !== null ? renderWeatherDetails() : renderEmptyWeather()}
    </View>
  );
};

export default HomeScreen;
