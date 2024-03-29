import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignContent: 'center',
    textAlign: 'center',
  },
  wrapperWeather: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  wrapperDetail: {
    flexDirection: 'column',
  },
  wrapperTemperature: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textMainWeather: {
    fontSize: 20,
  },
  textWeatherDesc: {
    fontSize: 15,
    color: '#a0a8a2',
  },
  textTemperature: {
    fontSize: 30,
    textTransform: 'uppercase',
  },
});

export default styles;
