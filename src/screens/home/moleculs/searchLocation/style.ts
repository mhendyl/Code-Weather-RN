import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  customInputStyle: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    width: '80%',
    justifyContent: 'center',
  },
  customButtonStyle: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    width: '20%',
    textAlign: 'center',
  },
});

export default styles;
